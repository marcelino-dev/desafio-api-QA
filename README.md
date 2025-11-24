# 📌 Projeto de Automação API – Cypress (Serverest.dev)

📖 Descrição

Este projeto é parte de um teste técnico. O objetivo é demonstrar capacidade de estruturar, organizar e automatizar cenários críticos de API usando Cypress.

A API utilizada é a Serverest.dev.

## 📁 Estrutura do Projeto

cypress/e2e/ – testes organizados por funcionalidade

cypress/support/ – commands customizados e configurações

cypress/fixtures/ – massas de teste

cypress.config.js – config geral

## 🚀 Como executar o projeto

Instale dependências:

npm install

Execute os testes no modo CLI:

npx cypress run

---

Ou abra a interface interativa:

npx cypress open
🧪 Funcionalidades Automatizadas

Cada módulo possui 2 cenários críticos:

Login

Usuários

Produtos

Carrinhos

Todos os testes acessam a API diretamente usando cy.request.
