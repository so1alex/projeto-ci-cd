Projeto CI/CD Básico

Este é um projeto de demonstração simples para implementar o ciclo completo de Integração Contínua (CI) e Implantação Contínua (CD) usando:

GitHub Actions: Para automatizar o pipeline.

Jest: Para executar testes unitários.

Vercel: Para o deploy automático da aplicação.

Fluxo do Pipeline

Um desenvolvedor faz um git push para a branch main.

O GitHub Actions é acionado (pelo arquivo .github/workflows/ci.yml).

CI (build-and-test job):

As dependências são instaladas (npm install).

Os testes são executados (npm test).

Se os testes falharem, o pipeline para aqui.

CD (deploy job):

Se os testes passarem, o código é enviado para a Vercel.

A Vercel implanta a nova versão em produção.

Configuração Necessária (Secrets do GitHub)

Para que o deploy na Vercel funcione, você DEVE configurar três segredos (secrets) no seu repositório do GitHub (Settings > Secrets and variables > Actions):

Nome do Secret

Descrição

Onde Obter

VERCEL_TOKEN

Seu token de acesso pessoal da Vercel.

Vercel Dashboard > Settings > Tokens.

VERCEL_ORG_ID

O ID da sua Organização/Time Vercel.

Vercel Dashboard > Team Settings > General.

VERCEL_PROJECT_ID

O ID do projeto Vercel que você criou.

Vercel Dashboard > Project Settings > General.

Passos para Obter os IDs:

Inicie o projeto na Vercel: Na primeira vez, você precisará rodar vercel no seu terminal na raiz do projeto e seguir as instruções para criar e linkar o projeto à Vercel.

Pegue os IDs: Depois de linkar, os IDs necessários estarão disponíveis nas configurações do projeto e time na Vercel.

Estrutura do Projeto

projeto-ci-cd/
├── src/
│   └── index.js
├── tests/
│   └── index.test.js
├── package.json
└── .github/
    └── workflows/
        └── ci.yml
