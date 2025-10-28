# aulaadsprogramacaoweb# 📢 Vozes do Desenvolvimento - Empreendedorismo Social

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange.svg)]()

> A Vozes do Desenvolvimento é uma Organização Não Governamental (ONG) focada em Empreendedorismo Social em comunidades carentes. Este projeto é a implementação web institucional da ONG, desenvolvida para ser uma **Single Page Application (SPA) básica**, destacando Missão, Visão, Valores, projetos, e facilitando o cadastro de voluntários e doações.

---

## 🎯 Objetivo do Projeto

O objetivo principal é fornecer uma interface web dinâmica e profissional para a ONG, garantindo:

1.  **Apresentação Institucional:** Detalhar a missão, visão e valores da ONG.
2.  **Engajamento:** Facilitar o contato, o cadastro de voluntários e a realização de doações.
3.  **Experiência do Usuário (UX):** Oferecer uma navegação fluida e rápida através da arquitetura SPA básica.
4.  **Transparência:** Fornecer canais claros de contato e informações sobre parcerias.

## ✨ Funcionalidades Principais

| Funcionalidade | Descrição | Tecnologia |
| :--- | :--- | :--- |
| **Navegação SPA** | Carregamento de conteúdo dinâmico (sem recarregar a página) ao navegar entre as seções (Início, Projeto, Cadastro, Doar, Parceiros). | JavaScript (Manipulação do DOM) |
| **Templates JavaScript** | Utilização de um sistema básico de templates no JS para renderização do conteúdo principal. | JavaScript |
| **Formulários Interativos** | Formulários de Contato e Cadastro de Voluntários com foco em usabilidade. | HTML5, CSS, JavaScript |
| **Validação de Dados** | Sistema robusto de verificação de consistência de dados (e-mail, nome, formato de CPF simulado) nos formulários antes do envio. | JavaScript |
| **Persistência Local (Doações)** | Demonstração do uso de `localStorage` para simular o registro de dados de doação, simulando a interação com um "framework" de armazenamento de dados. | JavaScript (localStorage) |

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as bases do desenvolvimento web:

* **HTML5:** Estrutura semântica das páginas.
* **CSS3:** Estilização das páginas, layout e responsividade (assumindo que os arquivos CSS: `index.css`, `root.css`, `header.css`, etc. existem e fornecem o estilo necessário).
* **JavaScript (Vanilla JS):** Toda a lógica de SPA, manipulação do DOM, gestão de eventos, validação de formulários e armazenamento local.

## 🚀 Como Executar o Projeto Localmente

Para rodar este projeto em seu ambiente de desenvolvimento:

1.  **Clone o Repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd vozes-do-desenvolvimento
    ```

2.  **Estrutura de Arquivos:** Certifique-se de que a estrutura de arquivos esteja correta:
    ```
    vozes-do-desenvolvimento/
    ├── index.html
    ├── projeto.html
    ├── cadastro.html
    ├── doar.html
    ├── parceiros.html
    ├── script.js (Código JavaScript do SPA)
    └── style/
        ├── root.css
        ├── index.css
        ├── header.css
        ├── cadastro.css
        ├── doar.css
        └── parceiros.css
    ```

3.  **Abrir no Navegador:**
    * Simplesmente abra o arquivo `index.html` em seu navegador.
    * **Alternativa (Recomendada):** Utilize a extensão **Live Server** no VS Code para abrir o projeto, garantindo que o SPA e as rotas funcionem corretamente em um servidor local.

## 📂 Visão Geral dos Arquivos

| Arquivo | Descrição |
| :--- | :--- |
| `index.html` | Página inicial com apresentação e formulário de contato. |
| `projeto.html` | Página detalhando os projetos e iniciativas (conteúdo similar ao `index` na estrutura atual). |
| `cadastro.html` | Formulário dedicado ao cadastro de voluntários. |
| `doar.html` | Página para incentivo e registro de doações. |
| `parceiros.html` | Informações sobre como ser um parceiro estratégico. |
| `script.js` | **O coração do projeto.** Contém toda a lógica JavaScript do SPA, templates, validações de formulário e a simulação de armazenamento local. |

---

## 📝 Contribuições

Sinta-se à vontade para sugerir melhorias e correções!

1.  Faça um Fork do projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`).
3.  Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`).
4.  Faça o Push para a branch (`git push origin feature/AmazingFeature`).
5.  Abra um Pull Request.

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## ✉️ Contato

ONG Vozes do Desenvolvimento - `contato@vozesdodesenvolvimento.org`
[Link para o Projeto no GitHub]([URL_DO_SEU_REPOSITORIO])