(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("is-open");
      const open = header.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.innerHTML = open ? "✕" : "☰";
    });
    header.querySelectorAll(".nav-primary a").forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = "☰";
      });
    });
  }

  // Work page: Build | Advise tabs
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
    // Optional ?tab=advise|build deep link; ?tab=passion → dedicated Passion page
    try {
      const tabParam = new URLSearchParams(window.location.search).get("tab");
      if (tabParam === "passion") {
        window.location.replace("../passion/");
        return;
      }
      if (tabParam === "advise" || tabParam === "build") {
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
      "PHP",
      "Python",
      "MySQL",
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
      "Productivity"
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

      let visible = 0;
      cards.forEach(function (card) {
        const tags = parseTags(card.getAttribute("data-tags"));
        const show =
          selected.length === 0 ||
          selected.some(function (s) { return tags.indexOf(s) !== -1; });
        card.classList.toggle("is-filtered-out", !show);
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

    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        const open = root.classList.toggle("is-open");
        toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    setSelected(readUrlTags(), false);
  })();

  // Contact form: path chooser + mailto subject
  const form = document.querySelector("#contact-form");
  if (form) {
    try {
      const path = new URLSearchParams(window.location.search).get("path");
      if (path === "build" || path === "advise" || path === "unsure") {
        const radio = form.querySelector('input[name="path"][value="' + path + '"]');
        if (radio) radio.checked = true;
      }
    } catch (e) {}

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector("[name=name]").value.trim();
      const email = form.querySelector("[name=email]").value.trim();
      const message = form.querySelector("[name=message]").value.trim();
      const pathEl = form.querySelector('input[name="path"]:checked');
      const path = pathEl ? pathEl.value : "unsure";
      const err = form.querySelector(".form-error");
      if (!name || !email || !message) {
        if (err) err.textContent = "Please fill in all fields.";
        return;
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        if (err) err.textContent = "Please enter a valid email (user@domain.ext).";
        return;
      }
      if (err) err.textContent = "";

      var subjectLabel = "General inquiry";
      if (path === "build") subjectLabel = "Build inquiry";
      else if (path === "advise") subjectLabel = "Consult inquiry (automation / SEO / a11y / marketing)";
      else subjectLabel = "Inquiry (path TBD)";

      const pathLine =
        path === "build"
          ? "Path: Build — I need something built"
          : path === "advise"
          ? "Path: Advise — I want a consult (automation / SEO / a11y / marketing / business)"
          : "Path: Not sure — please help choose build vs advise";

      const subject = encodeURIComponent(subjectLabel + " from " + name);
      const body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n" + pathLine + "\n\n" + message
      );
      window.location.href = "mailto:weng.f.fung@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
})();
