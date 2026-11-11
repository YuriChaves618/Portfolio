/*
 * Formulário de contato — estados: edicao, erro-validacao, processando, sucesso, falha.
 *
 * IMPORTANTE:
 *  - Este portfólio é um site estático, sem back-end. Por isso o envio é uma
 *    SIMULAÇÃO: nenhum e-mail é enviado.
 *  - A validação feita aqui melhora a experiência, mas NÃO substitui a validação
 *    no servidor numa aplicação real.
 *  - Nunca coloque senhas, tokens ou chaves privadas neste arquivo: tudo o que
 *    está em JavaScript de navegador é público.
 *
 * Para usar um serviço real (ex.: um endpoint seu ou um serviço de formulários),
 * preencha ENDPOINT_ENVIO abaixo com uma URL pública. Quando preenchido, o
 * formulário passa a usar fetch() de verdade e o aviso de demonstração some.
 */
const ENDPOINT_ENVIO = ""; // ex.: "https://seu-servico.exemplo/contato"
const TEMPO_SIMULADO_MS = 1800;
const TEMPO_LIMITE_MS = 10000;

const form = document.getElementById("form-contato");
const botao = document.getElementById("botao-enviar");
const statusRegiao = document.getElementById("status-form");
const avisoDemo = document.getElementById("aviso-demo");

const TEXTO_BOTAO = {
  padrao: "Enviar mensagem",
  processando: "Enviando…",
  retentar: "Tentar novamente",
};

const campos = {
  nome: {
    el: document.getElementById("nome"),
    erro: document.getElementById("erro-nome"),
    validar: (v) =>
      v.length < 2 ? "Informe seu nome (mínimo de 2 caracteres)." : "",
  },
  email: {
    el: document.getElementById("email"),
    erro: document.getElementById("erro-email"),
    validar: (v) => {
      if (!v) return "Informe seu e-mail.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? ""
        : "Informe um e-mail válido, como nome@exemplo.com.";
    },
  },
  assunto: {
    el: document.getElementById("assunto"),
    erro: document.getElementById("erro-assunto"),
    validar: (v) =>
      v.length < 3 ? "Informe o assunto (mínimo de 3 caracteres)." : "",
  },
  mensagem: {
    el: document.getElementById("mensagem"),
    erro: document.getElementById("erro-mensagem"),
    validar: (v) =>
      v.length < 10 ? "Escreva uma mensagem com pelo menos 10 caracteres." : "",
  },
};

const modoDemo = !ENDPOINT_ENVIO;
let estado = "edicao";

if (!modoDemo) {
  // Com serviço real configurado, não faz sentido mostrar o aviso nem o controle de teste.
  avisoDemo.hidden = true;
  form.querySelector(".controle-teste").hidden = true;
}

/* ---------- Estados ---------- */

function definirEstado(novo) {
  estado = novo;
  form.dataset.estado = novo;
  form.setAttribute("aria-busy", String(novo === "processando"));

  const processando = novo === "processando";
  // aria-disabled (e não disabled) mantém o foco no botão e o leitor de tela
  // continua anunciando a região de status.
  botao.setAttribute("aria-disabled", String(processando));
  botao.textContent = processando
    ? TEXTO_BOTAO.processando
    : novo === "falha"
      ? TEXTO_BOTAO.retentar
      : TEXTO_BOTAO.padrao;

  // Durante o processamento os dados não podem mudar.
  Object.values(campos).forEach(({ el }) => (el.readOnly = processando));
  form
    .querySelectorAll('input[name="resultado-simulado"]')
    .forEach((r) => (r.disabled = processando));
}

const ICONES = { info: "⏳", sucesso: "✔", erro: "✖", aviso: "⚠" };

function mostrarStatus(tipo, titulo, detalhe) {
  statusRegiao.className = "status status-" + tipo;
  statusRegiao.replaceChildren();

  const icone = document.createElement("span");
  icone.className = "status-icone";
  icone.setAttribute("aria-hidden", "true");
  icone.textContent = ICONES[tipo];

  const corpo = document.createElement("div");
  const t = document.createElement("strong");
  t.textContent = titulo;
  corpo.append(t);
  if (detalhe) {
    const p = document.createElement("p");
    p.textContent = detalhe;
    corpo.append(p);
  }
  statusRegiao.append(icone, corpo);
}

/* ---------- Validação ---------- */

function valorLimpo(campo) {
  return campo.el.value.trim();
}

function validarCampo(campo) {
  const msg = campo.validar(valorLimpo(campo));
  campo.erro.textContent = msg;
  campo.erro.hidden = !msg;
  if (msg) campo.el.setAttribute("aria-invalid", "true");
  else campo.el.removeAttribute("aria-invalid");
  return msg;
}

function validarTudo() {
  const invalidos = Object.values(campos).filter((c) => validarCampo(c));
  return invalidos;
}

Object.values(campos).forEach((campo) => {
  // Corrige a mensagem de erro assim que a pessoa conserta o campo.
  campo.el.addEventListener("input", () => {
    if (campo.el.hasAttribute("aria-invalid")) validarCampo(campo);
  });
});

/* ---------- Envio ---------- */

function enviarSimulado(dados, resultado) {
  // Demonstração: resolve ou rejeita de forma CONTROLADA pela escolha da pessoa.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resultado === "falha") {
        reject(new Error("Falha simulada pelo controle de teste."));
      } else {
        resolve({ simulado: true });
      }
    }, TEMPO_SIMULADO_MS);
  });
}

async function enviarReal(dados) {
  const controle = new AbortController();
  const timer = setTimeout(() => controle.abort(), TEMPO_LIMITE_MS);
  try {
    const resposta = await fetch(ENDPOINT_ENVIO, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(dados),
      signal: controle.signal,
    });
    if (!resposta.ok) throw new Error("Resposta do servidor: " + resposta.status);
    return resposta;
  } finally {
    clearTimeout(timer);
  }
}

function enviarMensagem(dados) {
  if (!modoDemo) return enviarReal(dados);
  const escolhido = form.querySelector('input[name="resultado-simulado"]:checked');
  return enviarSimulado(dados, escolhido ? escolhido.value : "sucesso");
}

form.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  // Trava síncrona: cliques rápidos ou Enter repetido não iniciam outro envio.
  if (estado === "processando") return;

  const invalidos = validarTudo();
  if (invalidos.length > 0) {
    definirEstado("erro-validacao");
    const n = invalidos.length;
    mostrarStatus(
      "erro",
      "Não foi possível enviar.",
      n === 1
        ? "Corrija 1 campo indicado abaixo e tente de novo."
        : "Corrija os " + n + " campos indicados abaixo e tente de novo."
    );
    invalidos[0].el.focus();
    return;
  }

  const dados = {
    nome: valorLimpo(campos.nome),
    email: valorLimpo(campos.email),
    assunto: valorLimpo(campos.assunto),
    mensagem: valorLimpo(campos.mensagem),
  };

  definirEstado("processando");
  mostrarStatus(
    "info",
    "Enviando sua mensagem…",
    modoDemo ? "Simulação em andamento. Aguarde." : "Aguarde a confirmação."
  );

  try {
    await enviarMensagem(dados);
    // Só aqui, após a operação concluir, mostramos sucesso e limpamos os campos.
    form.reset();
    Object.values(campos).forEach((c) => {
      c.erro.hidden = true;
      c.erro.textContent = "";
      c.el.removeAttribute("aria-invalid");
    });
    definirEstado("sucesso");
    mostrarStatus(
      "sucesso",
      modoDemo ? "Simulação concluída com sucesso." : "Mensagem enviada com sucesso.",
      modoDemo
        ? "Atenção: isto é uma demonstração e nenhum e-mail foi enviado. Para contato real, escreva para yuricabral08@gmail.com."
        : "Obrigado pelo contato! Responderei assim que possível."
    );
  } catch (erro) {
    // Falha: dados preservados, botão volta a ficar utilizável.
    definirEstado("falha");
    mostrarStatus(
      "erro",
      modoDemo ? "Falha simulada no envio." : "Não foi possível enviar a mensagem.",
      "Seus dados foram mantidos. Use o botão “Tentar novamente”" +
        (modoDemo ? ", ou escolha “Simular sucesso” no controle de teste" : "") +
        ". Se preferir, escreva para yuricabral08@gmail.com."
    );
  }
});
