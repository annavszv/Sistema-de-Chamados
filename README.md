# 📋 Sistema de Chamados

Sistema web desenvolvido para **cadastro de chamados**, permitindo registrar informações sobre problemas em equipamentos e acompanhar os chamados cadastrados.

O projeto foi desenvolvido como prática de desenvolvimento web, utilizando **HTML, CSS, JavaScript e Supabase** para trabalhar com uma aplicação conectada a banco de dados.

## 🚀 Tecnologias utilizadas

* **HTML5** — estrutura da aplicação
* **CSS3** — estilização e organização visual
* **JavaScript** — lógica e interatividade
* **Supabase** — banco de dados e integração com a aplicação
* **Git/GitHub** — versionamento do projeto

## 💡 Sobre o projeto

O sistema possui um formulário para abertura de chamados, no qual o usuário pode informar dados relacionados ao problema encontrado.

Entre as informações cadastradas estão:

* Equipamento
* Problema
* Descrição
* Prioridade
* Status

Após o cadastro, os chamados podem ser apresentados na interface para facilitar sua visualização.

## 🗂️ Estrutura do projeto

```text
Sistema-de-Chamados/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

> A estrutura pode variar conforme a organização final dos arquivos do projeto.

## 📝 Funcionalidades

* [x] Formulário para cadastro de chamados
* [x] Cadastro de informações do chamado
* [x] Integração com banco de dados
* [x] Exibição dos chamados cadastrados
* [ ] Edição de chamados
* [ ] Exclusão de chamados
* [ ] Filtros de chamados
* [ ] Sistema de autenticação

## 🗄️ Banco de dados

O projeto utiliza o **Supabase** como serviço de banco de dados.

A aplicação trabalha com uma tabela responsável pelo armazenamento dos chamados.

### Tabela `chamado`

Principais informações utilizadas:

| Campo         | Descrição                          |
| ------------- | ---------------------------------- |
| `equipamento` | Equipamento relacionado ao chamado |
| `problema`    | Problema identificado              |
| `descricao`   | Descrição detalhada do problema    |
| `prioridade`  | Nível de prioridade                |
| `status`      | Situação atual do chamado          |

## 🔄 Funcionamento

O fluxo principal da aplicação funciona da seguinte maneira:

```text
Usuário
   ↓
Preenche o formulário
   ↓
Envia o chamado
   ↓
JavaScript processa os dados
   ↓
Supabase recebe os dados
   ↓
Chamado é armazenado no banco
   ↓
Chamados são exibidos na interface
```

## 🎯 Objetivo

O objetivo do projeto é desenvolver uma aplicação web capaz de organizar o registro de problemas técnicos por meio de chamados, além de colocar em prática conhecimentos de **HTML, CSS, JavaScript, banco de dados e integração com APIs**.

## 📚 Aprendizados

Durante o desenvolvimento, foram praticados conceitos como:

* Manipulação do DOM;
* Eventos em JavaScript;
* Formulários HTML;
* Comunicação entre Front-end e banco de dados;
* Operações com dados;
* Organização de interfaces;
* Consumo de serviços externos;
* Estruturação de projetos web.

## 👩‍💻 Autoria

Projeto desenvolvido como parte dos estudos em **Desenvolvimento de Sistemas**.

---

⭐ Projeto desenvolvido para fins educacionais e de aprendizado.

