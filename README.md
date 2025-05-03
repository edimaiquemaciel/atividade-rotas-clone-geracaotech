# Atividade de Fixação: Rotas e Componentes em React - Clone Geração Tech

[![React](https://img.shields.io/badge/React-18.2.0-%2361DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-%5E5.0.8-%23646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v6-%23CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/en/main)
[![Sass](https://img.shields.io/badge/Sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
<!-- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT) -->

## 🎯 Objetivo do Projeto

Este projeto demonstra a implementação de roteamento em aplicações React utilizando `react-router-dom` (v6+) e a estilização de componentes com **SCSS Modules**. Foi desenvolvido como parte de uma atividade educacional (possivelmente Geração Tech), focando em:

*   Conceitos de Single Page Applications (SPA).
*   Navegação declarativa com React Router.
*   Organização de componentes reutilizáveis (Header, Footer, Spinner).
*   Estilização encapsulada e modular com SCSS Modules.

## ✨ Funcionalidades Principais

*   **Navegação SPA:** Transição entre páginas sem recarregar o browser.
*   **Layout Consistente:** Uso de componentes `Header` e `Footer` em todas as páginas.
*   **Rotas Definidas:**
    *   `/`: Página Inicial (Home)
    *   `/sobre`: Página Sobre
    *   `/contato`: Página Contato
    *   `/modulo`: Página Módulo (Rotas com parametros)
*   **Componente `Link`:** Navegação interna através do `<Link>` do `react-router-dom` no `Header`.
*   **Indicador de Carregamento:** Componente `Spinner` (potencialmente para carregamento assíncrono, embora não implementado nas rotas atuais).
*   **Tratamento de Rota Não Encontrada (404):** Rota curinga (`*`) para URLs inválidas (`ErrorNotFound`).
*   **Estilização Modular:** Uso de arquivos `.module.scss` para evitar conflitos de CSS e manter estilos encapsulados por componente/página.

## 🛠️ Tecnologias Utilizadas

*   **[React](https://reactjs.org/) (v18.2.0):** Biblioteca para construção de interfaces.
*   **[Vite](https://vitejs.dev/) (^5.0.8):** Ferramenta de build e desenvolvimento frontend.
*   **[React Router DOM](https://reactrouter.com/en/main) (v6+):** Roteamento para SPAs React.
*   **[Sass/SCSS](https://sass-lang.com/):** Pré-processador CSS para escrita de estilos mais avançados.
*   **CSS Modules:** Técnica para escopo local de CSS (usada via arquivos `*.module.scss`).
*   **JavaScript (ES6+):** Linguagem de programação.
*   **JSX:** Extensão de sintaxe para JavaScript.
*   **[ESLint](https://eslint.org/):** Ferramenta para linting de código JavaScript/JSX.

## 📂 Estrutura do Projeto

A estrutura de pastas e arquivos principal do projeto é a seguinte:

```
/
├── public/ # Arquivos estáticos servidos diretamente
├── src/
│ ├── assets/ # Recursos como imagens, fontes (atualmente vazio)
│ ├── components/ # Componentes de UI reutilizáveis
│ │ ├── Footer.jsx
│ │ ├── Footer.module.scss
│ │ ├── Header.jsx
│ │ ├── Header.module.scss
│ │ ├── Spinner.jsx
│ │ └── Spinner.module.scss
│ ├── pages/ # Componentes que representam páginas completas da aplicação
│ │ ├── About.jsx
│ │ ├── About.module.scss
│ │ ├── Contact.jsx
│ │ ├── Contact.module.scss
│ │ ├── ErrorNotFound.jsx
│ │ ├── ErrorNotFound.module.scss
│ │ ├── Home.jsx
│ │ ├── Home.module.scss
│ │ ├── Modulo.jsx # Uma página adicional específica
│ │ └── Modulo.module.scss
│ ├── App.jsx # Componente raiz que define o layout (Header, Footer) e as rotas (<Routes>)
│ ├── App.module.scss # Estilos específicos para o componente App
│ ├── index.css # Estilos CSS globais ou reset
│ └── main.jsx # Ponto de entrada da aplicação React (Renderiza <App /> dentro do <BrowserRouter>)
├── .gitignore # Arquivos e pastas ignorados pelo Git
├── eslint.config.js # Configuração do ESLint para linting de código
├── index.html # Template HTML principal (usado pelo Vite)
├── package-lock.json # Lockfile de dependências NPM
├── package.json # Metadados do projeto e dependências NPM
└── README.md # Documentação do projeto (este arquivo)
```

## 🚀 Começando

Siga estas instruções para obter uma cópia do projeto rodando em sua máquina local.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão LTS recomendada)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/edimaiquemaciel/atividade-rotas-clone-geracaotech.git
    ```
2.  **Navegue até o diretório:**
    ```bash
    cd atividade-rotas-clone-geracaotech
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    # yarn install
    ```
    *(Nota: O Sass será instalado como dependência de desenvolvimento, pois o Vite o compila durante o build)*

### Rodando em Modo de Desenvolvimento

```bash
npm run dev
# ou
# yarn dev
```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta, conforme indicado no terminal).

## 🤝 Contribuições

Embora este seja um projeto de atividade, sugestões e melhorias são bem-vindas! Sinta-se à vontade para:

1.  Fazer um Fork do projeto.
2.  Criar uma Branch para sua feature (`git checkout -b feature/MinhaFeature`).
3.  Commitar suas mudanças (`git commit -m 'Adiciona MinhaFeature'`).
4.  Fazer o Push para a Branch (`git push origin feature/MinhaFeature`).
5.  Abrir um Pull Request.

Você também pode simplesmente abrir uma [Issue](https://github.com/edimaiquemaciel/atividade-rotas-clone-geracaotech/issues) para relatar bugs ou sugerir ideias.

## 📄 Licença

Este projeto atualmente não possui uma licença definida. Se você planeja torná-lo um projeto open-source mais formal, considere adicionar um arquivo `LICENSE` (por exemplo, com a [Licença MIT](https://opensource.org/licenses/MIT)).

## 👤 Autor

*   **Edimaique Maciel**
    *   GitHub: [@edimaiquemaciel](https://github.com/edimaiquemaciel)

---
