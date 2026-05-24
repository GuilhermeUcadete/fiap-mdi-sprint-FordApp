# Challenge Ford - FordApp

## Sobre o Projeto

Este aplicativo foi desenvolvido como parte da Challenge realizada pela FIAP e FORD, com o objetivo de criar uma solução mobile funcional e multiplataforma que entregue valor direto ao usuário final — seja um **analista interno da Ford** ou um **cliente da rede de concessionárias**.

A aplicação consome dados relevantes via APIs externas e apresenta uma interface clara e navegação intuitiva, demonstrando domínio dos principais conceitos de desenvolvimento mobile moderno.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| [React Native](https://reactnative.dev/) | Framework principal para desenvolvimento mobile |
| [Expo](https://expo.dev/) | Plataforma de build e desenvolvimento |
| [Expo Router](https://expo.github.io/router) | Navegação baseada em arquivos |
| JavaScript | Linguagem de desenvolvimento |

---

## Funcionalidades

- Interface intuitiva e responsiva
- Navegação com Expo Router
- Consumo de API externa assíncrona
- Gerenciamento de estado
- Notificações push 
- Armazenamento local
- Integração com sensores do dispositivo

---

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

### 4. Abra o aplicativo

- **Android/iOS físico:** escaneie o QR Code com o app Expo Go
- **Emulador Android:** pressione `a` no terminal
- **Simulador iOS:** pressione `i` no terminal

---

## Estrutura do Projeto

```
📦 FordApp/
├── assets/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── Loading.jsx
│   │   └── VehicleCard.jsx
│   ├── 📂 data/
│   │   └── vehicle.js
│   ├── 📂 routes/
│   │   └── AppRoutes.jsx
│   ├── 📂 screens/
│   │   ├── CompareScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   └── ResultScreen.jsx
│   ├── 📂 services/
│   │   └── api.js
│   └── 📂 storage/
│       └── history.js
├── App.js
├── app.json
├── index.js
├── package-lock.json
└── package.json
```

---

## Telas do Aplicativo

<img width="648" height="1280" alt="17796659171066042189210816841902" src="https://github.com/user-attachments/assets/129add9f-e240-4f05-9444-c01960149a69" />

<img width="591" height="1280" alt="17796659563596466821863834344832" src="https://github.com/user-attachments/assets/382f223e-ddff-475d-bea4-325f93495da8" />

<img width="591" height="1280" alt="17796660019463663039866534886358" src="https://github.com/user-attachments/assets/d9a471c7-d6a8-4cd1-916f-6eeb7ae14cd4" />

<img width="591" height="1280" alt="17796660525112103655948051686832" src="https://github.com/user-attachments/assets/8a9322e1-9258-410f-a741-1b773896e56c" />

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

## Licença

Este projeto foi desenvolvido para fins acadêmicos como parte de um desafio técnico proposto pela **FIAP** com parceria da empresa **FORD Motor Company**.
