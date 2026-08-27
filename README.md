# lab.kaueprata.com

Galeria bilíngue de trabalhos acadêmicos, jogos e experimentos de Kauê Prata.
O hub e os projetos publicados nele usam HTML, CSS e JavaScript puros, sem
etapa de build.

## Como rodar

```bash
python -m http.server 8123
```

Abra `http://localhost:8123`. A página em inglês fica em `/` e a versão em
português em `/pt/`.

## Testes

O núcleo de regras da Corrida da Tabuada usa apenas APIs nativas do navegador e
do Node. Para validar progressão, perguntas e pontuação:

```bash
node --test tests/game-core.test.cjs
```

## Adicionando um projeto

1. Crie uma pasta na raiz usando um slug curto, por exemplo `calculadora/`.
2. Coloque o projeto dentro dela, com `index.html` como entrada.
3. Use caminhos relativos dentro do projeto, como `./style.css` e `./script.js`.
4. Adicione o projeto em `assets/v2/apps.js`, preenchendo os textos em `pt` e `en`.
5. Faça commit e push. A URL será `https://lab.kaueprata.com/calculadora/`.

O arquivo `assets/v2/apps.js` é a fonte da lista exibida nas duas páginas
iniciais.

## Projetos

- `/auditoria-heuristica/`: Onde o clique morre, auditoria heurística dos sites dos
  Correios e da Prefeitura de Goiânia, com os caminhos até cada erro refeitos em
  animação e classificados pela escala de severidade de Nielsen.
- `/analise-ux-goiania/`: No lugar do cidadão, análise de usabilidade do site da Prefeitura
  de Goiânia, com as jornadas refeitas dentro de uma réplica animada do site.
- `/tabuada/`: Corrida da Tabuada, jogo educacional em Canvas 2D e WebGL com
  níveis, progressão local e visuais personalizáveis.

## Licença

MIT para o código do hub. Projetos incorporados podem ter suas próprias
licenças e autoria.
