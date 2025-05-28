# Projeto Frontend com React e Vite

Este projeto é um setup frontend robusto e moderno, utilizando React e Vite como principais ferramentas. Ele foi cuidadosamente arquitetado para promover escalabilidade, manutenibilidade e uma excelente experiência de desenvolvimento.

## 🎯 Visão Geral da Arquitetura

O projeto segue uma arquitetura limpa e modular, inspirada em princípios de **Clean Architecture** e **Domain-Driven Design (DDD)**, adaptados para o contexto do frontend. Isso significa que a lógica de negócios (core) é independente de frameworks e bibliotecas de UI, facilitando a testabilidade e a evolução do sistema.

A estrutura de pastas principal é organizada da seguinte forma:

setup-react/
├── public/               # Arquivos estáticos e mock Service Worker
├── src/
│   ├── core/             # Camada de domínio e aplicação (lógica de negócio)
│   │   ├── application/  # Casos de uso, mocks de API
│   │   └── domain/       # Entidades, repositórios (interfaces), erros de domínio
│   ├── features/         # Módulos de funcionalidades específicas (ex: home)
│   ├── infrastructure/   # Implementações de interfaces (ex: repositórios, HTTP client)
│   ├── pages/            # Componentes de página, geralmente combinando features
│   ├── shared/           # Componentes, hooks, layouts, libs, rotas e utils compartilhados
│   │   ├── components/   # Componentes de UI reutilizáveis (ex: Button, Modal, ui/*)
│   │   ├── hooks/        # Hooks customizados (ex: useDebounce, useLocalStorage)
│   │   ├── layouts/      # Layouts de aplicação (ex: AppLayout)
│   │   ├── lib/          # Configuração de bibliotecas (ex: react-query, utils)
│   │   ├── routes/       # Definição das rotas da aplicação
│   │   └── styles/       # Estilos globais e CSS
│   ├── _app.tsx          # Componente raiz da aplicação, provedores globais
│   ├── env.ts            # Validação e tipagem de variáveis de ambiente
│   ├── main.tsx          # Ponto de entrada da aplicação React
│   └── vite-env.d.ts     # Tipings para o Vite
├── test/                 # Configuração e arquivos de teste (ex: setup.ts)
├── tailwind.config.js    # Configuração do Tailwind CSS
├── postcss.config.js     # Configuração do PostCSS
├── vite.config.ts        # Configuração do Vite (build, dev server, plugins)
├── tsconfig.json         # Configuração principal do TypeScript
├── package.json          # Dependências e scripts do projeto
└── README.md             # Este arquivo

### Principais Camadas:

* **Core (Domínio e Aplicação):**
    * **Domain:** Contém as entidades de negócio, interfaces de repositórios e erros de domínio. É o coração da aplicação, totalmente independente de frameworks.
    * **Application:** Orquestra os casos de uso da aplicação, utilizando os repositórios definidos no domínio. Também pode conter mocks para a API durante o desenvolvimento.
* **Infrastructure:**
    * Implementa as interfaces definidas na camada de domínio. Por exemplo, aqui encontramos as implementações concretas dos repositórios (ex: `ExemploRepository` em `infrastructure/repositories/exemplo.ts`) e o cliente HTTP (ex: `AxiosAdapter` em `infrastructure/http/axios-adapters.ts`).
* **Features:**
    * Módulos de funcionalidades específicas, como `home`. Cada feature pode ter suas próprias páginas, componentes e lógica relacionada.
* **Shared:**
    * Contém elementos reutilizáveis em toda a aplicação, como componentes de UI (construídos com `shadcn/ui` e Tailwind CSS), hooks customizados, layouts, configurações de bibliotecas (como `react-query`) e as rotas da aplicação.
* **Pages:**
    * Componentes React que representam as páginas da aplicação, geralmente orquestrando e combinando diversas `features`.

### Tecnologias e Ferramentas:

* **React 18:** Biblioteca principal para construção da interface do usuário.
* **Vite:** Build tool moderno e rápido para desenvolvimento frontend.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
* **Tailwind CSS:** Framework CSS utility-first para estilização rápida e customizável.
* **shadcn/ui:** Coleção de componentes de UI reutilizáveis e acessíveis, construídos sobre Tailwind CSS e Radix UI.
* **React Router DOM v6:** Para gerenciamento de rotas.
* **React Query (TanStack Query):** Para gerenciamento de estado de servidor, caching, e sincronização de dados.
* **Axios:** Cliente HTTP para realizar requisições à API.
* **Zod:** Para validação de schemas e tipagem de dados (usado em `env.ts` para variáveis de ambiente).
* **ESLint e Prettier:** Para linting e formatação de código, garantindo consistência e qualidade.
* **Vitest e Playwright:** Para testes unitários, de integração e end-to-end.
* **MSW (Mock Service Worker):** Para mocking de APIs durante o desenvolvimento e testes.
* **Rollup Plugin Visualizer:** Para analisar o tamanho do bundle da aplicação.

## 🚀 Como Usar

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

* Node.js (versão recomendada no `.nvmrc` ou a mais recente LTS)
* PNPM (gerenciador de pacotes recomendado para este projeto)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    cd setup-react
    ```
2.  Instale as dependências com PNPM:
    ```bash
    pnpm install
    ```
   

### Variáveis de Ambiente

1.  Crie um arquivo `.env` na raiz do projeto, baseado no `.env.example` (se existir) ou seguindo as definições em `src/env.ts`.
    Exemplo de `.env`:
    ```env
    VITE_API_URL=http://localhost:3000/api
    VITE_ENABLE_API_DELAY=true
    ```

### Rodando o Projeto

* **Desenvolvimento:** Para iniciar o servidor de desenvolvimento com Vite:
    ```bash
    pnpm dev
    ```
   
    O servidor geralmente estará disponível em `http://localhost:5173` (verifique a saída do console).

* **Desenvolvimento para Testes E2E (Playwright):**
    ```bash
    pnpm dev:test
    ```
   
    Este comando inicia o servidor em uma porta específica (`50789` por padrão) e no modo `test`, que pode ter configurações diferentes (ex: mocks específicos para testes).

### Build

* Para gerar a build de produção:
    ```bash
    pnpm build
    ```
   
    Os arquivos da build serão gerados na pasta `dist/`. O comando também executa a verificação de tipos do TypeScript (`tsc -b`) antes do build do Vite.

### Linting

* Para verificar o código com ESLint:
    ```bash
    pnpm lint
    ```
   

### Testes

* **Testes com Vitest (Unitários/Integração):**
    ```bash
    pnpm test
    ```
   
    A configuração dos testes com Vitest pode ser encontrada em `vite.config.ts` e o setup em `test/setup.ts`.

* **Testes End-to-End com Playwright:**
    Configure o Playwright (se ainda não estiver configurado) e execute os testes conforme a documentação do Playwright. A configuração base está em `playwright.config.ts`.

### Análise do Bundle

Após realizar o `pnpm build`, um relatório de visualização do bundle chamado `bundle-report.html` será gerado na raiz do projeto, permitindo analisar o tamanho e composição dos chunks da aplicação.

## 🛠️ Estrutura de Componentes (shadcn/ui)

Os componentes de UI são gerenciados através da CLI do `shadcn/ui`. A configuração para o `shadcn/ui` pode ser encontrada no arquivo `components.json`.

* **Configuração Tailwind:** `tailwind.config.js`
* **CSS Base:** `src/shared/styles/index.css`
* **Cor Base:** Zinc
* **Variáveis CSS:** Habilitado
* **Aliases:**
    * `@/components`: (Não especificado no `tsconfig.json` fornecido, mas comum)
    * `@/lib/utils`: `src/shared/lib/utils.ts`
    * `@/ui`: `src/shared/components/ui`
    * `@/lib`: (Não especificado diretamente, mas `src/shared/lib` é usado)
    * `@/hooks`: (Não especificado diretamente, mas `src/shared/hooks` é usado)

Para adicionar novos componentes `shadcn/ui`:
```bash
pnpm dlx shadcn-ui@latest add <nome-do-componente>
