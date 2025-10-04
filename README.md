# 🧪 Banco API Tests

## 📘 Descrição do Projeto
O **Banco API Tests** é um projeto de **automação de testes de API REST**, desenvolvido em **JavaScript** com o objetivo de validar as funcionalidades da [Banco API](https://github.com/juliodelimas/banco-api).  

O projeto executa testes automatizados que verificam o comportamento dos endpoints da API, contribuindo sua confiabilidade e estabilidade.  
Os testes são estruturados com **Mocha**, **Chai** e **Supertest**, além de gerar relatórios detalhados em HTML com o **Mochawesome**.

---

## ⚙️ Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de Asserções:** [Chai](https://www.chaijs.com/)
- **Cliente HTTP para Testes:** [Supertest](https://github.com/ladjs/supertest)
- **Geração de Relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Variáveis de Ambiente:** [dotenv](https://github.com/motdotla/dotenv)

---

## 🗂️ Estrutura de Diretórios

```
banco-api-tests/
│
├── 📁 test/                  # Pasta com os arquivos de testes
│   ├── clientes.test.js      # Testes relacionados a clientes
│   └── transacoes.test.js    # Testes relacionados a transações
│
├── 📁 mochawesome-report/    # Relatórios HTML gerados após a execução
│
├── 📄 package.json           # Dependências e scripts do projeto
├── 📄 .env                   # Arquivo de variáveis de ambiente (criado pelo usuário)
└── 📄 README.md              # Documentação do projeto
```

---

## 🔧 Configuração do Ambiente

### 1. Clone o repositório
```bash
git clone https://github.com/juliodelimas/banco-api-tests.git
cd banco-api-tests
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Crie o arquivo `.env`
O arquivo `.env` deve ser criado na raiz do projeto e conter a seguinte variável:

```env
BASE_URL=http://localhost:3000
```

> ⚠️ **Observação:**  
> O valor de `BASE_URL` deve apontar para a URL base onde a [Banco API](https://github.com/juliodelimas/banco-api) está em execução.

---

## ▶️ Execução dos Testes

### Rodar todos os testes
```bash
npm test
```

### Executar testes com relatório Mochawesome
```bash
npm run test:report
```

Após a execução, o relatório HTML será gerado automaticamente em:
```
/mochawesome-report/mochawesome.html
```

Abra o arquivo no navegador para visualizar os resultados detalhados.

---

## 📄 Scripts Disponíveis

No arquivo `package.json`, estão definidos os seguintes scripts úteis:

| Comando | Descrição |
|----------|------------|
| `npm test` | Executa todos os testes automatizados |
| `npm run test:report` | Executa os testes e gera relatório Mochawesome |
| `npm run lint` | (Opcional) Executa análise de código se configurado |

---

## 🔗 Documentações das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [dotenv](https://github.com/motdotla/dotenv)
- [Node.js](https://nodejs.org/)

