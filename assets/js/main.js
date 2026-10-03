(function () {
  // Intro portrait: honor config.json animatedAvatar on static hosts (/scroll/, classic).
  // PHP index.php already swaps src when serving /; this covers pure-static pages.
  (function applyAnimatedAvatar() {
    var img = document.querySelector(".portrait-ring img[data-avatar-animated]");
    if (!img) return;
    var animatedSrc = img.getAttribute("data-avatar-animated");
    var staticSrc = img.getAttribute("data-avatar-static");
    if (!animatedSrc) return;

    function configUrls() {
      var urls = [];
      var marker = "assets/";
      var probe = staticSrc || img.getAttribute("src") || "";
      var i = probe.indexOf(marker);
      if (i >= 0) urls.push(probe.slice(0, i) + "config.json");
      urls.push("/config.json");
      return urls;
    }

    function apply(cfg) {
      if (!cfg || typeof cfg !== "object") return;
      if (cfg.animatedAvatar) {
        if (img.getAttribute("src") !== animatedSrc) img.setAttribute("src", animatedSrc);
      } else if (staticSrc && img.getAttribute("src") !== staticSrc) {
        img.setAttribute("src", staticSrc);
      }
    }

    var urls = configUrls();
    var idx = 0;
    function tryNext() {
      if (idx >= urls.length) return;
      var url = urls[idx++];
      fetch(url, { cache: "no-store" })
        .then(function (r) {
          if (!r.ok) throw new Error("config " + r.status);
          return r.json();
        })
        .then(apply)
        .catch(tryNext);
    }
    tryNext();
  })();

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (header) {
    function syncHeaderScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    syncHeaderScroll();
    window.addEventListener("scroll", syncHeaderScroll, { passive: true });
  }
  if (toggle && header) {
    function setDropdownOpen(item, open) {
      if (!item) return;
      item.classList.toggle("is-open", open);
      const btn = item.querySelector(".nav-dropdown-toggle");
      const menu = item.querySelector(".nav-dropdown");
      if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
      if (menu) {
        if (open) menu.removeAttribute("inert");
        else menu.setAttribute("inert", "");
      }
    }
    function closeAllDropdowns() {
      header.querySelectorAll(".nav-item.has-dropdown.is-open").forEach(function (item) {
        setDropdownOpen(item, false);
      });
    }
    function setNavOpen(open) {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.innerHTML = open ? "✕" : "☰";
      if (!open) closeAllDropdowns();
    }
    function isDesktopNav() {
      return window.matchMedia("(min-width: 961px)").matches;
    }
    toggle.addEventListener("click", function () {
      setNavOpen(!header.classList.contains("is-open"));
    });
    header.querySelectorAll(".nav-primary a, .nav-socials a").forEach(function (a) {
      a.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
    header.querySelectorAll(".nav-item.has-dropdown").forEach(function (item) {
      const btn = item.querySelector(".nav-dropdown-toggle");
      if (btn) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          const willOpen = !item.classList.contains("is-open");
          header.querySelectorAll(".nav-item.has-dropdown").forEach(function (other) {
            if (other !== item) setDropdownOpen(other, false);
          });
          setDropdownOpen(item, willOpen);
        });
      }
      item.addEventListener("mouseenter", function () {
        if (!isDesktopNav()) return;
        header.querySelectorAll(".nav-item.has-dropdown").forEach(function (other) {
          if (other !== item) setDropdownOpen(other, false);
        });
        setDropdownOpen(item, true);
      });
      item.addEventListener("mouseleave", function () {
        if (!isDesktopNav()) return;
        setDropdownOpen(item, false);
      });
      item.addEventListener("focusin", function () {
        if (!isDesktopNav()) return;
        setDropdownOpen(item, true);
      });
      item.addEventListener("focusout", function (e) {
        if (!isDesktopNav()) return;
        if (e.relatedTarget && item.contains(e.relatedTarget)) return;
        setDropdownOpen(item, false);
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      const openItem = header.querySelector(".nav-item.has-dropdown.is-open");
      if (openItem) {
        setDropdownOpen(openItem, false);
        const btn = openItem.querySelector(".nav-dropdown-toggle");
        if (btn) btn.focus();
        return;
      }
      if (header.classList.contains("is-open")) setNavOpen(false);
    });
  }

  // Work page: Build tab (+ Advise/Passion links to Services/Passion)
  const tabs = document.querySelectorAll(".work-tab");
  if (tabs.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        const id = tab.getAttribute("data-tab");
        if (!id) return;
        tabs.forEach(function (t) {
          const on = t === tab;
          t.classList.toggle("is-active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
        document.querySelectorAll(".tab-panel").forEach(function (panel) {
          const match = panel.id === "panel-" + id;
          panel.classList.toggle("is-active", match);
          if (match) panel.removeAttribute("hidden");
          else panel.setAttribute("hidden", "");
        });
        try {
          const params = new URLSearchParams(window.location.search);
          if (id === "build") params.delete("tab");
          else params.set("tab", id);
          const q = params.toString();
          const next = window.location.pathname + (q ? "?" + q : "") + window.location.hash;
          window.history.replaceState({}, "", next);
        } catch (e) {}
      });
    });
    // Optional ?tab=build deep link; ?tab=passion → Passion; ?tab=advise → Services (advise story lives there)
    try {
      const tabParam = new URLSearchParams(window.location.search).get("tab");
      if (tabParam === "passion") {
        window.location.replace("../passion/");
        return;
      }
      if (tabParam === "advise") {
        window.location.replace("../services/#advise-services");
        return;
      }
      if (tabParam === "build" || tabParam === "certificates" || tabParam === "achievements" || tabParam === "credited") {
        const el = document.querySelector('.work-tab[data-tab="' + tabParam + '"]');
        if (el) el.click();
      }
    } catch (e) {}
  }

  // Work Build: multi-select tag filter (OR). data-tags on cards. Optional ?tag=
  (function initTagFilter() {
    const root = document.querySelector("#panel-build .tag-filter");
    const grid = document.querySelector("#panel-build .project-grid");
    if (!root || !grid) return;

    const chipsWrap = root.querySelector(".tag-filter-chips");
    const allBtn = root.querySelector("[data-filter-all]");
    const clearBtn = root.querySelector("[data-filter-clear]");
    const emptyMsg = document.querySelector("#panel-build .tag-filter-empty");
    const toggleBtn = root.querySelector(".tag-filter-toggle");
    const countEl = root.querySelector(".tag-filter-count");
    const cards = Array.prototype.slice.call(grid.querySelectorAll(".project-card[data-tags]"));
    if (!chipsWrap || !cards.length) return;

    // Preferred display order; remaining tags append alphabetically
    const preferred = [
      "AI generation",
      "AI API",
      "JS",
      "Node",
      "Express",
      "Mongo",
      "React",
      "GraphQL",
      "MERN",
      "PHP",
      "Python",
      "MySQL",
      "Sequelize",
      "Handlebars",
      "jQuery",
      "PWA",
      "IndexedDB",
      "Chart.js",
      "REST",
      "API",
      "n8n",
      "Automation",
      "Health",
      "Nutrition",
      "Fitness",
      "Clinical",
      "Product",
      "Walkthroughs",
      "Real Estate",
      "Video",
      "Audio",
      "Wellness",
      "Finance",
      "Education",
      "Productivity",
      "Social"
    ];

    function parseTags(str) {
      return String(str || "")
        .split(",")
        .map(function (t) { return t.trim(); })
        .filter(Boolean);
    }

    const tagSet = {};
    cards.forEach(function (card) {
      parseTags(card.getAttribute("data-tags")).forEach(function (t) {
        tagSet[t] = true;
      });
    });
    const allTags = Object.keys(tagSet);
    allTags.sort(function (a, b) {
      const ia = preferred.indexOf(a);
      const ib = preferred.indexOf(b);
      if (ia === -1 && ib === -1) return a.localeCompare(b);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });

    allTags.forEach(function (tag) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tag-chip";
      btn.setAttribute("data-tag", tag);
      btn.setAttribute("aria-pressed", "false");
      btn.textContent = tag;
      chipsWrap.appendChild(btn);
    });

    let selected = [];

    function readUrlTags() {
      try {
        const params = new URLSearchParams(window.location.search);
        const raw = params.getAll("tag");
        const split = [];
        raw.forEach(function (v) {
          v.split(",").forEach(function (p) {
            const t = p.trim();
            if (t) split.push(t);
          });
        });
        return split.filter(function (t) { return tagSet[t]; });
      } catch (e) {
        return [];
      }
    }

    function writeUrlTags() {
      try {
        const params = new URLSearchParams(window.location.search);
        params.delete("tag");
        selected.forEach(function (t) { params.append("tag", t); });
        const q = params.toString();
        const next = window.location.pathname + (q ? "?" + q : "") + window.location.hash;
        window.history.replaceState({}, "", next);
      } catch (e) {}
    }

    function applyFilter() {
      const chips = chipsWrap.querySelectorAll(".tag-chip");
      chips.forEach(function (chip) {
        const on = selected.indexOf(chip.getAttribute("data-tag")) !== -1;
        chip.classList.toggle("is-active", on);
        chip.setAttribute("aria-pressed", on ? "true" : "false");
      });
      if (allBtn) allBtn.classList.toggle("is-active", selected.length === 0);
      if (clearBtn) {
        clearBtn.disabled = selected.length === 0;
        clearBtn.classList.toggle("is-active", selected.length > 0);
      }

      let visible = 0;
      cards.forEach(function (card) {
        const tags = parseTags(card.getAttribute("data-tags"));
        const show =
          selected.length === 0 ||
          selected.some(function (s) { return tags.indexOf(s) !== -1; });
        const wasOut = card.classList.contains("is-filtered-out");
        card.classList.toggle("is-filtered-out", !show);
        if (wasOut && show) {
          card.classList.remove("is-filter-in");
          void card.offsetWidth;
          card.classList.add("is-filter-in");
        }
        if (show) visible += 1;
      });
      if (emptyMsg) emptyMsg.hidden = visible !== 0;

      if (countEl) {
        if (selected.length) {
          countEl.hidden = false;
          countEl.textContent = String(selected.length);
        } else {
          countEl.hidden = true;
          countEl.textContent = "";
        }
      }
      if (toggleBtn) {
        const label = toggleBtn.querySelector(".tag-filter-toggle-label");
        if (label) {
          label.textContent = selected.length
            ? "Filters (" + selected.length + ")"
            : "Filter by tag";
        }
      }
    }

    function setSelected(next, syncUrl) {
      selected = next.slice();
      applyFilter();
      if (syncUrl !== false) writeUrlTags();
    }

    chipsWrap.addEventListener("click", function (e) {
      const chip = e.target.closest(".tag-chip");
      if (!chip) return;
      const tag = chip.getAttribute("data-tag");
      const idx = selected.indexOf(tag);
      const next = selected.slice();
      if (idx === -1) next.push(tag);
      else next.splice(idx, 1);
      setSelected(next);
    });

    if (allBtn) {
      allBtn.addEventListener("click", function () {
        setSelected([]);
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        setSelected([]);
      });
    }

    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        const open = root.classList.toggle("is-open");
        toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    setSelected(readUrlTags(), false);
  })();

  // Contact form: path chooser + mailto subject.
  // Shared by /contact/ and the services contact drawer. ?path= selects build,
  // advise, or not sure; ?for= (or the drawer topic) names the card and prefills
  // the message.
  function advisePrefillMessage(topic) {
    return "I'd like a consult about " + topic + ".";
  }

  function buildPrefillMessage(topic) {
    return "I'd like help with " + topic + ".";
  }

  function isAdvisePrefill(value) {
    return /^I'd like a consult about [\s\S]+\.\s*$/.test(String(value || "").trim());
  }

  function isBuildPrefill(value) {
    return /^I'd like help with [\s\S]+\.\s*$/.test(String(value || "").trim());
  }

  function isDrawerPrefill(value) {
    return isAdvisePrefill(value) || isBuildPrefill(value);
  }

  function bindContactForm(form, options) {
    options = options || {};
    if (options.readQuery) {
      try {
        var params = new URLSearchParams(window.location.search);
        var path = params.get("path");
        var topic = (params.get("for") || "").trim();
        if (path === "build" || path === "advise" || path === "unsure" || path === "not-sure") {
          var radioValue = path === "not-sure" ? "unsure" : path;
          var radio = form.querySelector('input[name="path"][value="' + radioValue + '"]');
          if (radio) radio.checked = true;
        }
        if (topic) {
          var forInput = form.querySelector('[name="for"]');
          if (forInput) forInput.value = topic;
          if (!path || path === "advise") {
            var adviseRadio = form.querySelector('input[name="path"][value="advise"]');
            if (adviseRadio) adviseRadio.checked = true;
          }
          var seeded = form.querySelector("[name=message]");
          if (seeded && !seeded.value.trim()) {
            seeded.value = path === "build" ? buildPrefillMessage(topic) : advisePrefillMessage(topic);
          }
        }
      } catch (e) {}
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("[name=name]").value.trim();
      var email = form.querySelector("[name=email]").value.trim();
      var message = form.querySelector("[name=message]").value.trim();
      var pathEl = form.querySelector('input[name="path"]:checked');
      var pathValue = pathEl ? pathEl.value : "unsure";
      var forEl = form.querySelector('[name="for"]');
      var topic = forEl ? forEl.value.trim() : "";
      var err = form.querySelector(".form-error");
      function showFormError(msg) {
        if (!err) return;
        err.textContent = msg;
        err.classList.toggle("is-shown", !!msg);
      }
      if (!name || !email || !message) {
        showFormError("Please fill in all fields.");
        return;
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        showFormError("Please enter a valid email (user@domain.ext).");
        return;
      }
      showFormError("");

      var subjectLabel = "General inquiry";
      if (pathValue === "build") subjectLabel = "Build inquiry";
      else if (pathValue === "advise") subjectLabel = "Consult inquiry (automation / SEO / a11y / marketing)";
      else subjectLabel = "Inquiry (path TBD)";
      if (topic) subjectLabel = subjectLabel + " — " + topic;

      var pathLine =
        pathValue === "build"
          ? "Path: Build — I need something built"
          : pathValue === "advise"
          ? "Path: Advise — I want a consult (automation / SEO / a11y / marketing / business)"
          : "Path: Not sure — please help choose build vs advise";
      if (topic) pathLine += "\nFor: " + topic;

      var subject = encodeURIComponent(subjectLabel + " from " + name);
      var body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n" + pathLine + "\n\n" + message
      );
      window.location.href = "mailto:weng.f.fung@gmail.com?subject=" + subject + "&body=" + body;
    });
  }

  var contactPageForm = document.querySelector("#contact-form");
  if (contactPageForm) bindContactForm(contactPageForm, { readQuery: true });
  var adviseDrawerForm = document.querySelector("#advise-drawer-form");
  if (adviseDrawerForm) bindContactForm(adviseDrawerForm, { readQuery: false });

  // Advise and build cards open the same contact form as a bottom-right sidebar (no page navigation).
  (function initAdviseContactDrawer() {
    var drawer = document.querySelector("#contact-drawer");
    var form = document.querySelector("#advise-drawer-form");
    if (!drawer || !form) return;
    var panel = drawer.querySelector(".contact-drawer-panel");
    var title = document.querySelector("#contact-drawer-title");
    var topicEl = document.querySelector("#contact-drawer-topic");
    var forInput = form.querySelector('[name="for"]');
    var message = form.querySelector("[name=message]");
    var closeBtn = drawer.querySelector(".contact-drawer-close");
    var lastTrigger = null;
    var reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function reduced() {
      return !!(reduceQuery && reduceQuery.matches);
    }

    var topicLead = document.querySelector("#contact-drawer-topic-lead");
    var sameLink = document.querySelector("#contact-drawer-same");

    function applyTopic(topic, path) {
      path = path === "build" ? "build" : "advise";
      if (forInput) forInput.value = topic;
      if (topicEl) topicEl.textContent = topic;
      if (topicLead) {
        topicLead.textContent = path === "build" ? "This build is for " : "This consult is for ";
      }
      if (title) title.textContent = "Contact — " + topic;
      if (sameLink) {
        sameLink.href = "../contact/?path=" + path;
        sameLink.textContent = "contact/?path=" + path;
      }
      var radio = form.querySelector('input[name="path"][value="' + path + '"]');
      if (radio) radio.checked = true;
      if (message && (!message.value.trim() || isDrawerPrefill(message.value))) {
        message.value = path === "build" ? buildPrefillMessage(topic) : advisePrefillMessage(topic);
      }
    }

    function focusables() {
      return Array.prototype.filter.call(
        panel.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'),
        function (el) {
          if (el.type === "hidden" || el.hidden) return false;
          return el.offsetParent !== null || el === panel;
        }
      );
    }

    function openDrawer(trigger, topic, path) {
      lastTrigger = trigger || null;
      applyTopic(topic, path);
      if (reduced()) drawer.classList.add("is-open");
      drawer.hidden = false;
      document.body.classList.add("contact-drawer-open");
      if (reduced()) {
        if (closeBtn) closeBtn.focus();
        return;
      }
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          drawer.classList.add("is-open");
          if (closeBtn) closeBtn.focus();
        });
      });
    }

    function finishClose() {
      drawer.classList.remove("is-open");
      drawer.hidden = true;
      document.body.classList.remove("contact-drawer-open");
      if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
    }

    function closeDrawer() {
      if (drawer.hidden) return;
      drawer.classList.remove("is-open");
      if (reduced()) {
        finishClose();
        return;
      }
      var done = false;
      function onEnd(e) {
        if (done || e.target !== panel) return;
        done = true;
        panel.removeEventListener("transitionend", onEnd);
        finishClose();
      }
      panel.addEventListener("transitionend", onEnd);
      window.setTimeout(function () {
        if (done) return;
        done = true;
        panel.removeEventListener("transitionend", onEnd);
        finishClose();
      }, 320);
    }

    document.querySelectorAll(".advise-card-open").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var topic = btn.getAttribute("data-advise-for") || "Advise";
        openDrawer(btn, topic, "advise");
      });
    });

    document.querySelectorAll(".build-card-open").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var topic = btn.getAttribute("data-build-for") || "Build";
        openDrawer(btn, topic, "build");
      });
    });

    drawer.addEventListener("click", function (e) {
      if (e.target.closest("[data-contact-drawer-close]")) closeDrawer();
    });

    document.addEventListener("keydown", function (e) {
      if (drawer.hidden) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeDrawer();
        return;
      }
      if (e.key !== "Tab") return;
      var items = focusables();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  })();

  // Student name privacy: deterministic last-name scramble (mirrors assets/php/scramble-name.php)
  function meCrc32(str) {
    let crc = 0 ^ -1;
    for (let i = 0; i < str.length; i++) {
      crc = (crc >>> 8) ^ meCrc32.table[(crc ^ str.charCodeAt(i)) & 0xff];
    }
    return (crc ^ -1) >>> 0;
  }
  meCrc32.table = (function () {
    const table = new Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[i] = c >>> 0;
    }
    return table;
  })();

  function meScrambleToken(token) {
    token = String(token || "").trim();
    if (!token) return token;
    const chars = Array.from(token);
    const letterIdx = [];
    for (let i = 0; i < chars.length; i++) {
      if (/\p{L}/u.test(chars[i])) letterIdx.push(i);
    }
    if (letterIdx.length <= 1) return token;
    const letters = letterIdx.map(function (i) { return chars[i]; });
    const first = letters.shift();
    let seed = meCrc32(token.toLowerCase());
    for (let i = letters.length - 1; i > 0; i--) {
      seed = (Math.imul(seed, 1103515245) + 12345) & 0x7fffffff;
      const j = seed % (i + 1);
      const tmp = letters[i];
      letters[i] = letters[j];
      letters[j] = tmp;
    }
    const origRest = letterIdx.slice(1).map(function (i) { return chars[i]; });
    let same = letters.length === origRest.length;
    if (same) {
      for (let i = 0; i < letters.length; i++) {
        if (letters[i] !== origRest[i]) { same = false; break; }
      }
    }
    if (same && letters.length >= 2) {
      const tmp = letters[0];
      letters[0] = letters[letters.length - 1];
      letters[letters.length - 1] = tmp;
    }
    letters.unshift(first);
    letterIdx.forEach(function (idx, k) { chars[idx] = letters[k]; });
    return chars.join("");
  }

  function mePrivacyNameHtml(full) {
    full = String(full || "").trim().replace(/\s+/g, " ");
    function esc(s) {
      return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }
    const sp = full.indexOf(" ");
    if (sp === -1) return esc(full);
    const first = full.slice(0, sp);
    const last = full.slice(sp + 1);
    const scrambled = meScrambleToken(last);
    return (
      esc(first) +
      ' <span class="student-lastname" title="Last name blurred for privacy" aria-label="last name hidden">' +
      esc(scrambled) +
      "</span>"
    );
  }


  // Credentials archive: hash deep links + image lightbox
  (function initCredentials() {
    const root = document.querySelector(".cred-page");
    if (!root) return;

    const achievementAnchors = ["achievements", "open-source", "leaderboards", "top-marks"];
    const creditedAnchors = ["credited", "featured"];

    function tabForAnchor(id) {
      if (achievementAnchors.indexOf(id) !== -1) return "achievements";
      if (creditedAnchors.indexOf(id) !== -1) return "credited";
      if (id === "certificates") return "certificates";
      return "";
    }

    function showTab(name) {
      const tab = document.querySelector('.work-tab[data-tab="' + name + '"]');
      if (tab && tab.getAttribute("aria-selected") !== "true") tab.click();
    }

    function scrollToId(id) {
      const el = document.getElementById(id);
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }

    root.addEventListener("click", function (e) {
      const link = e.target.closest("a[href^='#']");
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      if (!id) return;
      const tabName = tabForAnchor(id);
      if (!tabName) return;
      showTab(tabName);
      e.preventDefault();
      if (id === "achievements" || id === "certificates") {
        history.pushState(null, "", "#" + id);
        return;
      }
      history.pushState(null, "", "#" + id);
      scrollToId(id);
    });

    const hash = (window.location.hash || "").replace("#", "");
    const hashTab = tabForAnchor(hash);
    if (hashTab) showTab(hashTab);
    if (hash && hash !== "achievements" && hash !== "certificates") {
      window.setTimeout(function () { scrollToId(hash); }, 0);
    }

    const dialog = document.getElementById("cred-lightbox");
    const shot = document.getElementById("cred-lightbox-img");
    const caption = document.getElementById("cred-lightbox-caption");
    const verify = document.getElementById("cred-lightbox-verify");
    if (!dialog || !shot || !caption) return;

    let lastTrigger = null;

    function setVerifyLink(btn) {
      if (!verify) return;
      const href = btn && btn.getAttribute("data-verify-href");
      const label = btn && btn.getAttribute("data-verify-label");
      verify.replaceChildren();
      if (!href || !label) {
        verify.hidden = true;
        return;
      }
      const a = document.createElement("a");
      a.href = href;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = label;
      verify.appendChild(a);
      verify.hidden = false;
    }

    root.addEventListener("click", function (e) {
      const btn = e.target.closest(".cred-enlarge");
      if (!btn) return;
      const src = btn.getAttribute("data-full");
      if (!src) return;
      shot.src = src;
      shot.alt = btn.getAttribute("aria-label") || "";
      caption.textContent = btn.getAttribute("data-caption") || "";
      setVerifyLink(btn);
      lastTrigger = btn;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else window.open(src, "_blank", "noopener");
    });

    dialog.addEventListener("click", function (e) {
      if (e.target === dialog || e.target.closest("[data-lightbox-close]")) {
        dialog.close();
      }
    });
    dialog.addEventListener("close", function () {
      shot.removeAttribute("src");
      shot.alt = "";
      setVerifyLink(null);
      if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
    });
  })();

  // Passion: teaching detail panel
  (function initTeachingPanel() {
    const dialog = document.getElementById("teaching-panel");
    if (!dialog) return;

    // Manager & company praises: click-to-enlarge (reuse credentials lightbox pattern)
    (function initTeachingLightbox() {
      const lb = document.getElementById("teaching-lightbox");
      const shot = document.getElementById("teaching-lightbox-img");
      const caption = document.getElementById("teaching-lightbox-caption");
      if (!lb || !shot || !caption) return;
      let lastTrigger = null;
      dialog.addEventListener("click", function (e) {
        const btn = e.target.closest(".teaching-enlarge");
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        const src = btn.getAttribute("data-full");
        if (!src) return;
        shot.src = src;
        shot.alt = btn.getAttribute("aria-label") || "";
        caption.textContent = btn.getAttribute("data-caption") || "";
        lastTrigger = btn;
        if (typeof lb.showModal === "function") lb.showModal();
        else window.open(src, "_blank", "noopener");
      });
      lb.addEventListener("click", function (e) {
        if (e.target === lb || e.target.closest("[data-lightbox-close]")) {
          lb.close();
        }
      });
      lb.addEventListener("close", function () {
        shot.removeAttribute("src");
        shot.alt = "";
        if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
      });
    })();


    let lastTrigger = null;
    let logRows = null;
    let logLoaded = false;

    function openPanel(trigger) {
      lastTrigger = trigger || null;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      try {
        if (window.location.hash !== "#teaching") {
          history.replaceState({}, "", "#teaching");
        }
      } catch (e) {}
      ensureLog();
    }

    function closePanel() {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    }

    document.querySelectorAll("[data-open-teaching]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        if (el.tagName === "BUTTON" || el.tagName === "A") {
          e.preventDefault();
          e.stopPropagation();
          openPanel(el);
          return;
        }
        if (e.target.closest("a")) return;
        if (e.target.closest("[data-open-teaching]")) return;
        e.preventDefault();
        openPanel(el);
      });
      if (el.tagName === "ARTICLE") {
        el.setAttribute("tabindex", "0");
        el.setAttribute("role", "button");
        el.setAttribute("aria-haspopup", "dialog");
        el.setAttribute("aria-controls", "teaching-panel");
        el.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openPanel(el);
          }
        });
      }
    });

    dialog.addEventListener("click", function (e) {
      if (e.target === dialog || e.target.closest("[data-teaching-close]")) {
        closePanel();
      }
    });
    dialog.addEventListener("close", function () {
      try {
        if (window.location.hash === "#teaching") {
          history.replaceState({}, "", window.location.pathname + window.location.search);
        }
      } catch (e) {}
      if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
    });

    try {
      if ((window.location.hash || "").replace("#", "") === "teaching") {
        window.setTimeout(function () { openPanel(document.getElementById("teaching")); }, 0);
      }
    } catch (e) {}

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
            if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
            inQuotes = false; i++; continue;
          }
          field += c; i++; continue;
        }
        if (c === '"') { inQuotes = true; i++; continue; }
        if (c === ",") { row.push(field); field = ""; i++; continue; }
        if (c === "\n" || c === "\r") {
          if (c === "\r" && text[i + 1] === "\n") i++;
          row.push(field); field = "";
          if (row.length > 1 || (row[0] && row[0].trim())) rows.push(row);
          row = []; i++; continue;
        }
        field += c; i++;
      }
      if (field.length || row.length) { row.push(field); rows.push(row); }
      return rows;
    }

    function ensureLog() {
      if (logLoaded) return;
      logLoaded = true;
      const status = document.getElementById("teaching-log-status");
      const body = document.getElementById("teaching-log-body");
      const q = document.getElementById("teaching-log-q");
      if (!body) return;

      const csvUrl = new URL("../assets/data/student-ratings.csv", window.location.href).href;
      fetch(csvUrl)
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.text();
        })
        .then(function (text) {
          const grid = parseCsv(text);
          if (!grid.length) throw new Error("empty");
          const header = grid[0].map(function (h) { return String(h || "").trim(); });
          const idx = {
            name: header.indexOf("Student Full Name:"),
            date: header.indexOf("Session Date:"),
            topics: header.indexOf("Topic(s) Covered"),
            comment: header.indexOf("Please share some comments in regards to the session and tutor. Thank you.")
          };
          logRows = grid.slice(1).map(function (r) {
            return {
              name: (r[idx.name] || "").trim(),
              date: (r[idx.date] || "").trim(),
              topics: (r[idx.topics] || "").trim(),
              comment: (r[idx.comment] || "").trim()
            };
          }).filter(function (r) { return r.name || r.comment; });
          if (status) status.textContent = logRows.length + " sessions in log";
          renderLog("");
          if (q) {
            q.addEventListener("input", function () {
              renderLog(q.value || "");
            });
          }
        })
        .catch(function () {
          if (status) status.textContent = "Could not load teaching log.";
          body.innerHTML = "<tr><td colspan=\"4\">Teaching log unavailable in this view.</td></tr>";
        });
    }

    function renderLog(query) {
      const body = document.getElementById("teaching-log-body");
      const status = document.getElementById("teaching-log-status");
      if (!body || !logRows) return;
      const q = String(query || "").trim().toLowerCase();
      const filtered = !q
        ? logRows
        : logRows.filter(function (r) {
            return (
              r.name.toLowerCase().indexOf(q) !== -1 ||
              r.topics.toLowerCase().indexOf(q) !== -1 ||
              r.comment.toLowerCase().indexOf(q) !== -1 ||
              r.date.toLowerCase().indexOf(q) !== -1
            );
          });
      if (status) {
        status.textContent = filtered.length + " of " + logRows.length + " sessions" + (q ? " (filtered)" : "");
      }
      const max = 200;
      const slice = filtered.slice(0, max);
      body.innerHTML = slice
        .map(function (r) {
          function esc(s) {
            return String(s)
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;");
          }
          return (
            "<tr><td>" +
            esc(r.date) +
            "</td><td>" +
            mePrivacyNameHtml(r.name) +
            "</td><td>" +
            esc(r.topics) +
            "</td><td>" +
            esc(r.comment) +
            "</td></tr>"
          );
        })
        .join("");
      if (!slice.length) {
        body.innerHTML = "<tr><td colspan=\"4\">No sessions match that filter.</td></tr>";
      } else if (filtered.length > max) {
        body.innerHTML +=
          "<tr><td colspan=\"4\">Showing first " +
          max +
          " matches — refine the filter to narrow further.</td></tr>";
      }
    }
  })();


  // Soft Style page enter / leave + on-scroll reveals (skip GSAP depth theater)
  (function initSoftMotion() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDepth = document.body.classList.contains("depth-page");
    if (reduce || isDepth) return;

    // Light page-enter on classic Soft Style pages
    requestAnimationFrame(function () {
      document.body.classList.add("is-page-ready");
    });

    // Intercept same-site Soft Style navigations for a brief fade/slide out
    document.addEventListener("click", function (e) {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      if (a.classList.contains("brand")) return;
      const href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) return;
      let url;
      try {
        url = new URL(href, window.location.href);
      } catch (err) {
        return;
      }
      if (url.origin !== window.location.origin) return;
      // Stay on Soft Style routes; skip hash-only and same-page
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      // Avoid fighting scroll theater entry
      if (/\/scroll\/?$/.test(url.pathname)) return;

      e.preventDefault();
      if (document.body.classList.contains("is-page-exit")) return;
      document.body.classList.add("is-page-exit");
      window.setTimeout(function () {
        window.location.href = url.href;
      }, 220);
    });

    // Subtle fade/rise for cards / primary blocks (sections already get page-enter)
    const targets = document.querySelectorAll(
      ".project-card, .icon-card, .path-card, .advise-card, .contact-card, .about-photo, .about-copy, .testimonial-quote, .testimonial-photo, .oss-pr-card, .oss-stance-item, .cred-card, .video-block, .section-head"
    );
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const groups = [];
    targets.forEach(function (el) {
      const parent = el.parentElement;
      let g = null;
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].parent === parent) { g = groups[i]; break; }
      }
      if (!g) { g = { parent: parent, els: [] }; groups.push(g); }
      g.els.push(el);
    });
    groups.forEach(function (g) {
      g.els.forEach(function (el, i) {
        el.classList.add("soft-reveal");
        el.style.setProperty("--reveal-delay", Math.min(i, 4) * 0.04 + "s");
      });
    });

    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    targets.forEach(function (el) {
      io.observe(el);
    });
  })();

  // Content images fade in once, if they are not already decoded. Cert marks stay put.
  (function initSoftImages() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const imgs = document.querySelectorAll(".portrait-ring img, .testimonial-photo img, .video-cover > img, .about-photo img, .cred-enlarge img");
    imgs.forEach(function (img) {
      function done() {
        img.classList.remove("soft-pending");
        img.classList.add("soft-loaded");
      }
      if (img.complete && img.naturalWidth) return;
      img.classList.add("soft-pending");
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  })();

  // Hero cert row: optional image lightbox (external verify links use <a target=_blank>).
  (function initHeroCertLightbox() {
    const dialog = document.getElementById("hero-cert-lightbox");
    const shot = document.getElementById("hero-cert-lightbox-img");
    const caption = document.getElementById("hero-cert-lightbox-caption");
    const verify = document.getElementById("hero-cert-lightbox-verify");
    if (!dialog || !shot || !caption) return;
    let lastTrigger = null;

    function setVerifyLink(btn) {
      if (!verify) return;
      const href = btn && btn.getAttribute("data-verify-href");
      const label = btn && btn.getAttribute("data-verify-label");
      verify.replaceChildren();
      if (!href || !label) {
        verify.hidden = true;
        return;
      }
      const a = document.createElement("a");
      a.href = href;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = label;
      verify.appendChild(a);
      verify.hidden = false;
    }

    document.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-cert-lightbox]");
      if (!btn) return;
      e.preventDefault();
      const src = btn.getAttribute("data-cert-lightbox");
      if (!src) return;
      shot.src = src;
      shot.alt = btn.getAttribute("data-cert-caption") || btn.getAttribute("aria-label") || "Certificate";
      caption.textContent = btn.getAttribute("data-cert-caption") || "";
      setVerifyLink(btn);
      lastTrigger = btn;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else window.open(src, "_blank", "noopener");
    });

    dialog.addEventListener("click", function (e) {
      if (e.target === dialog || e.target.closest("[data-lightbox-close]")) {
        dialog.close();
      }
    });
    dialog.addEventListener("close", function () {
      shot.removeAttribute("src");
      shot.alt = "";
      setVerifyLink(null);
      if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
    });
  })();


  // Bottom cert ticker: even loop (no empty gap) and clicks that survive the animation.
  (function initCertTicker() {
    var reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    var tickers = document.querySelectorAll(".cert-ticker");
    if (!tickers.length) return;
    var layouts = [];

    function certControl(node) {
      if (!node || !node.closest) return null;
      return node.closest("a[href], button[data-cert-lightbox]");
    }

    tickers.forEach(function (ticker) {
      var track = ticker.querySelector(".cert-ticker-track");
      var windowEl = ticker.querySelector(".cert-ticker-window");
      if (!track || !windowEl) return;
      var swallowClick = false;
      var down = null;

      function seedOnly() {
        var lists = track.querySelectorAll("ul.hero-certs");
        var seed = lists[0];
        for (var i = 1; i < lists.length; i++) lists[i].remove();
        return seed;
      }

      function layout() {
        var seed = seedOnly();
        if (!seed) return;
        track.style.removeProperty("--cert-shift");
        track.style.animationDuration = "";
        if (reduceQuery.matches) return;
        var seq = seed.getBoundingClientRect().width;
        if (seq < 2) return;
        var view = Math.max(windowEl.clientWidth || 0, window.innerWidth || 0);
        var copies = 1;
        while (copies * seq < view + seq - 1 && copies < 12) {
          var clone = seed.cloneNode(true);
          clone.setAttribute("aria-hidden", "true");
          clone.setAttribute("data-cert-clone", "");
          clone.removeAttribute("aria-labelledby");
          clone.querySelectorAll("a, button").forEach(function (el) {
            el.tabIndex = -1;
          });
          track.appendChild(clone);
          copies++;
        }
        var lists = track.querySelectorAll("ul.hero-certs");
        var shift = seq;
        if (lists[1]) {
          // Layout pixels, not screen pixels — a 3D ancestor must not scale the loop offset.
          shift = lists[1].offsetLeft - lists[0].offsetLeft;
          if (shift < 2) shift = lists[1].getBoundingClientRect().left - lists[0].getBoundingClientRect().left;
        }
        if (shift < 2) return;
        track.style.setProperty("--cert-shift", shift.toFixed(3) + "px");
        track.style.animationDuration = Math.max(28, Math.round(shift / 32)) + "s";
      }

      function controlAt(x, y) {
        var stack = document.elementsFromPoint(x, y);
        for (var i = 0; i < stack.length; i++) {
          var hit = certControl(stack[i]);
          if (hit && ticker.contains(hit)) return hit;
        }
        var items = track.querySelectorAll(".hero-cert");
        for (var j = 0; j < items.length; j++) {
          var rect = items[j].getBoundingClientRect();
          if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) return items[j];
        }
        return null;
      }

      function openCert(ctrl) {
        if (!ctrl) return;
        if (ctrl.hasAttribute("data-cert-lightbox")) {
          ctrl.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
          return;
        }
        var href = ctrl.getAttribute("href");
        if (!href) return;
        var url;
        try { url = new URL(href, window.location.href); }
        catch (err) { return; }
        var blank = ctrl.getAttribute("target") === "_blank" || url.origin !== window.location.origin;
        if (blank) {
          window.open(url.href, "_blank", "noopener,noreferrer");
          return;
        }
        var soften = !document.body.classList.contains("depth-page") && !reduceQuery.matches;
        if (soften) {
          if (!document.body.classList.contains("is-page-exit")) {
            document.body.classList.add("is-page-exit");
            window.setTimeout(function () { window.location.href = url.href; }, 220);
          }
          return;
        }
        window.location.href = url.href;
      }

      ticker.addEventListener("pointerdown", function (e) {
        if (e.button !== 0) return;
        track.style.animationPlayState = "paused";
        down = { x: e.clientX, y: e.clientY, ctrl: controlAt(e.clientX, e.clientY) };
      });

      ticker.addEventListener("pointerup", function (e) {
        if (!down || e.button !== 0) return;
        var dx = e.clientX - down.x;
        var dy = e.clientY - down.y;
        var pressed = down.ctrl;
        down = null;
        track.style.animationPlayState = "";
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (dx * dx + dy * dy > 64) return;
        var ctrl = controlAt(e.clientX, e.clientY) || pressed;
        if (!ctrl || !ticker.contains(ctrl)) return;
        var top = document.elementFromPoint(e.clientX, e.clientY);
        if (top && pressed && pressed === ctrl && pressed.contains(top)) return;
        swallowClick = true;
        openCert(ctrl);
      });

      ticker.addEventListener("pointercancel", function () {
        down = null;
        track.style.animationPlayState = "";
      });

      ticker.addEventListener("click", function (e) {
        if (!swallowClick || !e.isTrusted) return;
        swallowClick = false;
        e.preventDefault();
        e.stopPropagation();
      }, true);

      layouts.push(layout);
      layout();
      window.addEventListener("load", layout);
      if ("ResizeObserver" in window) {
        var resizeTimer = 0;
        var ro = new ResizeObserver(function () {
          window.clearTimeout(resizeTimer);
          resizeTimer = window.setTimeout(layout, 80);
        });
        ro.observe(windowEl);
      } else {
        window.addEventListener("resize", layout);
      }
      track.querySelectorAll("img").forEach(function (img) {
        if (img.complete) return;
        img.addEventListener("load", layout, { once: true });
      });
    });

    if (reduceQuery.addEventListener) {
      reduceQuery.addEventListener("change", function () {
        layouts.forEach(function (fn) { fn(); });
      });
    }
  })();


})();
