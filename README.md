# 🧪 Projeto Técnico – Automação Cypress API

📖 Descrição

Este projeto é parte de um teste técnico. O objetivo é demonstrar capacidade de estruturar, organizar e automatizar cenários críticos de API usando Cypress.

A API utilizada é a Serverest.dev.

🚀 Tecnologias

Cypress

Cypress plugin API

Custom Commands

## 📋 Pré-requisitos

- **Node.js** versão **24.11.1**
- **npm** (vem junto com o Node.js)
- **Git Bash** (recomendado no Windows)

## 🚀 Como executar o projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/marcelino-dev/desafio-api-QA.git
   cd seu-repositorio-cypress
   ```
2. **Instalar dependências**
   ```bash
   npm install
   ```
3. **Abra a interface interativa:**

   ```bash
   npx cypress open
   ```

   **Ou execute o Cypress em modo Headless**

   ```bash
   npx cypress run
   ```

## ✅ Cenários Automatizados

Cada módulo possui 2 cenários críticos:

Login

Usuários

Produtos

Carrinhos

Todos os testes acessam a API diretamente usando cy.api (Plugin).
