/* ==========================================================================
   Adinda & Bima — interaction layer
   Vanilla JS. No dependencies.
   ========================================================================== */

(function () {
  "use strict";

  document.body.classList.add("reveal-ready");

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const BASE_URL = location.protocol === "file:"
    ? "https://adinda-bima.pages.dev/"
    : location.origin + location.pathname;

  /* ----------------------------------------------------------------------
     Guest personalisation: ?to=Nama%20Tamu
     ---------------------------------------------------------------------- */
  const params = new URLSearchParams(location.search);
  const rawGuest = params.get("to") || params.get("kepada") || "";
  const guestName = rawGuest.replace(/\s+/g, " ").trim().slice(0, 80);

  if (guestName) {
    const guestEl = $("#guestName");
    if (guestEl) guestEl.textContent = guestName;
    const rsvpName = $("#rsvpName");
    if (rsvpName) rsvpName.value = guestName;
    const wishName = $("#wishName");
    if (wishName) wishName.value = guestName;
  }

  /* ----------------------------------------------------------------------
     Gate
     ---------------------------------------------------------------------- */
  const gate = $("#gate");
  const content = $("#content");
  const openBtn = $("#openInvitation");
  const musicBtn = $("#musicToggle");
  const dock = $("#dock");
  let opened = false;

  function openInvitation() {
    if (opened) return;
    opened = true;

    gate.classList.add("is-open");
    document.body.classList.remove("is-locked");
    content.setAttribute("aria-hidden", "false");
    musicBtn.hidden = false;
    dock.hidden = false;

    window.setTimeout(() => { gate.hidden = true; }, 1000);

    const heading = $("#opening .statement");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      window.setTimeout(() => heading.focus({ preventScroll: true }), 750);
    }
  }

  if (openBtn) openBtn.addEventListener("click", openInvitation);

  /* ----------------------------------------------------------------------
     Scroll reveal
     ---------------------------------------------------------------------- */
  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    $$(".reveal").forEach((el) => revealObserver.observe(el));
  } else {
    $$(".reveal").forEach((el) => el.classList.add("is-in"));
  }

  /* ----------------------------------------------------------------------
     Countdown — fixed to Asia/Jakarta (UTC+7)
     ---------------------------------------------------------------------- */
  const target = new Date("2027-06-12T09:00:00+07:00").getTime();
  const cd = {
    days: $("#cdDays"),
    hours: $("#cdHours"),
    minutes: $("#cdMinutes"),
    seconds: $("#cdSeconds")
  };

  function pad(n) { return String(n).padStart(2, "0"); }

  function tick() {
    if (!cd.days) return;
    const diff = target - Date.now();

    if (diff <= 0) {
      cd.days.textContent = "00";
      cd.hours.textContent = "00";
      cd.minutes.textContent = "00";
      cd.seconds.textContent = "00";
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    cd.days.textContent = days > 99 ? String(days) : pad(days);
    cd.hours.textContent = pad(hours);
    cd.minutes.textContent = pad(minutes);
    cd.seconds.textContent = pad(seconds);
  }

  tick();
  window.setInterval(tick, 1000);

  /* ----------------------------------------------------------------------
     Calendar (.ics)
     ---------------------------------------------------------------------- */
  function downloadICS() {
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Adinda & Bima//Undangan//ID",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:adinda-bima-20270612@demo.local",
      "DTSTAMP:20261118T000000Z",
      "DTSTART:20270612T020000Z",
      "DTEND:20270612T060000Z",
      "SUMMARY:Pernikahan Adinda & Bima",
      "LOCATION:Pendopo Cemara, Jakarta Selatan",
      "DESCRIPTION:Akad nikah 09.00 WIB. Resepsi 15.00 WIB di Rumah Kayu Kemang.",
      "END:VEVENT",
      "END:VCALENDAR"
    ];

    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "adinda-bima.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  ["#saveDate", "#saveDateBottom"].forEach((sel) => {
    const btn = $(sel);
    if (btn) btn.addEventListener("click", downloadICS);
  });

  /* ----------------------------------------------------------------------
     Share
     ---------------------------------------------------------------------- */
  const sharePayload = () => ({
    title: "Adinda & Bima — 12 Juni 2027",
    text: "Kami menikah, dan kami ingin merayakannya bersama orang-orang yang kami sayangi.",
    url: BASE_URL
  });

  async function shareInvitation() {
    const data = sharePayload();
    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch (err) {
        if (err && err.name === "AbortError") return;
      }
    }
    const text = encodeURIComponent(data.text + "\n\n" + data.url);
    window.open("https://wa.me/?text=" + text, "_blank", "noopener");
  }

  $$("[data-share]").forEach((btn) => btn.addEventListener("click", shareInvitation));

  /* ----------------------------------------------------------------------
     Progress + active nav
     ---------------------------------------------------------------------- */
  const progressBar = $("#progressBar");

  function updateProgress() {
    if (!progressBar) return;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progressBar.style.width = (ratio * 100).toFixed(2) + "%";
  }

  let scrollQueued = false;
  window.addEventListener("scroll", () => {
    if (scrollQueued) return;
    scrollQueued = true;
    window.requestAnimationFrame(() => {
      updateProgress();
      updateNav();
      scrollQueued = false;
    });
  }, { passive: true });
  updateProgress();

  const navLinks = $$("[data-nav]");
  const NAV_MAP = {
    opening: "opening",
    couple: "couple",
    story: "couple",
    date: "events",
    events: "events",
    gallery: "events",
    rsvp: "rsvp",
    wishes: "rsvp",
    gift: "gift",
    practical: "gift",
    closing: "gift"
  };

  const navSections = Object.keys(NAV_MAP)
    .map((id) => ({ el: document.getElementById(id), key: NAV_MAP[id] }))
    .filter((item) => item.el);

  updateNav();

  function updateNav() {
    if (!navLinks.length) return;
    const marker = window.innerHeight * 0.38;
    let current = null;

    navSections.forEach(({ el, key }) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= marker && rect.bottom > marker) current = key;
    });

    if (!current) return;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === current);
    });
  }

  /* ----------------------------------------------------------------------
     Lightbox
     ---------------------------------------------------------------------- */
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxCaption = $("#lightboxCaption");
  const lightboxClose = $("#lightboxClose");

  $$("[data-full]").forEach((shot) => {
    shot.addEventListener("click", () => {
      if (!lightbox) return;
      lightboxImg.src = shot.getAttribute("data-full");
      lightboxImg.alt = shot.querySelector("img")?.alt || "";
      lightboxCaption.textContent = shot.getAttribute("data-caption") || "";

      if (typeof lightbox.showModal === "function") lightbox.showModal();
      else lightbox.setAttribute("open", "");

      document.body.classList.add("is-locked");
    });
  });

  function closeLightbox() {
    if (!lightbox) return;
    if (typeof lightbox.close === "function") lightbox.close();
    else lightbox.removeAttribute("open");
    document.body.classList.remove("is-locked");
    lightboxImg.src = "";
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener("close", () => {
      document.body.classList.remove("is-locked");
    });
  }

  /* ----------------------------------------------------------------------
     RSVP (demo, localStorage)
     ---------------------------------------------------------------------- */
  const RSVP_KEY = "ab_rsvp_v1";
  const BASE_GUESTS = 128;
  const rsvpForm = $("#rsvpForm");
  const rsvpSuccess = $("#rsvpSuccess");
  const rsvpCount = $("#rsvpCount");
  const rsvpStatus = $("#rsvpStatus");

  function storedRSVP() {
    try { return JSON.parse(localStorage.getItem(RSVP_KEY) || "null"); }
    catch (err) { return null; }
  }

  function updateRSVPCount() {
    if (!rsvpCount) return;
    const data = storedRSVP();
    const extra = data && data.attendance === "hadir" ? Number(data.guests || 1) : 0;
    rsvpCount.textContent = (BASE_GUESTS + extra) + " tamu sudah mengonfirmasi";
  }

  function showRSVPSuccess(data, shouldScroll) {
    if (!rsvpForm || !rsvpSuccess) return;
    rsvpForm.hidden = true;
    rsvpSuccess.hidden = false;

    const title = $("#rsvpSuccessTitle");
    const text = $("#rsvpSuccessText");

    if (data.attendance === "hadir") {
      title.textContent = "Terima kasih, " + data.name.split(" ")[0] + ".";
      text.textContent = "Kehadiranmu sudah kami catat. Sampai jumpa di hari itu.";
    } else {
      title.textContent = "Terima kasih sudah memberi kabar.";
      text.textContent = "Kami akan merindukanmu. Doa dari jauh sama berharganya.";
    }
    updateRSVPCount();

    if (shouldScroll) {
      window.setTimeout(() => {
        rsvpSuccess.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "center"
        });
      }, 80);
    }
  }

  const existingRSVP = storedRSVP();
  if (existingRSVP) {
    showRSVPSuccess(existingRSVP);
  } else {
    updateRSVPCount();
  }

  if (rsvpForm) {
    rsvpForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = $("#rsvpName").value.trim();
      const attendance = rsvpForm.querySelector('input[name="attendance"]:checked')?.value || "hadir";
      const guests = $("#rsvpGuests").value;
      const session = $("#rsvpSession").value;
      const note = $("#rsvpNote").value.trim();

      if (name.length < 2) {
        rsvpStatus.textContent = "Nama belum lengkap. Tulis nama kamu, ya.";
        rsvpStatus.classList.add("is-error");
        $("#rsvpName").focus();
        return;
      }

      const data = { name, attendance, guests, session, note, at: new Date().toISOString() };
      try { localStorage.setItem(RSVP_KEY, JSON.stringify(data)); } catch (err) { /* private mode */ }

      rsvpStatus.textContent = "";
      rsvpStatus.classList.remove("is-error");
      showRSVPSuccess(data, true);
    });
  }

  const rsvpEdit = $("#rsvpEdit");
  if (rsvpEdit) {
    rsvpEdit.addEventListener("click", () => {
      rsvpSuccess.hidden = true;
      rsvpForm.hidden = false;
      $("#rsvpName").focus();
    });
  }

  /* ----------------------------------------------------------------------
     Wishes (demo, localStorage)
     ---------------------------------------------------------------------- */
  const WISH_KEY = "ab_wishes_v1";
  const wishForm = $("#wishForm");
  const wishWall = $("#wishWall");
  const wishStatus = $("#wishStatus");

  const seedWishes = [
    { name: "Rani & Dimas, Bandung", text: "Selamat, Adinda & Bima. Semoga rumah kalian selalu punya teh hangat dan tawa." },
    { name: "Keluarga Sujono, Jakarta", text: "Akhirnya! Kami menunggu ini sejak 2019." },
    { name: "Maya, Yogyakarta", text: "Semoga perjalanan kalian panjang, dan pulangnya selalu satu arah." }
  ];

  function storedWishes() {
    try {
      const data = JSON.parse(localStorage.getItem(WISH_KEY) || "[]");
      return Array.isArray(data) ? data : [];
    } catch (err) { return []; }
  }

  function wishCard(wish, isNew) {
    const article = document.createElement("article");
    article.className = "wish" + (isNew ? " is-new" : "");

    const text = document.createElement("p");
    text.className = "wish-text";
    text.textContent = "\u201C" + wish.text + "\u201D";

    const meta = document.createElement("p");
    meta.className = "wish-meta";
    meta.textContent = wish.name;

    article.appendChild(text);
    article.appendChild(meta);
    return article;
  }

  function renderWishes() {
    if (!wishWall) return;
    wishWall.textContent = "";
    const all = storedWishes().concat(seedWishes);
    all.forEach((wish) => wishWall.appendChild(wishCard(wish, false)));
  }

  renderWishes();

  if (wishForm) {
    wishForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = $("#wishName").value.trim();
      const text = $("#wishText").value.trim();

      if (name.length < 2 || text.length < 4) {
        wishStatus.textContent = "Nama dan ucapan perlu diisi dulu, ya.";
        wishStatus.classList.add("is-error");
        return;
      }

      const wish = { name, text, at: new Date().toISOString() };
      const all = storedWishes();
      all.unshift(wish);
      try { localStorage.setItem(WISH_KEY, JSON.stringify(all.slice(0, 50))); } catch (err) { /* ignore */ }

      const card = wishCard(wish, true);
      wishWall.prepend(card);

      wishStatus.textContent = "Ucapanmu sudah tampil di dinding doa.";
      wishStatus.classList.remove("is-error");
      wishForm.reset();
      if (guestName) $("#wishName").value = guestName;
    });
  }

  /* ----------------------------------------------------------------------
     Copy to clipboard
     ---------------------------------------------------------------------- */
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (e2) { ok = false; }
      ta.remove();
      return ok;
    }
  }

  $$("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.getAttribute("data-copy");
      const ok = await copyText(value);
      const original = btn.textContent;
      btn.textContent = ok ? "Tersalin" : "Gagal";
      btn.disabled = true;
      window.setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 1600);
    });
  });

  /* ----------------------------------------------------------------------
     Ambient music (Web Audio, generated — no audio file)
     ---------------------------------------------------------------------- */
  let audioCtx = null;
  let masterGain = null;
  let musicTimer = null;
  let musicOn = false;
  let audioReady = false;

  const chords = [
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [130.81, 196.00, 261.63, 329.63], // Cmaj7
    [146.83, 220.00, 293.66, 349.23], // Dm7
    [116.54, 174.61, 233.08, 293.66]  // Bbmaj7
  ];
  let chordIndex = 0;

  function setupAudio() {
    if (audioReady) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;

    audioCtx = new Ctx();

    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0;

    const lowpass = audioCtx.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.value = 1200;

    const delay = audioCtx.createDelay(1.2);
    delay.delayTime.value = 0.46;

    const feedback = audioCtx.createGain();
    feedback.gain.value = 0.22;

    const wet = audioCtx.createGain();
    wet.gain.value = 0.32;

    masterGain.connect(lowpass);
    lowpass.connect(audioCtx.destination);
    lowpass.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wet);
    wet.connect(audioCtx.destination);

    audioReady = true;
  }

  function playChord(freqs) {
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const dur = 8.4;

    freqs.forEach((freq, index) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = index === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      osc.detune.value = (index - 1.5) * 4;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.14 / freqs.length, now + 2.4);
      gain.gain.linearRampToValueAtTime(0, now + dur);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + dur + 0.2);
    });
  }

  function scheduleMusic() {
    if (!musicOn || !audioCtx) return;
    playChord(chords[chordIndex % chords.length]);
    chordIndex += 1;
  }

  async function startMusic() {
    setupAudio();
    if (!audioCtx) return;

    if (audioCtx.state === "suspended") await audioCtx.resume();

    musicOn = true;
    masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
    masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.55, audioCtx.currentTime + 2.5);

    scheduleMusic();
    window.clearInterval(musicTimer);
    musicTimer = window.setInterval(scheduleMusic, 7000);
  }

  function stopMusic() {
    musicOn = false;
    window.clearInterval(musicTimer);
    musicTimer = null;
    if (audioCtx && masterGain) {
      masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
      masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
    }
  }

  if (musicBtn) {
    musicBtn.addEventListener("click", async () => {
      const next = musicBtn.getAttribute("aria-pressed") !== "true";
      musicBtn.setAttribute("aria-pressed", String(next));
      musicBtn.setAttribute("aria-label", next ? "Matikan musik" : "Nyalakan musik");
      if (next) await startMusic();
      else stopMusic();
    });
  }

  /* ----------------------------------------------------------------------
     Small niceties
     ---------------------------------------------------------------------- */
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && musicOn && audioCtx) {
      audioCtx.suspend().catch(() => {});
    } else if (!document.hidden && musicOn && audioCtx) {
      audioCtx.resume().catch(() => {});
    }
  });

  window.addEventListener("resize", () => {
    updateProgress();
    updateNav();
  });
})();
