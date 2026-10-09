/**
 * Reads student-private-info/student-ratings.csv (gitignored originals)
 * and writes assets/data/student-sessions.json with last names scrambled.
 * Also stamps data-student-count / data-session-count in the HTML pages.
 *
 * Original spellings never go into the JSON or the HTML this script writes.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "student-private-info", "student-ratings.csv");
const outPath = path.join(root, "assets", "data", "student-sessions.json");
const htmlPaths = [
  path.join(root, "credentials", "index.html"),
  path.join(root, "about", "students", "index.html"),
  path.join(root, "about", "index.html"),
  path.join(root, "passion", "index.html"),
];

function crc32(str) {
  let crc = 0 ^ -1;
  for (let i = 0; i < str.length; i++) {
    crc = (crc >>> 8) ^ crc32.table[(crc ^ str.charCodeAt(i)) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}
crc32.table = (() => {
  const table = new Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[i] = c >>> 0;
  }
  return table;
})();

/** Same letter shuffle as assets/js/main.js meScrambleToken. */
function scrambleToken(token) {
  token = String(token || "").trim();
  if (!token) return token;
  const chars = Array.from(token);
  const letterIdx = [];
  for (let i = 0; i < chars.length; i++) {
    if (/\p{L}/u.test(chars[i])) letterIdx.push(i);
  }
  if (letterIdx.length <= 1) return token;
  const letters = letterIdx.map((i) => chars[i]);
  const first = letters.shift();
  let seed = crc32(token.toLowerCase());
  for (let i = letters.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1103515245) + 12345) & 0x7fffffff;
    const j = seed % (i + 1);
    const tmp = letters[i];
    letters[i] = letters[j];
    letters[j] = tmp;
  }
  const origRest = letterIdx.slice(1).map((i) => chars[i]);
  let same = letters.length === origRest.length;
  if (same) {
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] !== origRest[i]) {
        same = false;
        break;
      }
    }
  }
  if (same && letters.length >= 2) {
    const tmp = letters[0];
    letters[0] = letters[letters.length - 1];
    letters[letters.length - 1] = tmp;
  }
  letters.unshift(first);
  letterIdx.forEach((idx, k) => {
    chars[idx] = letters[k];
  });
  return chars.join("");
}

function parseCsv(text) {
  const rows = [];
  let i = 0;
  let field = "";
  let row = [];
  let inQuotes = false;
  while (i < text.length) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i++;
        continue;
      }
      field += c;
      i++;
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      i++;
      continue;
    }
    if (c === ",") {
      row.push(field);
      field = "";
      i++;
      continue;
    }
    if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      if (row.length > 1 || (row[0] && row[0].trim())) rows.push(row);
      row = [];
      i++;
      continue;
    }
    field += c;
    i++;
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function splitName(full) {
  const cleaned = String(full || "").trim().replace(/\s+/g, " ");
  const sp = cleaned.indexOf(" ");
  if (sp === -1) return [cleaned, ""];
  return [cleaned.slice(0, sp), cleaned.slice(sp + 1)];
}

function isLetter(ch) {
  return ch !== "" && /\p{L}/u.test(ch);
}

function replacePhrase(text, phrase, replacement) {
  if (!phrase || phrase.length < 2) return text;
  const lower = text.toLowerCase();
  const needle = phrase.toLowerCase();
  let out = "";
  let i = 0;
  while (i < text.length) {
    const idx = lower.indexOf(needle, i);
    if (idx === -1) {
      out += text.slice(i);
      break;
    }
    const before = idx === 0 ? "" : text[idx - 1];
    const afterIdx = idx + needle.length;
    const after = afterIdx >= text.length ? "" : text[afterIdx];
    if (!isLetter(before) && !isLetter(after)) {
      out += text.slice(i, idx) + replacement;
      i = afterIdx;
    } else {
      out += text.slice(i, idx + 1);
      i = idx + 1;
    }
  }
  return out;
}

function containsPhrase(text, phrase) {
  if (!phrase || phrase.length < 3) return false;
  const lower = text.toLowerCase();
  const needle = phrase.toLowerCase();
  let i = 0;
  while (i < lower.length) {
    const idx = lower.indexOf(needle, i);
    if (idx === -1) return false;
    const before = idx === 0 ? "" : text[idx - 1];
    const afterIdx = idx + needle.length;
    const after = afterIdx >= text.length ? "" : text[afterIdx];
    if (!isLetter(before) && !isLetter(after)) return true;
    i = idx + 1;
  }
  return false;
}

if (!fs.existsSync(sourcePath)) {
  if (fs.existsSync(outPath)) {
    console.log("student-private-info/student-ratings.csv is not on this machine. Leaving the built JSON in place.");
    process.exit(0);
  }
  console.error("Missing student-private-info/student-ratings.csv and no built JSON to keep.");
  process.exit(1);
}

const grid = parseCsv(fs.readFileSync(sourcePath, "utf8"));
if (!grid.length) {
  console.error("Student ratings CSV is empty.");
  process.exit(1);
}
const header = grid[0].map((h) => String(h || "").trim());
const col = {
  name: header.indexOf("Student Full Name:"),
  course: header.indexOf("Your Course Type"),
  date: header.indexOf("Session Date:"),
  topics: header.indexOf("Topic(s) Covered"),
  help: header.indexOf("Did the session help you?"),
  interest: header.indexOf("Do you feel that the tutor was genuinely interested in helping you?"),
  comment: header.indexOf("Please share some comments in regards to the session and tutor. Thank you."),
};
for (const [key, idx] of Object.entries(col)) {
  if (idx < 0) {
    console.error("CSV is missing a required column: " + key);
    process.exit(1);
  }
}

const phrases = new Map();
const uniqueStudents = new Set();
const rawRows = [];

for (const r of grid.slice(1)) {
  const name = String(r[col.name] || "").trim().replace(/\s+/g, " ");
  const comment = String(r[col.comment] || "").trim();
  if (!name && !comment) continue;
  const [first, last] = splitName(name);
  if (name) uniqueStudents.add(name.toLowerCase());
  if (last.length >= 2) {
    phrases.set(last.toLowerCase(), last);
    last.split(/[\s-]+/).forEach((part) => {
      if (part.length >= 4) phrases.set(part.toLowerCase(), part);
    });
  }
  rawRows.push({
    first,
    last,
    date: String(r[col.date] || "").trim(),
    topics: String(r[col.topics] || "").trim(),
    comment,
    course: String(r[col.course] || "").trim(),
    help: String(r[col.help] || "").trim(),
    interest: String(r[col.interest] || "").trim(),
  });
}

const phraseList = [...phrases.values()].sort((a, b) => b.length - a.length);
const scrambledByPhrase = new Map(phraseList.map((phrase) => [phrase.toLowerCase(), scrambleToken(phrase)]));

function scrub(text) {
  let out = text;
  for (const phrase of phraseList) {
    const replacement = scrambledByPhrase.get(phrase.toLowerCase());
    out = replacePhrase(out, phrase, replacement);
  }
  return out;
}

let interestNotFive = 0;
const sessions = rawRows.map((row) => {
  if (row.interest && row.interest !== "5") interestNotFive++;
  const last = row.last ? scrambleToken(row.last) : "";
  if (row.last.length > 1 && last === row.last) {
    console.error("Scramble left a last name unchanged. Refusing to write JSON.");
    process.exit(1);
  }
  return {
    first: row.first,
    last,
    date: row.date,
    topics: scrub(row.topics),
    comment: scrub(row.comment),
    course: row.course,
  };
});

const leaked = [];
for (const phrase of phraseList) {
  if (phrase.length < 3) continue;
  for (const session of sessions) {
    const haystack = session.last + "\n" + session.topics + "\n" + session.comment;
    if (containsPhrase(haystack, phrase)) leaked.push(phrase.length);
  }
}
if (leaked.length) {
  console.error("Privacy check failed. Original last-name spellings would be written (" + leaked.length + " hits). JSON was not written.");
  process.exit(1);
}

const payload = {
  privacy: "Last names are letter-scrambled. Originals stay in student-private-info/ and are not in this file.",
  studentCount: uniqueStudents.size,
  sessionCount: sessions.length,
  tutorInterestAllFive: interestNotFive === 0,
  sessions,
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + "\n");

const studentCount = String(payload.studentCount);
const sessionCount = String(payload.sessionCount);
let stamped = 0;
for (const htmlPath of htmlPaths) {
  if (!fs.existsSync(htmlPath)) continue;
  const before = fs.readFileSync(htmlPath, "utf8");
  const after = before
    .replace(/(data-student-count>)[^<]*(<)/g, "$1" + studentCount + "$2")
    .replace(/(data-session-count>)[^<]*(<)/g, "$1" + sessionCount + "$2");
  if (after !== before) {
    fs.writeFileSync(htmlPath, after);
    stamped++;
  }
}

console.log(
  "Wrote " +
    path.relative(root, outPath) +
    " — " +
    payload.studentCount +
    " students, " +
    payload.sessionCount +
    " sessions. Stamped " +
    stamped +
    " HTML files."
);
