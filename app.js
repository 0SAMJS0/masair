/* Tampa De Masair — behaviour. Content lives in content.js, not here. */
(function () {
  "use strict";
  const D = window.MASAIR;
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = (id) => D.members.find((m) => m.id === id);
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const display = (m) => m.nickname || m.name;
  const pageUrl = () => location.origin + location.pathname;

  /* ---------- small helpers ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  }
  async function copy(text, okMsg) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e2) { okMsg = "Couldn't copy. Long-press the address bar instead."; }
      ta.remove();
    }
    toast(okMsg);
  }
  function portraitHTML(m, note) {
    return `<div class="portrait"><span class="tape" aria-hidden="true"></span>
      <div class="portrait__cut"><img src="${esc(m.portrait)}" alt="${esc(m.name)}" loading="lazy" style="object-position:${esc(m.focus || "50% 25%")}"></div>
      ${note ? `<span class="portrait__note" aria-hidden="true">${esc(note)}</span>` : ""}</div>`;
  }

  /* ---------- hero ---------- */
  function renderHero() {
    const g = D.group;
    $("#headline").textContent = g.headline;
    $("#subline").textContent = g.subline;
    $("#photoCaption").textContent = g.photoCaption;
    $("#groupImg").src = g.photo;
    $("#signOff").textContent = g.signOff;
    $("#followIg").href = g.instagram;
    $("#followIg").textContent = "Follow " + g.handle + " ↗";
    $("#moreIg").href = g.instagram;

    const hint = $("#photoHint");
    const defaultHint = hint.textContent;
    const setHint = (m) => {
      if (m) hint.innerHTML = `<b>${esc(display(m))}</b> — ${esc(m.teaser)}`;
      else hint.textContent = defaultHint;
      document.querySelectorAll("[data-m]").forEach((el) => el.classList.toggle("is-on", !!m && el.dataset.m === m.id));
    };

    const hs = $("#hotspots");
    hs.innerHTML = D.members.map((m) => {
      const s = m.spot;
      return `<a class="hotspot" href="#${esc(m.id)}" data-m="${esc(m.id)}" style="left:${s.x}%;top:${s.y}%;width:${s.w}%;height:${s.h}%"
        aria-label="${esc(display(m))}: ${esc(m.teaser)} Go to their intro."><span class="hotspot__tag" aria-hidden="true">${esc(display(m))}</span></a>`;
    }).join("");
    if (!reduced()) hs.classList.add("flash");

    $("#roster").innerHTML = D.members.map((m) =>
      `<li><a href="#${esc(m.id)}" data-m="${esc(m.id)}"><img src="${esc(m.portrait)}" alt="" style="object-position:${esc(m.focus || "50% 25%")}">${esc(m.name)}</a></li>`).join("");

    document.querySelectorAll("[data-m]").forEach((el) => {
      const m = byId(el.dataset.m);
      el.addEventListener("pointerenter", () => setHint(m));
      el.addEventListener("pointerleave", () => setHint(null));
      el.addEventListener("focus", () => setHint(m));
      el.addEventListener("blur", () => setHint(null));
    });

    const words = D.members.map((m) => m.name).concat([D.group.handle, "Tap someone", "Get the lore"]);
    const strip = words.map((w) => `<span>${esc(w)} ✦</span>`).join("");
    $("#marquee").innerHTML = strip + strip;
  }

  /* ---------- members ---------- */
  const LAYOUTS = ["card", "scrap", "poster"];
  function renderMembers() {
    $("#members").innerHTML = D.members.map((m, i) => {
      const stats = (m.stats || []).map((s) => {
        const over = s.value > 100;
        return `<li class="stat${over ? " stat--over" : ""}">
          <div class="stat__top"><span>${esc(s.label)}</span><span>${esc(s.value)}%</span></div>
          <div class="stat__bar" role="img" aria-label="${esc(s.label)}: ${esc(s.value)} percent (not a real measurement)"><div class="stat__fill" style="--w:${Math.max(4, Math.min(s.value, 108))}%"></div></div></li>`;
      }).join("");
      return `<article class="member member--${LAYOUTS[i % 3]}" id="${esc(m.id)}" tabindex="-1" aria-labelledby="n-${esc(m.id)}">
        ${portraitHTML(m, "#" + (i + 1))}
        <div class="member__info">
          <p class="member__num">MASAIR ${String(i + 1).padStart(2, "0")} / ${String(D.members.length).padStart(2, "0")}</p>
          <h3 class="member__name" id="n-${esc(m.id)}">${esc(m.name)}</h3>
          ${m.nickname ? `<p class="member__nick">a.k.a. “${esc(m.nickname)}”</p>` : ""}
          <p class="member__role">${esc(m.role)}</p>
          <p class="member__bio">${esc(m.bio)}</p>
          ${m.catchphrase ? `<p class="member__quote">“${esc(m.catchphrase)}”</p>` : ""}
          <ul class="stats" aria-label="Completely made-up stats">${stats}</ul>
          <div class="member__actions">
            <button class="btn btn--ink" type="button" data-lore="${esc(m.id)}">Open the lore</button>
            <a class="member__back" href="#top">↑ Back to the group photo</a>
          </div>
        </div>
      </article>`;
    }).join("");

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.25 });
      document.querySelectorAll(".member").forEach((el) => io.observe(el));
    } else document.querySelectorAll(".member").forEach((el) => el.classList.add("in"));
  }

  /* ---------- lore dialog ---------- */
  function setupDialog() {
    const dlg = $("#loreDialog");
    let current = null;
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-lore]");
      if (!b) return;
      current = byId(b.dataset.lore);
      $("#dlgKicker").textContent = "The lore of";
      $("#dlgTitle").textContent = display(current);
      $("#dlgText").textContent = current.lore;
      const img = $("#dlgImg");
      if (current.altPhoto) { img.src = current.altPhoto; img.alt = current.name + ", alternate photo"; img.hidden = false; }
      else { img.hidden = true; img.removeAttribute("src"); }
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    });
    $("#dlgClose").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    $("#dlgCopy").addEventListener("click", () => copy(pageUrl() + "#" + current.id, "Link to " + display(current) + " copied"));
  }

  /* ---------- quiz ---------- */
  function setupQuiz() {
    const box = $("#quizBox");
    const Q = D.quiz.questions;
    let step = 0, scores = {}, last = {};

    function intro() {
      box.innerHTML = `<p class="quiz__intro">${Q.length} questions. No wrong answers, only concerning ones. Find out which member of the group photo lives inside you.</p>
        <button class="btn btn--mango btn--big" type="button" id="quizStart">Start the quiz</button>`;
      $("#quizStart").addEventListener("click", () => { step = 0; scores = {}; last = {}; ask(true); });
    }
    function ask(focus) {
      const q = Q[step];
      box.innerHTML = `<p class="quiz__progress">Question ${step + 1} of ${Q.length}</p>
        <h3 class="quiz__q" tabindex="-1">${esc(q.q)}</h3>
        <div class="quiz__answers">${q.answers.map((a, i) => `<button type="button" data-a="${i}">${esc(a.text)}</button>`).join("")}</div>`;
      if (focus) $(".quiz__q", box).focus({ preventScroll: true });
      box.querySelectorAll("[data-a]").forEach((b) => b.addEventListener("click", () => {
        const pts = q.answers[+b.dataset.a].points || {};
        Object.keys(pts).forEach((id) => { scores[id] = (scores[id] || 0) + pts[id]; last[id] = step; });
        step++;
        if (step < Q.length) ask(true); else finish();
      }));
    }
    function finish() {
      // highest score wins; ties go to whoever scored most recently, then list order
      const ranked = D.members.filter((m) => scores[m.id]).sort((a, b) => (scores[b.id] - scores[a.id]) || (last[b.id] - last[a.id]));
      const winner = ranked[0] || D.members[0];
      const url = new URL(location.href);
      url.searchParams.set("masair", winner.id); url.hash = "quiz";
      history.replaceState(null, "", url);
      show(winner, true);
    }
    function show(m, focus) {
      const link = pageUrl() + "?masair=" + encodeURIComponent(m.id) + "#quiz";
      box.innerHTML = `<div class="result">
        ${portraitHTML(m, "it's you")}
        <div>
          <p class="result__label">You are…</p>
          <h3 class="result__name" tabindex="-1">${esc(display(m))}</h3>
          <p class="member__role">${esc(m.role)}</p>
          <p class="result__why">${esc((D.quiz.results || {})[m.id] || m.teaser)}</p>
          <div class="result__actions">
            <button class="btn btn--mango" type="button" id="quizShare">Copy my result</button>
            <button class="btn" type="button" id="quizAgain">Try again</button>
            <a class="btn" href="#${esc(m.id)}">Meet ${esc(m.name)}</a>
          </div>
        </div></div>`;
      if (focus) $(".result__name", box).focus({ preventScroll: true });
      $("#quizShare").addEventListener("click", () => copy(`I got ${display(m)} on "Which Masair Are You?" ${link}`, "Result copied. Go annoy a group chat."));
      $("#quizAgain").addEventListener("click", () => {
        const url = new URL(location.href); url.searchParams.delete("masair"); history.replaceState(null, "", url);
        step = 0; scores = {}; last = {}; ask(true);
      });
    }
    const shared = byId(new URLSearchParams(location.search).get("masair"));
    if (shared) show(shared, false); else intro();
  }

  /* ---------- reels ---------- */
  function renderReels() {
    const grid = $("#reelGrid");
    if (D.reels && D.reels.length) {
      grid.innerHTML = D.reels.map((r) => {
        const feat = (r.featuring || []).map((id) => (byId(id) || { name: id }).name).join(", ");
        return `<a class="reel" href="${esc(r.url)}" target="_blank" rel="noopener">
          <div class="reel__thumb">${r.thumbnail ? `<img src="${esc(r.thumbnail)}" alt="" loading="lazy">` : ""}<span class="reel__play" aria-hidden="true">▶</span></div>
          <div class="reel__body"><p class="reel__title">${esc(r.title)}</p>
          ${feat ? `<p class="reel__feat">Featuring ${esc(feat)}</p>` : ""}
          <span class="reel__link">Watch on Instagram ↗</span></div></a>`;
      }).join("");
    } else {
      const lines = ["Currently being filmed badly.", "Stuck in the drafts.", "Awaiting group chat approval."];
      grid.innerHTML = lines.map((t) => `<a class="reel" href="${esc(D.group.instagram)}" target="_blank" rel="noopener">
        <div class="reel__thumb"><span class="reel__soon" aria-hidden="true">coming soon</span><span class="reel__play" aria-hidden="true">▶</span></div>
        <div class="reel__body"><p class="reel__title">${esc(t)}</p><span class="reel__link">See the profile ↗</span></div></a>`).join("");
    }
  }

  /* ---------- lore ---------- */
  function renderLore() {
    $("#loreList").innerHTML = D.lore.map((l) => `<article class="lore__item${l.image ? " lore__item--img" : ""}">
      ${l.image ? `<img src="${esc(l.image)}" alt="" loading="lazy">` : ""}
      <div><span class="lore__label">${esc(l.label)}</span><h3 class="lore__title">${esc(l.title)}</h3><p>${esc(l.text)}</p></div></article>`).join("");
  }

  /* ---------- chaos mode ---------- */
  function setupChaos() {
    const layer = $("#chaosLayer"), btn = $("#chaosBtn"), stopBtn = $("#chaosStop");
    let timer = null;
    const rnd = (a, b) => a + Math.random() * (b - a);
    const colors = ["var(--mango)", "var(--teal)", "var(--pink)", "var(--cream)"];

    function stop() {
      clearTimeout(timer); timer = null;
      layer.innerHTML = "";
      document.body.classList.remove("is-chaos");
      btn.setAttribute("aria-pressed", "false"); btn.textContent = "Chaos Mode";
      stopBtn.hidden = true;
    }
    function start() {
      if (timer) return stop();
      const birds = [byId("bilal"), byId("hadi")].filter(Boolean);
      const cat = byId("ruhaan");
      let html = "";
      for (let i = 0; i < 8 && birds.length; i++) {
        const b = birds[i % birds.length];
        html += `<img class="chaos__sticker${i % 3 === 1 ? " rev" : ""}" src="${esc(b.portrait)}" alt=""
          style="--y:${rnd(8, 62).toFixed(0)}vh;--s:${rnd(90, 170).toFixed(0)}px;--d:${rnd(2.2, 3.8).toFixed(2)}s;--delay:${(i * 0.45).toFixed(2)}s;--rx:${rnd(4, 70).toFixed(0)}vw">`;
      }
      if (cat) html += `<img class="chaos__cat" src="${esc(cat.portrait)}" alt="" style="--x:${rnd(6, 45).toFixed(0)}vw;--delay:1.4s">`;
      (D.chaosPhrases || []).slice(0, 6).forEach((p, i) => {
        html += `<span class="chaos__phrase" style="--x:${rnd(4, 50).toFixed(0)}vw;--y:${rnd(14, 70).toFixed(0)}vh;--r:${rnd(-9, 9).toFixed(0)}deg;--c:${colors[i % colors.length]};--delay:${(0.3 + i * 0.75).toFixed(2)}s">${esc(p)}</span>`;
      });
      layer.innerHTML = html;
      document.body.classList.add("is-chaos");
      btn.setAttribute("aria-pressed", "true"); btn.textContent = "■ Stop";
      stopBtn.hidden = false;
      timer = setTimeout(stop, 6500);
    }
    btn.addEventListener("click", start);
    stopBtn.addEventListener("click", stop);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && timer) stop(); });
  }

  /* ---------- cat easter egg: tap the paw print, or type "meow" ---------- */
  function setupCat() {
    const egg = $("#catEgg"), cat = byId("ruhaan") || D.members[0];
    $("#catEggImg").src = cat.portrait; $("#catEggName").textContent = display(cat);
    const open = () => { egg.hidden = false; $("#catEggClose").focus({ preventScroll: true }); };
    const close = () => { egg.hidden = true; };
    $("#paw").addEventListener("click", open);
    $("#catEggClose").addEventListener("click", () => { close(); $("#paw").focus({ preventScroll: true }); });
    let typed = "";
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !egg.hidden) return close();
      if (e.key.length !== 1 || /input|textarea/i.test(e.target.tagName)) return;
      typed = (typed + e.key.toLowerCase()).slice(-4);
      if (typed === "meow") open();
    });
  }

  /* ---------- back-to-photo button + hash focus ---------- */
  function setupNav() {
    const back = $("#backTop");
    if ("IntersectionObserver" in window) new IntersectionObserver((es) => { back.hidden = es[0].isIntersecting; }).observe($("#top"));
    else back.hidden = false;
    // content is rendered by script, so honour a shared #member link after render
    if (location.hash.length > 1) {
      const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (el) requestAnimationFrame(() => el.scrollIntoView());
    }
    window.addEventListener("hashchange", () => {
      const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (el && el.classList.contains("member")) el.focus({ preventScroll: true });
    });
  }

  renderHero(); renderMembers(); renderReels(); renderLore();
  setupDialog(); setupQuiz(); setupChaos(); setupCat(); setupNav();
})();
