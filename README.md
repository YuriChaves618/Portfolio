# Portfólio de Yuri Chaves

## Descrição

Portfólio pessoal de página única para apresentar a formação, as tecnologias, os projetos e os canais de contato de Yuri Chaves Cabral. O site usa HTML, CSS e JavaScript sem etapa de compilação. O formulário conversa com uma Supabase Edge Function, que registra os contatos e solicita o envio de uma notificação por e-mail ao Resend.

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis, Grid, Flexbox e media queries
- JavaScript moderno para renderização, filtros, menu móvel e validação do formulário
- Supabase Edge Functions e banco PostgreSQL para o contato
- Resend para a notificação por e-mail

## Estrutura

```text
Portfolio Yuri Chaves/
├── index.html
├── style.css
├── script.js
├── favicon.png
├── 001_contact_messages.sql
└── img/
    ├── pokedex.png
    ├── when-the-woods-remember.png
    ├── sistema-de-rh.png
    ├── conecta-ti.png
    ├── catapimbas.png
    └── clube-ds.png
```

## Como executar localmente

1. Extraia a pasta `Portfolio Yuri Chaves`.
2. Abra a pasta no Visual Studio Code.
3. No terminal do VS Code, dentro dessa pasta, execute:

   ```powershell
   py -m http.server 5500
   ```

4. Acesse `http://localhost:5500` no navegador.

Como o site é estático, não há instalação de dependências nem comando de build. Para publicar no Vercel, defina a pasta `Portfolio Yuri Chaves` como raiz do projeto.

O site pode ser visualizado localmente sem o backend. Para enviar o formulário, a Edge Function `contact` precisa estar publicada e configurada no Supabase. `RESEND_API_KEY` e `CONTACT_TO` são segredos do Supabase; não devem ser colocados no Vercel ou no JavaScript público.

## Diagnóstico: cinco problemas de responsividade

| Problema identificado no código anterior | Ajuste aplicado |
|---|---|
| A navegação sumia abaixo de 760 px sem oferecer outro controle. | Botão de menu móvel com `aria-expanded`, abertura e fechamento por toque, tecla Esc e seleção de link. |
| O título principal tinha tamanho mínimo de 60 px e `white-space: nowrap`, o que podia ultrapassar telas estreitas. | Escala tipográfica específica para celular, quebra de linha permitida e espaçamento de letras ajustado. |
| A barra de disponibilidade passava de quatro colunas para duas, mesmo em celulares muito estreitos. | Uma coluna abaixo de 540 px, com divisórias verticais/horizontais ajustadas para cada faixa. |
| Nome e e-mail continuavam lado a lado no formulário; os campos não tinham largura fluida explícita. | A linha do formulário passa para uma coluna até 760 px; campos e seleção usam largura total e `min-width: 0`. |
| Itens de Grid podiam preservar largura mínima intrínseca de títulos, chips ou endereços longos. | Filhos dos grids podem encolher; títulos, links e conteúdos longos podem quebrar sem criar rolagem horizontal. |

## Evidências de antes e depois

As comparações abaixo são evidências do código-fonte anterior e dos seletores adicionados nesta versão; não são capturas de tela.

| Área | Antes | Depois |
|---|---|---|
| Navegação | Em telas de até 760 px, `nav` usava `display: none` sem menu alternativo. | `#menu-toggle` controla `#primary-nav`; o estado acessível muda junto com a classe visual e o menu fecha por link ou Esc. |
| Título | `.hero h1` usava `clamp(60px, 15.6vw, 230px)` e `white-space: nowrap`. | Até 760 px, a fonte reduz com a largura da viewport e o texto pode quebrar; há ajuste adicional até 360 px. |
| Formulário | `.r2` mantinha `grid-template-columns: 1fr 1fr` e os campos não declaravam `width: 100%`. | Abaixo de 760 px, `.r2` passa a uma coluna; `input`, `textarea` e o select do formulário ocupam a largura disponível. |

## Matriz de testes

| Caso | Cenário | Resultado esperado | Situação nesta revisão |
|---|---|---|---|
| Sintaxe do JavaScript | `node --check script.js` | Nenhum erro de sintaxe. | Aprovado. |
| Estrutura do menu | IDs, `aria-controls`, estado inicial e breakpoints no HTML/CSS | Menu móvel acessível até 760 px e navegação desktop acima desse limite. | Aprovado por verificação estática. |
| Formato fluido | Regras de Grid, `width: 100%` e `min-width: 0` | Campos de formulário ocupam a largura disponível sem manter colunas estreitas. | Aprovado por verificação estática. |
| Recursos visuais | Favicon e seis imagens de projetos | Todos os caminhos usados pelo portfólio apontam para arquivos existentes. | Aprovado por verificação estática. |
| Celular compacto | 320 × 640 px | Título, chips, barra e cartões não produzem rolagem horizontal. | Conferência visual pendente. |
| Celular comum | 390 × 844 px | Menu abre/fecha; formulário empilha; imagens mantêm proporção. | Conferência visual pendente. |
| Celular largo | 540 × 960 px | Barra usa uma coluna; espaços e alvos de toque permanecem utilizáveis. | Conferência visual pendente. |
| Limite do menu | 760/761 px | Menu móvel aparece até 760 px; navegação horizontal aparece a partir de 761 px. | Interação não executada no navegador. |
| Tablet e desktop | 860, 960 e 1280 px | Grids mudam de coluna sem comprimir textos; layout amplo preserva a composição desktop. | Conferência visual pendente. |
| Filtro de projetos | Todos, uma categoria e uma tecnologia | A seleção mostra todos os projetos ou apenas os correspondentes ao filtro. | Interação não executada no navegador. |
| Validação do formulário | Nome, e-mail, motivo, “Outro” e mensagem | Regras nativas e limites após `trim()` bloqueiam entradas inválidas; contador acompanha a mensagem. | Interação não executada no navegador. |
| Contato externo | Envio para Supabase/Resend com os segredos atuais | Registro salvo e notificação enviada ao destinatário configurado. | Não reenviado nesta revisão; o usuário já confirmou um envio após configurar `CONTACT_TO`. |
| Movimento reduzido | Preferência do sistema ativa | Mascotes/animações decorativas são reduzidos/desativados e a rolagem deixa de ser suave. | Regra CSS presente; não exercitada no navegador. |

A prévia local em navegador não foi executada nesta revisão: a política do navegador bloqueou a abertura do arquivo local. Por isso, as verificações estáticas estão marcadas separadamente das conferências visuais e interativas pendentes. Nenhum resultado visual foi declarado sem captura.
## Refatoração aplicada

A folha de estilos foi organizada em duas partes: regras base para telas amplas e blocos responsivos em 960, 860, 760, 540 e 360 px. As regras móveis tratam primeiro a navegação e os grids; depois ajustam títulos, campos, cartões, espaçamentos, controles e quebras de texto. A estrutura de dados dos projetos permaneceu separada da configuração do filtro. No JavaScript, o controle do menu foi isolado em `setMenuOpen`, que mantém o estado visual e os atributos de acessibilidade sincronizados.

## Como o contato funciona

1. O navegador valida os campos obrigatórios e as regras de tamanho após `trim()`. O campo de assunto adicional só fica ativo quando o motivo é “Outro”; o contador acompanha a mensagem aparada.
2. `script.js` converte os campos em JSON e envia um `POST` para `https://onzcycauptumsuxqssbq.supabase.co/functions/v1/contact`.
3. A Edge Function valida os dados, aplica limite de frequência por endereço de e-mail e grava nome, e-mail, assunto e mensagem em `public.contact_messages`.
4. A função chama a API do Resend. `CONTACT_TO` define o único destinatário da notificação; se o segredo estiver ausente, o código usa o endereço padrão da função. O endereço informado por quem preenche fica como `reply_to`, para facilitar a resposta, e não como destinatário.
5. Com `onboarding@resend.dev`, o Resend limita os envios de teste ao e-mail associado à conta. Para enviar para outra caixa, configure um domínio verificado no Resend e um remetente desse domínio.

**Comportamento a considerar:** a função compartilhada retorna HTTP 200 mesmo quando a chamada ao Resend falha (o erro fica apenas no log). Assim, a interface pode mostrar sucesso embora o registro tenha sido salvo e o e-mail não tenha sido enviado. A entrega deve ser confirmada nos logs do Resend até que essa resposta seja refinada.