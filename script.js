const P = [
  {
    t: "Aplicação Web / Consumo de API",
    n: "Pokédex",
    d: "Catálogo completo de Pokémon, da primeira à última geração, alimentado por consumo de API em tempo real. Inclui busca, sorteio aleatório, favoritos, comparador entre Pokémon e modo batalha.",
    hl: "Destaque: integração com API — requisições assíncronas, tratamento de respostas e renderização dinâmica dos dados.",
    s: ["JavaScript", "API REST", "Fetch / async-await", "HTML", "CSS", "Vercel"],
    i: "img/pokedex.png",
    u: "https://pokedex-pi-eosin.vercel.app/",
    c: "Pokédex"
  },
  {
    t: "Jogo Autoral / Dark Fantasy",
    n: "When the Woods Remember",
    d: "Jogo narrativo autoral de dark fantasy, criado e desenvolvido por mim. Tem capítulos, cenas com escolhas que direcionam a história, trilha sonora, interface própria, controle de áudio e opção de reiniciar cena ou capítulo.",
    hl: "Destaque: narrativa interativa com sistema de cenas e escolhas, áudio e arte integrados.",
    s: ["JavaScript", "HTML", "CSS", "Web Audio", "Vercel"],
    i: "img/when-the-woods-remember.png",
    u: "https://whentheforestremember.vercel.app/",
    c: "When the Woods Remember"
  },
  {
    t: "Aplicação Desktop / Gestão",
    n: "Sistema de RH",
    d: "Aplicação desktop em Java para gerenciar funcionários e seus dependentes, facilitando a organização e a consulta de informações.",
    hl: "",
    s: ["Java", "Java Swing", "MySQL", "Programação orientada a objetos"],
    i: "img/sistema-de-rh.png",
    u: "https://github.com/YuriChaves618/Sistema-de-RH",
    c: "Sistema de RH",
    g: 1
  },
  {
    t: "Portal Web / Jornalismo",
    n: "Conecta TI",
    d: "Newsletter dos cursos de T.I. do SENAI. Tem edições, painel administrativo, compartilhamento, geração de PDF e recursos de acessibilidade (alto contraste, ajuste de fonte e navegação por teclado). Utiliza o Supabase como banco de dados.",
    hl: "Destaque: acessibilidade e páginas de privacidade e termos de uso.",
    s: ["JavaScript", "HTML", "CSS", "Acessibilidade (WCAG)", "Supabase (banco de dados)", "Vercel"],
    i: "img/conecta-ti.png",
    u: "https://conecta-ti-bvgu.vercel.app/",
    c: "Conecta TI"
  },
  {
    t: "Aplicação Web / Gestão de Startups",
    n: "Avaliação de Startups",
    d: "Plataforma de avaliação e gestão de startups, pensada para organizar critérios, acompanhar projetos e apoiar a tomada de decisão. Layout responsivo, com foco em uso no celular. Utiliza o Supabase como banco de dados.",
    hl: "",
    s: ["JavaScript", "HTML", "CSS", "Design responsivo", "Supabase (banco de dados)", "Vercel"],
    i: "img/catapimbas.png",
    u: "https://projeto-catapimbas.vercel.app/",
    c: "Avaliação de Startups"
  },
  {
    t: "Site Institucional / Comunidade",
    n: "Clube D/S",
    d: "Site de apresentação do Clube D/S do SENAI CIMATEC, o clube de programação na prática, criado para atrair e orientar novos membros. Utiliza o Supabase como banco de dados.",
    hl: "",
    s: ["JavaScript", "HTML", "CSS", "Design responsivo", "Supabase (banco de dados)", "Vercel"],
    i: "img/clube-ds.png",
    u: "https://dsclube.vercel.app/",
    c: "Clube D/S"
  }
];

const I = {
  code: '<path d="M8 8l-5 4 5 4M16 8l5 4-5 4"/>',
  file: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  cube: '<path d="M12 2l9 5v10l-9 5-9-5V7zM12 12l9-5M12 12L3 7M12 12v10"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  git: '<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 8v8M18 10c0 4-6 3-12 6"/>',
  tri: '<path d="M12 4l9 16H3z"/>',
  pen: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/>',
  bolt: '<path d="M13 2L3 14h8l-1 8 10-12h-8z"/>',
  gh: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 00-.9-2.6c3.1-.3 6.4-1.5 6.4-7a5.4 5.4 0 00-1.5-3.8 5 5 0 00-.1-3.7s-1.2-.3-3.9 1.5a13.4 13.4 0 00-7 0C6.3 1.5 5.1 1.8 5.1 1.8a5 5 0 00-.1 3.7 5.4 5.4 0 00-1.5 3.8c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 00-.9 2.6V22"/>'
};

const S = [
  ["Linguagens", [["HTML5", "file"], ["CSS3", "file"], ["JavaScript", "code"], ["Java", "code"], ["C", "code"], ["C++", "code"], ["Python", "code"]]],
  ["Banco de dados e frameworks", [["PostgreSQL", "db"], ["MySQL", "db"], ["React", "cube"], ["Node.js", "cube"], ["Tailwind", "layout"], ["Bootstrap", "layout"]]],
  ["Ferramentas e ecossistema", [["Vercel", "tri"], ["Supabase", "db"], ["Canva", "pen"], ["GitHub", "gh"], ["Notion", "file"], ["Git", "git"], ["Vite", "bolt"], ["Figma", "pen"]]]
];

const stack = document.getElementById("stack");
stack.innerHTML = S.map(([groupName, technologies]) => `
  <p class="lbl">${groupName}</p>
  <div class="chips">
    ${technologies.map(([name, icon]) => `
      <span class="chip">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[icon]}</svg>
        ${name}
      </span>
    `).join("")}
  </div>
`).join("");

const projectList = document.getElementById("list");
const PROJECT_FILTERS = {
  categories: [
    { label: "Aplicações web", matches: (project) => project.t.startsWith("Aplicação Web /") },
    { label: "Aplicações desktop", matches: (project) => project.t.startsWith("Aplicação Desktop /") },
    { label: "Jogos autorais", matches: (project) => project.t.startsWith("Jogo Autoral /") },
    { label: "Portais web", matches: (project) => project.t.startsWith("Portal Web /") },
    { label: "Sites institucionais", matches: (project) => project.t.startsWith("Site Institucional /") }
  ],
  technologies: [...new Set(P.flatMap((project) => project.s))]
    .sort((first, second) => first.localeCompare(second, "pt-BR"))
};
const projectFilter = document.getElementById("project-filter");
projectFilter.innerHTML = `
  <option value="all">Todos</option>
  <optgroup label="Categorias">
    ${PROJECT_FILTERS.categories.map((filter, index) => `<option value="category:${index}">${filter.label}</option>`).join("")}
  </optgroup>
  <optgroup label="Tecnologias">
    ${PROJECT_FILTERS.technologies.map((technology) => `<option value="technology:${encodeURIComponent(technology)}">${technology}</option>`).join("")}
  </optgroup>
`;

const renderProjects = () => {
  const selectedFilter = projectFilter.value;
  const visibleProjects = P.filter((project) => {
    if (selectedFilter === "all") return true;

    if (selectedFilter.startsWith("category:")) {
      const categoryIndex = Number(selectedFilter.split(":")[1]);
      return PROJECT_FILTERS.categories[categoryIndex]?.matches(project) ?? false;
    }

    if (selectedFilter.startsWith("technology:")) {
      const technology = decodeURIComponent(selectedFilter.slice("technology:".length));
      return project.s.includes(technology);
    }

    return true;
  });

  projectList.setAttribute("aria-busy", "true");
  projectList.innerHTML = visibleProjects.length
    ? visibleProjects.map((project) => `
      <article class="proj">
        <div class="info">
          <span class="tag">${project.t}</span>
          <h3>${project.n}</h3>
          <p>${project.d}</p>
          ${project.hl ? `<p class="hl">${project.hl}</p>` : ""}
          <div class="chips">
            ${project.s.map((technology) => `<span class="chip">${technology}</span>`).join("")}
          </div>
          <div class="btns">
            <a class="btn" href="${project.u}" target="_blank" rel="noopener">${project.g ? "Ver código" : "Ver projeto"} ↗</a>
          </div>
        </div>
        <a class="shot" href="${project.u}" target="_blank" rel="noopener" aria-label="Abrir ${project.n}">
          <i>● ● ● &nbsp; ${project.u.replace("https://", "")}</i>
          <div>
            <img src="${project.i}" alt="Prévia de ${project.n}" onerror="this.remove()">
            ${project.c}
          </div>
        </a>
      </article>
    `).join("")
    : '<p class="empty-projects" role="status">Nenhum projeto encontrado para este filtro.</p>';
  projectList.setAttribute("aria-busy", "false");
};

projectFilter.addEventListener("change", renderProjects);
renderProjects();

const menuToggle = document.getElementById("menu-toggle");
const primaryNav = document.getElementById("primary-nav");
const setMenuOpen = (isOpen) => {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  primaryNav.classList.toggle("is-open", isOpen);
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});
primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});
window.matchMedia("(min-width: 761px)").addEventListener("change", () => setMenuOpen(false));
const today = document.getElementById("today");
const setDate = () => {
  today.textContent = new Date()
    .toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase()
    .replace(/\./g, "");
};
const updateDateAtMidnight = () => {
  const now = new Date();
  setDate();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 2);
  setTimeout(updateDateAtMidnight, nextMidnight - now);
};
updateDateAtMidnight();
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) setDate();
});

const root = document.documentElement;
const themeButton = document.getElementById("theme");
themeButton.addEventListener("click", () => {
  const currentTheme = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const switchToLight = currentTheme === "dark";
  root.dataset.theme = switchToLight ? "light" : "dark";
  themeButton.textContent = switchToLight ? "☾" : "☀";
});

const CONTACT_URL = "https://onzcycauptumsuxqssbq.supabase.co/functions/v1/contact";
const contactForm = document.getElementById("f");
const nameField = document.getElementById("contact-name");
const reasonField = document.getElementById("contact-reason");
const otherSubjectWrap = document.getElementById("other-subject-field");
const otherSubjectField = document.getElementById("other-subject");
const messageField = document.getElementById("contact-message");
const messageCounter = document.getElementById("message-counter");

const trimmedLength = (field) => field.value.trim().length;
const setLengthRule = (field, minimum, maximum, label) => {
  const value = field.value;
  const length = value.trim().length;
  if (!value) {
    field.setCustomValidity("");
    return;
  }
  if (length < minimum) {
    field.setCustomValidity(`${label}: use pelo menos ${minimum} caracteres após remover espaços no início e no fim.`);
  } else if (length > maximum) {
    field.setCustomValidity(`${label}: use no máximo ${maximum} caracteres após remover espaços no início e no fim.`);
  } else {
    field.setCustomValidity("");
  }
};

const updateNameValidity = () => setLengthRule(nameField, 3, 80, "O nome");
const updateOtherSubjectValidity = () => {
  if (reasonField.value !== "Outro") {
    otherSubjectField.setCustomValidity("");
    return;
  }
  setLengthRule(otherSubjectField, 5, 100, "O assunto adicional");
};
const updateMessageValidity = () => {
  const length = trimmedLength(messageField);
  messageCounter.textContent = `${length} / 1000 caracteres`;
  setLengthRule(messageField, 30, 1000, "A mensagem");
};
const updateOtherSubjectVisibility = () => {
  const showOtherSubject = reasonField.value === "Outro";
  otherSubjectWrap.hidden = !showOtherSubject;
  otherSubjectField.disabled = !showOtherSubject;
  otherSubjectField.required = showOtherSubject;

  if (!showOtherSubject) {
    otherSubjectField.value = "";
    otherSubjectField.setCustomValidity("");
  } else {
    updateOtherSubjectValidity();
  }
};

nameField.addEventListener("input", updateNameValidity);
nameField.addEventListener("change", updateNameValidity);
otherSubjectField.addEventListener("input", updateOtherSubjectValidity);
otherSubjectField.addEventListener("change", updateOtherSubjectValidity);
messageField.addEventListener("input", updateMessageValidity);
messageField.addEventListener("change", updateMessageValidity);
reasonField.addEventListener("change", updateOtherSubjectVisibility);
updateNameValidity();
updateMessageValidity();
updateOtherSubjectVisibility();

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  updateNameValidity();
  updateOtherSubjectVisibility();
  updateOtherSubjectValidity();
  updateMessageValidity();

  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  if (formData.get("website")) return;

  const reason = formData.get("reason").trim();
  const subjectAdditional = reason === "Outro" ? formData.get("subjectAdditional").trim() : "";
  const subject = reason === "Outro" ? `Outro — ${subjectAdditional}` : reason;
  const payload = {
    name: formData.get("n").trim(),
    email: formData.get("e").trim(),
    subject,
    message: formData.get("m").trim()
  };
  const status = document.getElementById("ok");
  const submitButton = contactForm.querySelector('button[type="submit"]');

  submitButton.disabled = true;
  status.style.color = "#888";
  status.textContent = "Enviando...";

  try {
    const response = await fetch(CONTACT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    contactForm.reset();
    updateOtherSubjectVisibility();
    updateNameValidity();
    updateMessageValidity();
    status.style.color = "#16c75a";
    status.textContent = "Mensagem enviada! Responderei em breve.";
  } catch {
    status.style.color = "#ff6b6b";
    status.textContent = "Não consegui enviar agora. Escreva direto para yuricabral08@gmail.com.";
  } finally {
    submitButton.disabled = false;
  }
});

const codeText = document.querySelector(".code");
if (codeText && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const fullCodeText = codeText.textContent.trim();
  codeText.style.minHeight = `${codeText.offsetHeight}px`;
  codeText.textContent = "";
  codeText.classList.add("typing");
  let characterCount = 0;

  const typeNextCharacters = () => {
    characterCount += 2;
    codeText.textContent = fullCodeText.slice(0, characterCount);
    if (characterCount < fullCodeText.length) setTimeout(typeNextCharacters, 16);
  };
  setTimeout(typeNextCharacters, 500);
}

const copyIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>';
document.querySelectorAll(".cp").forEach((button) => {
  button.innerHTML = `${copyIcon}<span>Copiar</span>`;
  button.addEventListener("click", async () => {
    const value = button.dataset.c;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const temporaryInput = document.createElement("textarea");
      temporaryInput.value = value;
      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      try {
        document.execCommand("copy");
      } catch {}
      temporaryInput.remove();
    }

    button.classList.add("ok");
    button.lastElementChild.textContent = "Copiado!";
    setTimeout(() => {
      button.classList.remove("ok");
      button.lastElementChild.textContent = "Copiar";
    }, 1600);
  });
});

const showSpeech = (creature, text, displayTime = 1500, typingSpeed = 140) => {
  const token = ++creature.token;
  creature.speech.textContent = "";
  creature.speech.classList.add("on");
  let characterIndex = 0;

  const typeCharacter = () => {
    if (token !== creature.token) return;
    creature.speech.textContent = text.slice(0, ++characterIndex);
    if (characterIndex < text.length) {
      setTimeout(typeCharacter, typingSpeed);
    } else {
      setTimeout(() => {
        if (token === creature.token) creature.speech.classList.remove("on");
      }, displayTime);
    }
  };
  typeCharacter();
};

const creatures = [0, 1, 2].map((index) => {
  const element = document.createElement("div");
  element.className = "critter";
  element.innerHTML = '<div class="say"></div><div class="in"><div class="b"><i class="rg"></i><i class="e l"></i><i class="e r"></i></div><i class="f l"></i><i class="f r"></i></div>';
  document.body.appendChild(element);

  const creature = {
    element,
    character: element.querySelector(".in"),
    speech: element.querySelector(".say"),
    x: 80 + Math.random() * Math.max(100, innerWidth - 200),
    direction: index % 2 ? 1 : -1,
    speed: 0.5 + Math.random() * 0.8,
    scaredFrames: 0,
    idleFrames: 0,
    token: 0
  };

  const reactToPointer = (event) => {
    const pointerX = event.touches ? event.touches[0].clientX : event.clientX;
    creature.scaredFrames = 150;
    creature.idleFrames = 0;
    creature.element.classList.add("scared");
    creature.element.classList.remove("idle");
    creature.direction = pointerX < creature.x + 22 ? 1 : -1;
    showSpeech(creature, "Olá!", 900, 80);
  };

  creature.character.addEventListener("mouseenter", reactToPointer);
  creature.character.addEventListener("touchstart", reactToPointer, { passive: true });
  return creature;
});

setTimeout(() => showSpeech(creatures[0], "Olá!"), 1500);
const moveCreatures = () => {
  creatures.forEach((creature) => {
    if (creature.scaredFrames > 0) {
      creature.scaredFrames -= 1;
      creature.x += creature.direction * 5;
      if (creature.scaredFrames === 0) creature.element.classList.remove("scared");
    } else if (creature.idleFrames > 0) {
      creature.idleFrames -= 1;
      creature.element.classList.add("idle");
    } else {
      creature.element.classList.remove("idle");
      creature.x += creature.direction * creature.speed;
      if (Math.random() < 0.004) {
        creature.idleFrames = 110 + Math.random() * 130;
        if (Math.random() < 0.6) showSpeech(creature, "Olá!");
      }
      if (Math.random() < 0.003) creature.direction *= -1;
    }

    if (creature.x < 0) {
      creature.x = 0;
      creature.direction = 1;
    }
    if (creature.x > innerWidth - 44) {
      creature.x = innerWidth - 44;
      creature.direction = -1;
    }

    const scale = innerWidth <= 540 ? 0.72 : 1;
    creature.element.style.transform = `translateX(${creature.x}px) scale(${scale})`;
    creature.character.style.transform = `scaleX(${creature.direction})`;
  });
  requestAnimationFrame(moveCreatures);
};
requestAnimationFrame(moveCreatures);