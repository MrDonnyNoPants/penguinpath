const formEl = document.getElementById('quiz-form');
const progressEl = document.getElementById('progress');
const resultEl = document.getElementById('result');

const answers = {};

function trackEvent(path) {
  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    window.goatcounter.count({ path, event: true });
  }
}

function renderProgress() {
  const answeredCount = Object.keys(answers).length;
  progressEl.innerHTML = '';
  QUESTIONS.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'progress-dot' + (i < answeredCount ? ' done' : i === answeredCount ? ' active' : '');
    progressEl.appendChild(dot);
  });
}

function renderQuiz() {
  formEl.innerHTML = '';
  QUESTIONS.forEach((question, index) => {
    const isAnswered = answers[question.id] !== undefined;
    const isNext = index === Object.keys(answers).length;
    if (!isAnswered && !isNext) return;

    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question' + (isAnswered ? ' answered' : '');

    const legend = document.createElement('legend');
    legend.textContent = question.prompt;
    fieldset.appendChild(legend);

    question.options.forEach((option, optIndex) => {
      const optionId = `${question.id}-${optIndex}`;
      const wrapper = document.createElement('label');
      wrapper.className = 'option';
      wrapper.setAttribute('for', optionId);

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = question.id;
      input.id = optionId;
      input.value = optIndex;
      input.checked = answers[question.id] === optIndex;
      input.addEventListener('change', () => {
        answers[question.id] = optIndex;
        renderProgress();
        renderQuiz();
        if (Object.keys(answers).length === QUESTIONS.length) {
          showResult();
        } else {
          const next = formEl.querySelector('.question:last-child');
          if (next) next.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });

      const span = document.createElement('span');
      span.textContent = option.label;

      wrapper.appendChild(input);
      wrapper.appendChild(span);
      fieldset.appendChild(wrapper);
    });

    formEl.appendChild(fieldset);
  });
}

function computeRecommendation() {
  const scores = { mint: 0, popos: 0, zorin: 0, mx: 0 };
  QUESTIONS.forEach((question) => {
    const chosenIndex = answers[question.id];
    if (chosenIndex === undefined) return;
    const points = question.options[chosenIndex].points;
    for (const key in points) scores[key] += points[key];
  });

  let best = 'mint';
  let bestScore = -1;
  for (const key in scores) {
    if (scores[key] > bestScore) {
      best = key;
      bestScore = scores[key];
    }
  }
  return best;
}

function showResult() {
  const key = computeRecommendation();
  const distro = DISTROS[key];
  trackEvent(`/quiz/result/${key}`);

  formEl.hidden = true;
  progressEl.hidden = true;
  resultEl.hidden = false;
  resultEl.style.setProperty('--distro-accent', distro.accent);

  resultEl.innerHTML = `
    <div class="result-card">
      <div class="result-label">We'd suggest</div>
      <h2>${distro.name}</h2>
      <p class="result-tagline">${distro.tagline}</p>
      <p class="result-why">${distro.why}</p>
      <a class="download-btn" href="${distro.downloadUrl}" target="_blank" rel="noopener">Get ${distro.name}</a>
    </div>

    <div class="install-guide">
      <h3>How installing actually works</h3>
      <ol>
        <li><strong>Download the ISO.</strong> That's just a single file containing the whole operating system — click "Get ${distro.name}" above to grab it from the official site.</li>
        <li><strong>Put it on a USB drive.</strong> A plain USB stick (8GB or bigger) becomes a "bootable" installer using a free tool like <a href="https://etcher.balena.io/" target="_blank" rel="noopener">balenaEtcher</a> (Mac/Linux/Windows) or <a href="https://rufus.ie/" target="_blank" rel="noopener">Rufus</a> (Windows). Point it at the ISO you downloaded and it writes the drive for you.</li>
        <li><strong>Boot from the USB.</strong> Restart your computer with the USB plugged in, and tap your boot-menu key during startup (often F12, F10, F2, or Esc — it varies by manufacturer and flashes on screen briefly at boot).</li>
        <li><strong>Follow the installer.</strong> You'll be asked to erase the disk (replaces everything) or install alongside your current OS (dual-boot, keeps both). Pick whichever fits what you want, then follow the prompts.</li>
      </ol>
      <p class="install-note">This isn't ${distro.name}-specific advice beyond the download link — the USB/boot process above is the same for nearly every Linux distro.</p>
    </div>

    <button id="retake-btn" class="retake-btn" type="button">Take the quiz again</button>
  `;

  document.getElementById('retake-btn').addEventListener('click', () => {
    Object.keys(answers).forEach((k) => delete answers[k]);
    resultEl.hidden = true;
    formEl.hidden = false;
    progressEl.hidden = false;
    renderProgress();
    renderQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

trackEvent('/quiz/start');
renderProgress();
renderQuiz();
