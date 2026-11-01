(() => {
  "use strict";

  // ───────── dane ─────────
  const TOPICS = window.TOPICS || [];
  const TOPIC = Object.fromEntries(TOPICS.map(t => [t.id, t]));
  const hash = s => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return "q" + (h >>> 0).toString(36); };

  const QUESTIONS = (window.QUESTIONS || []).map(q => ({
    id: hash(q.q), topic: q.t, src: q.s, text: q.q,
    options: q.a.map(([text, explanation], i) => ({ text, explanation, correct: i === 0 }))
  }));
  const GLOSSARY = (window.GLOSSARY || []).map(([term, topic, definition, analogy]) => ({ term, topic, definition, analogy }));
  const CARDS_EXTRA = (window.FLASHCARDS || []).map(([topic, front, back]) => ({ topic, front, back }));

  const srcLabel = s => s === "U" ? "Uzupełnienie" : s ? "Wykład " + s.replace("W", "") : "";

  // ───────── pamięć (localStorage) ─────────
  const KEY = "genetyka-nauka-v1";
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const state = Object.assign({ topics: TOPICS.map(t => t.id), wrong: {}, view: "quiz", known: {} }, load());
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {} };

  const $ = s => document.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const inTopics = item => state.topics.includes(item.topic);

  // ───────── zakładki ─────────
  function showView(v) {
    state.view = v; save();
    document.querySelectorAll(".tab").forEach(b => b.classList.toggle("on", b.dataset.view === v));
    document.querySelectorAll(".view").forEach(s => s.hidden = s.id !== "view-" + v);
    refresh();
  }
  document.querySelectorAll(".tab").forEach(b => b.onclick = () => showView(b.dataset.view));

  // ───────── filtr zagadnień ─────────
  const countFor = id => QUESTIONS.filter(q => q.topic === id).length;
  function renderFilter() {
    const box = $("#topicGroups"); box.innerHTML = "";
    [["wyklady", "Z wykładów (W1–W4)"], ["uzupelnienie", "Uzupełnienie z zakresu egzaminu"]].forEach(([g, label]) => {
      box.append(el("div", "group-title", label));
      const chips = el("div", "chips");
      TOPICS.filter(t => t.group === g).forEach(t => {
        const on = state.topics.includes(t.id);
        const b = el("button", "chip" + (on ? " on" : ""), `${esc(t.name)}<small>${countFor(t.id)}</small>`);
        b.setAttribute("aria-pressed", on);
        b.onclick = () => {
          state.topics = on ? state.topics.filter(x => x !== t.id) : [...state.topics, t.id];
          save(); renderFilter(); refresh();
        };
        chips.append(b);
      });
      box.append(chips);
    });
    const n = state.topics.length;
    $("#filterSummary").textContent =
      n === TOPICS.length ? "wszystkie" :
      n === 0 ? "nic nie wybrano" :
      n === 1 ? TOPIC[state.topics[0]].name : `${n} z ${TOPICS.length}`;
  }
  $("#filterToggle").onclick = () => {
    const p = $("#filterPanel"); p.hidden = !p.hidden;
    $("#filterToggle").setAttribute("aria-expanded", !p.hidden);
  };
  document.querySelectorAll("[data-preset]").forEach(b => b.onclick = () => {
    const p = b.dataset.preset;
    state.topics = p === "all" ? TOPICS.map(t => t.id) : p === "none" ? [] : TOPICS.filter(t => t.group === p).map(t => t.id);
    save(); renderFilter(); refresh();
  });

  function refresh() {
    if (state.view === "quiz") quizIdle();
    if (state.view === "cards") cardsBuild();
    if (state.view === "dict") dictRender();
  }

  // ───────── QUIZ ─────────
  let quizLen = 10, quiz = null;
  document.querySelectorAll("#quizLen button").forEach(b => b.onclick = () => {
    quizLen = +b.dataset.n;
    document.querySelectorAll("#quizLen button").forEach(x => x.classList.toggle("on", x === b));
  });
  $("#onlyWrong").onchange = quizIdle;

  function quizPool() {
    let pool = QUESTIONS.filter(inTopics);
    if ($("#onlyWrong").checked) pool = pool.filter(q => state.wrong[q.id]);
    return pool;
  }
  function quizIdle() {
    if (quiz && !quiz.done) return; // trwa quiz – nie przerywaj
    $("#quizStart").hidden = false; $("#quizRun").hidden = true; $("#quizEnd").hidden = true;
    const all = QUESTIONS.filter(inTopics);
    const wrongN = all.filter(q => state.wrong[q.id]).length;
    $("#wrongCount").textContent = wrongN || "";
    const pool = quizPool();
    $("#quizAvail").textContent = state.topics.length === 0
      ? "Wybierz przynajmniej jedno zagadnienie powyżej."
      : `Dostępnych pytań: ${pool.length}`;
    $("#quizGo").disabled = pool.length === 0;
  }
  function quizStart(list) {
    quiz = { list, i: 0, score: 0, wrongs: [], done: false };
    $("#quizStart").hidden = true; $("#quizEnd").hidden = true; $("#quizRun").hidden = false;
    quizShow();
  }
  $("#quizGo").onclick = () => {
    const pool = shuffle(quizPool());
    quizStart(quizLen ? pool.slice(0, quizLen) : pool);
  };

  function quizShow() {
    const q = quiz.list[quiz.i];
    q._opts = shuffle(q.options);
    q._answered = false;
    $("#quizBar").style.width = (quiz.i / quiz.list.length * 100) + "%";
    $("#qTopic").textContent = TOPIC[q.topic]?.name || q.topic;
    $("#qSrc").textContent = srcLabel(q.src);
    $("#qCount").textContent = `${quiz.i + 1} / ${quiz.list.length}`;
    $("#qText").textContent = q.text;
    const ol = $("#qOpts"); ol.innerHTML = ""; ol.classList.remove("answered");
    q._opts.forEach((o, idx) => {
      const li = el("li");
      const b = el("button", "opt", `<span class="key">${idx + 1}</span><span class="opt-body"><span class="otext">${esc(o.text)}</span><span class="explain"></span></span>`);
      b.onclick = () => quizAnswer(idx);
      li.append(b); ol.append(li);
    });
    $("#quizNext").hidden = true;
  }

  function quizAnswer(idx) {
    const q = quiz.list[quiz.i];
    if (q._answered) return;
    q._answered = true;
    const chosen = q._opts[idx];
    const ol = $("#qOpts"); ol.classList.add("answered");
    [...ol.querySelectorAll(".opt")].forEach((b, i) => {
      const o = q._opts[i];
      b.disabled = true;
      if (o.correct) b.classList.add("correct");
      if (i === idx && !o.correct) b.classList.add("wrong");
      const verdict = o.correct ? "✓ Dobrze." : "✗ Nie.";
      b.querySelector(".explain").innerHTML = `<span class="verdict">${verdict}</span>${esc(o.explanation)}`;
    });
    if (chosen.correct) { quiz.score++; delete state.wrong[q.id]; }
    else { quiz.wrongs.push({ q, chosen }); state.wrong[q.id] = true; }
    save();
    $("#quizNext").hidden = false;
    $("#quizNext").textContent = quiz.i + 1 < quiz.list.length ? "Dalej →" : "Wynik →";
    $("#quizNext").focus();
  }

  $("#quizNext").onclick = () => {
    quiz.i++;
    if (quiz.i < quiz.list.length) quizShow(); else quizEnd();
  };
  $("#quizQuit").onclick = () => { quiz.list = quiz.list.slice(0, quiz.i + (quiz.list[quiz.i]._answered ? 1 : 0)); quizEnd(); };

  function quizEnd() {
    quiz.done = true;
    $("#quizBar").style.width = "100%";
    $("#quizRun").hidden = true; $("#quizEnd").hidden = false;
    const n = quiz.list.length, s = quiz.score;
    const pct = n ? Math.round(s / n * 100) : 0;
    $("#endScore").textContent = `${s} / ${n} (${pct}%)`;
    $("#endMsg").textContent = n === 0 ? "Nie odpowiedziano na żadne pytanie." :
      pct === 100 ? "Bezbłędnie! 🎉" : pct >= 75 ? "Bardzo dobrze – zostało tylko kilka rzeczy do powtórki." :
      pct >= 50 ? "Nieźle. Przejrzyj błędne odpowiedzi poniżej." : "Warto powtórzyć te zagadnienia – zacznij od fiszek.";
    const box = $("#endWrong"); box.innerHTML = "";
    quiz.wrongs.forEach(({ q, chosen }) => {
      const right = q.options.find(o => o.correct);
      const d = el("div", "end-item");
      d.append(el("p", null, `<strong>${esc(q.text)}</strong>`));
      d.append(el("p", "muted", `Twoja odpowiedź: ${esc(chosen.text)}`));
      d.append(el("p", null, `✓ ${esc(right.text)} – <span class="muted">${esc(right.explanation)}</span>`));
      box.append(d);
    });
    $("#againWrong").hidden = quiz.wrongs.length === 0;
  }
  $("#againWrong").onclick = () => quizStart(shuffle(quiz.wrongs.map(w => w.q)));
  $("#againNew").onclick = () => { quiz = null; quizIdle(); };

  // ───────── FISZKI ─────────
  let deck = [], ci = 0;
  function cardsBuild(doShuffle) {
    const fromGloss = $("#withGlossary").checked
      ? GLOSSARY.map(g => ({ topic: g.topic, front: g.term, back: g.definition, analogy: g.analogy }))
      : [];
    deck = [...CARDS_EXTRA, ...fromGloss].filter(inTopics);
    if (doShuffle !== false) deck = shuffle(deck);
    ci = 0; cardShow();
  }
  function cardShow() {
    const fc = $("#flashcard"); fc.classList.remove("flipped");
    if (!deck.length) {
      $("#cFront").textContent = state.topics.length ? "Wszystkie karty opanowane! 🎉" : "Wybierz zagadnienia powyżej.";
      $("#cBack").textContent = ""; $("#cTopic").textContent = ""; $("#cCount").textContent = "";
      return;
    }
    const c = deck[ci];
    $("#cFront").textContent = c.front;
    $("#cBack").innerHTML = esc(c.back) + (c.analogy ? `<span class="analogy">💡 ${esc(c.analogy)}</span>` : "");
    $("#cTopic").textContent = TOPIC[c.topic]?.name || "";
    $("#cCount").textContent = `${ci + 1} / ${deck.length}`;
  }
  const flip = () => deck.length && $("#flashcard").classList.toggle("flipped");
  const step = d => { if (!deck.length) return; ci = (ci + d + deck.length) % deck.length; cardShow(); };
  $("#flashcard").onclick = flip;
  $("#cPrev").onclick = () => step(-1);
  $("#cNext").onclick = () => step(1);
  $("#cKnow").onclick = () => { if (!deck.length) return; deck.splice(ci, 1); if (ci >= deck.length) ci = 0; cardShow(); };
  $("#cAgain").onclick = () => { if (!deck.length) return; deck.push(deck.splice(ci, 1)[0]); if (ci >= deck.length) ci = 0; cardShow(); };
  $("#cardsShuffle").onclick = () => cardsBuild(true);
  $("#withGlossary").onchange = () => cardsBuild(true);

  // ───────── SŁOWNIK ─────────
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l");
  function highlight(text, q) {
    if (!q) return esc(text);
    const n = norm(text), i = n.indexOf(q);
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
  }
  function dictRender() {
    const q = norm($("#dictSearch").value.trim());
    const list = GLOSSARY.filter(inTopics)
      .filter(g => !q || norm(g.term).includes(q) || norm(g.definition).includes(q))
      .sort((a, b) => a.term.localeCompare(b.term, "pl"));
    $("#dictCount").textContent = `${list.length} pojęć`;
    const box = $("#dictList"); box.innerHTML = "";
    if (!list.length) { box.append(el("p", "empty", "Brak wyników.")); return; }
    let letter = "";
    list.forEach(g => {
      const L = g.term[0].toLocaleUpperCase("pl");
      if (L !== letter) { letter = L; box.append(el("div", "letter", esc(L))); }
      const e = el("div", "entry");
      e.append(el("h4", null, `<span>${highlight(g.term, q)}</span> <span class="badge ghost">${esc(TOPIC[g.topic]?.name || "")}</span>`));
      e.append(el("p", null, highlight(g.definition, q)));
      if (g.analogy) e.append(el("span", "analogy", "💡 " + esc(g.analogy)));
      box.append(e);
    });
  }
  $("#dictSearch").oninput = dictRender;

  // ───────── klawiatura ─────────
  document.addEventListener("keydown", e => {
    if (e.target.tagName === "INPUT") return;
    if (state.view === "quiz" && quiz && !quiz.done && !$("#quizRun").hidden) {
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= 9) { const b = $("#qOpts").querySelectorAll(".opt")[n - 1]; if (b && !b.disabled) b.click(); }
      if (e.key === "Enter" && !$("#quizNext").hidden) { e.preventDefault(); $("#quizNext").click(); }
    }
    if (state.view === "cards") {
      if (e.key === " ") { e.preventDefault(); flip(); }
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
  });

  // ───────── start ─────────
  state.topics = state.topics.filter(id => TOPIC[id]);
  renderFilter();
  showView(["quiz", "cards", "dict"].includes(state.view) ? state.view : "quiz");
})();
