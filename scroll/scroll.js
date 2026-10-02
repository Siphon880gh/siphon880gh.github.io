/* Desktop pin theater for /scroll/.
   Below 768px or prefers-reduced-motion, chapters stay in document flow. */
(function () {
  var root = document.documentElement;

  if (!window.gsap || !window.ScrollTrigger) {
    root.classList.remove("is-depth");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var stage = document.getElementById("depth-stage");
  var chapters = gsap.utils.toArray(".depth-chapter");
  var buttons = gsap.utils.toArray(".depth-rail button");
  var header = document.querySelector(".site-header");
  if (!stage || chapters.length < 2) return;

  var SLOT = 1;
  var EXIT = 0.34;
  var activeIndex = -1;
  var timeline = null;

  function headerOffset() {
    return header ? header.offsetHeight : 100;
  }

  function setActive(progress) {
    var span = chapters.length - 1;
    var t = progress * span;
    var idx = 0;
    for (var i = 1; i < chapters.length; i++) {
      if (t >= i - EXIT / 2) idx = i;
    }
    if (idx === activeIndex) return;
    activeIndex = idx;
    buttons.forEach(function (btn, i) {
      if (i === idx) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    });
    var id = chapters[idx] && chapters[idx].id;
    if (id && window.history && window.history.replaceState) {
      var next = window.location.pathname + window.location.search + "#" + id;
      if (window.location.hash !== "#" + id) {
        window.history.replaceState(null, "", next);
      }
    }
  }

  function scrollToStep(index, behavior) {
    if (!timeline || !timeline.scrollTrigger) return;
    var st = timeline.scrollTrigger;
    var span = chapters.length - 1;
    var progress = span === 0 ? 0 : index / span;
    var y = st.start + (st.end - st.start) * progress;
    window.scrollTo({ top: y, behavior: behavior || "smooth" });
  }

  var mm = gsap.matchMedia();

  mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", function () {
    root.classList.add("is-depth");
    activeIndex = -1;

    var ctx = gsap.context(function () {
      chapters.forEach(function (chapter, i) {
        gsap.set(chapter, {
          autoAlpha: i === 0 ? 1 : 0,
          rotationX: i === 0 ? 0 : 46,
          z: i === 0 ? 0 : -720,
          y: i === 0 ? 0 : 70
        });
      });
      gsap.set(".flagship-card", { rotationY: -24, transformPerspective: 1100, transformOrigin: "50% 50%" });
      gsap.set(".flagship-back", {
        rotationY: 10,
        z: -90,
        autoAlpha: 0,
        transformOrigin: "50% 50%",
        pointerEvents: "none"
      });

      timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: stage,
          pin: true,
          start: function () { return "top " + headerOffset() + "px"; },
          end: function () { return "+=" + Math.round(window.innerHeight * 5); },
          scrub: 0.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: function (self) { setActive(self.progress); },
          onToggle: function (self) {
            if (self.pin) self.pin.style.zIndex = "2";
          }
        }
      });

      chapters.forEach(function (chapter, i) {
        var slot = i * SLOT;
        if (i > 0) {
          timeline.fromTo(chapter, {
            rotationX: 42,
            z: -760,
            y: 80,
            autoAlpha: 0
          }, {
            rotationX: 0,
            z: 0,
            y: 0,
            autoAlpha: 1,
            duration: EXIT,
            immediateRender: false
          }, slot - EXIT);
        }
        if (i < chapters.length - 1) {
          timeline.to(chapter, {
            rotationX: -62,
            z: -300,
            y: -50,
            autoAlpha: 0,
            duration: EXIT
          }, slot + SLOT - EXIT);
        }
      });

      /* Tighter Y swing so ExRx never peeks past VideoListings; fade back in once tucked. */
      timeline.fromTo(".flagship-card", {
        rotationY: -24
      }, {
        rotationY: 16,
        duration: SLOT,
        immediateRender: false
      }, 2 * SLOT - EXIT);

      timeline.fromTo(".flagship-back", {
        rotationY: 10,
        z: -90,
        autoAlpha: 0,
        pointerEvents: "none"
      }, {
        rotationY: -4,
        z: -90,
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: SLOT,
        immediateRender: false
      }, 2 * SLOT - EXIT);

      timeline.fromTo(".work-fan", {
        rotationX: 16,
        z: -80,
        transformOrigin: "50% 80%"
      }, {
        rotationX: 0,
        z: 36,
        duration: 0.7,
        immediateRender: false
      }, 3 * SLOT - 0.05);

      timeline.fromTo(".depth-progress span", {
        scaleX: 0
      }, {
        scaleX: 1,
        duration: (chapters.length - 1) * SLOT,
        immediateRender: false
      }, 0);

      timeline.to(".depth-hint", {
        autoAlpha: 0,
        duration: 0.2
      }, 0.18);

      /* Hold the last chapter after it finishes arriving. */
      timeline.to({}, { duration: 0.15 }, (chapters.length - 1) * SLOT);

      buttons.forEach(function (btn) {
        btn.addEventListener("click", onRailClick);
      });

      setActive(0);
    }, stage);

    function onRailClick(event) {
      var btn = event.currentTarget;
      var index = Number(btn.getAttribute("data-step"));
      if (!isNaN(index)) scrollToStep(index, "smooth");
    }

    var hash = (window.location.hash || "").replace("#", "");
    var hashIndex = -1;
    chapters.forEach(function (chapter, i) {
      if (chapter.id === hash) hashIndex = i;
    });
    if (hashIndex > 0) {
      requestAnimationFrame(function () {
        scrollToStep(hashIndex, "auto");
      });
    }

    return function () {
      buttons.forEach(function (btn) {
        btn.removeEventListener("click", onRailClick);
      });
      timeline = null;
      activeIndex = -1;
      root.classList.remove("is-depth");
      ctx.revert();
      /* Revert can leave the initial hidden pose inline. Clear it after
         matchMedia finishes so the stacked layout can show every chapter. */
      requestAnimationFrame(function () {
        if (root.classList.contains("is-depth")) return;
        gsap.set(".depth-chapter, .flagship-card, .flagship-back, .work-fan, .depth-hint, .depth-progress span", {
          clearProps: "all"
        });
      });
    };
  });
})();
