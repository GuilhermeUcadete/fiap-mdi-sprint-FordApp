# Challenge Ford - FordApp

## Sobre o Projeto

Este aplicativo foi desenvolvido como parte da Challenge realizada pela FIAP e FORD, com o objetivo de criar uma solução mobile funcional e multiplataforma que entregue valor direto ao usuário final — seja um **analista interno da Ford** ou um **cliente da rede de concessionárias**.

A aplicação consome dados relevantes via APIs externas e apresenta uma interface clara e navegação intuitiva, demonstrando domínio dos principais conceitos de desenvolvimento mobile moderno.

---
## Equipe

| Nome | RM | GitHub | 
|---|---|---|
| Guilherme Ulacco | RM558418 | [@GuilhermeUcadete](https://github.com/GuilhermeUcadete) |
| Eduardo da Silva | RM554804 | [@Eduardo-25](https://github.com/Eduardo-25) |
| Enzo Motta | RM555372 | [@Enzo-B-Motta](https://github.com/Enzo-B-Motta) |
| Estevam Melo | RM555124 | [@StkStevens](https://github.com/StkStevens) |
| Matheus Hostim | RM556517 | [@MatheusHostim](https://github.com/MatheusHostim) |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| [React Native](https://reactnative.dev/) | Framework principal para desenvolvimento mobile |
| [Expo](https://expo.dev/) | Plataforma de build e desenvolvimento |
| [Expo Router](https://expo.github.io/router) | Navegação baseada em arquivos |
| JavaScript | Linguagem de desenvolvimento |

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Aplicativo **Expo Go** no celular *(para testes físicos)*

---

## Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/GuilhermeUcadete/FordApp.git
```

### 2. Instale o expo

```bash
npm install expo
```

### 3. Inicie o projeto

```bash
npx expo start
```

### 3.1. Caso o projeto não abra

```bash
npx expo start --clear
```

### 3.2. Se o erro persistir 

```bash
nox expo start --tunnel
```

### 4. Abra o aplicativo

- **Android/iOS físico:** escaneie o QR Code com o app Expo Go
- **Emulador Android:** pressione `a` no terminal
- **Simulador iOS:** pressione `i` no terminal

---

## Telas do Aplicativo

<img width="648" height="1280" alt="17796659171066042189210816841902" src="https://github.com/user-attachments/assets/129add9f-e240-4f05-9444-c01960149a69" />

<img width="591" height="1280" alt="17796659563596466821863834344832" src="https://github.com/user-attachments/assets/382f223e-ddff-475d-bea4-325f93495da8" />

<img width="591" height="1280" alt="17796660019463663039866534886358" src="https://github.com/user-attachments/assets/d9a471c7-d6a8-4cd1-916f-6eeb7ae14cd4" />

<img width="591" height="1280" alt="17796660525112103655948051686832" src="https://github.com/user-attachments/assets/8a9322e1-9258-410f-a741-1b773896e56c" />

---

## ⚙️ Decisões Técnicas
 
### Stack Escolhida e Justificativa
 
| Tecnologia | Motivo da Escolha |
|---|---|
| **React Native** | Permite desenvolver para iOS e Android com uma única base de código em JavaScript, reduzindo tempo e complexidade de desenvolvimento |
| **Expo** | Abstrai configurações nativas complexas, oferece ferramentas de build e facilita o teste em dispositivos físicos via Expo Go sem necessidade de Xcode ou Android Studio |
| **Expo Router** | Navegação baseada em sistema de arquivos (file-based routing), tornando a estrutura de rotas mais intuitiva e próxima do padrão web moderno |
| **JavaScript** | Linguagem amplamente conhecida pela equipe, com vasto ecossistema de bibliotecas compatíveis com React Native e Expo |
 
A combinação React Native + Expo foi escolhida por ser a stack trabalhada em aula e por entregar o melhor custo-benefício para um projeto multiplataforma acadêmico: curva de aprendizado menor, ambiente de desenvolvimento rápido e compatibilidade com os requisitos do desafio.
 
---
 
### Como o Projeto Foi Estruturado
 
O projeto segue uma arquitetura modular com separação clara de responsabilidades, organizada dentro da pasta `src/`:
 
```
📦 FordApp/
├── 📂 src/
│   ├── 📂 components/   # Componentes reutilizáveis de UI (ex: VehicleCard, Loading)
│   ├── 📂 data/         # Dados estáticos e datasets simulados (ex: vehicle.js)
│   ├── 📂 routes/       # Configuração das rotas do app (AppRoutes.jsx)
│   ├── 📂 screens/      # Telas principais da aplicação
│   ├── 📂 services/     # Camada de comunicação com APIs externas (api.js)
│   └── 📂 storage/      # Gerenciamento de armazenamento local (history.js)
└── App.js               # Ponto de entrada da aplicação
```
 
Essa estrutura segue o padrão de separação entre **apresentação** (components/screens), **lógica de negócio** (services) e **dados** (data/storage), facilitando a manutenção e escalabilidade do projeto.
 
---
 
### Integrações Realizadas
 
#### API Externa
A comunicação com serviços externos é centralizada no arquivo `src/services/api.js`, utilizando o `fetch` nativo do JavaScript para realizar requisições HTTP assíncronas. O padrão `async/await` foi adotado para melhor legibilidade e controle de erros.
 
#### Armazenamento Local
O histórico de ações do usuário é persistido localmente via `src/storage/history.js`, utilizando `AsyncStorage` do Expo — uma solução de chave-valor assíncrona para dados persistentes no dispositivo.
 
#### Dados Simulados
Para garantir funcionamento mesmo sem conexão ativa, o arquivo `src/data/vehicle.js` fornece um dataset local de veículos, servindo como fallback e para prototipagem das telas.
 
---
 
### Decisões de Arquitetura Relevantes
 
**Separação entre dados e apresentação**
A camada `services/` isola toda a lógica de comunicação com APIs, evitando que as telas (screens) realizem chamadas diretas. Isso permite trocar ou mockar a fonte de dados sem alterar a interface.
 
**Componentização**
Elementos de UI reutilizados em múltiplas telas, como o `VehicleCard` e o `Loading`, foram extraídos para `components/`, promovendo reuso e consistência visual em toda a aplicação.
 
**Roteamento centralizado**
A navegação é gerenciada pelo `AppRoutes.jsx` em conjunto com o Expo Router, mantendo o fluxo de telas declarativo e fácil de expandir conforme novas funcionalidades forem adicionadas.
 
**Histórico persistente**
A decisão de persistir o histórico localmente (em vez de apenas em memória) garante que o usuário não perca o contexto de uso ao fechar e reabrir o aplicativo, melhorando a experiência geral.
 


