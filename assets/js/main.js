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
