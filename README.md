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

- [ ] Interface intuitiva e responsiva
- [ ] Navegação com Expo Router
- [ ] Consumo de API externa assíncrona
- [ ] Gerenciamento de estado
- [ ] Notificações push *(diferencial)*
- [ ] Armazenamento local *(diferencial)*
- [ ] Integração com sensores do dispositivo *(diferencial)*

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Aplicativo **Expo Go** no celular *(para testes físicos)*

---

## Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
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
📦 projeto/
├── 📂 app/               # Rotas e telas (Expo Router)
│   ├── (tabs)/           # Navegação por abas
│   ├── _layout.tsx       # Layout raiz
│   └── index.tsx         # Tela inicial
├── 📂 components/        # Componentes reutilizáveis
├── 📂 services/          # Integração com APIs
├── 📂 hooks/             # Custom hooks
├── 📂 constants/         # Constantes e configurações
├── 📂 assets/            # Imagens e fontes
└── app.json              # Configurações do Expo
```

---

## Integração com API

A aplicação consome dados de fontes externas via requisições assíncronas. As chamadas estão centralizadas na pasta `services/`, garantindo organização e fácil manutenção.

```javascript
// Exemplo de consumo de API
const fetchData = async () => {
  try {
    const response = await fetch('https://api.exemplo.com/dados');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};
```

---

## Equipe

| Nome | GitHub |
|---|---|
| Integrante 1 | [@usuario](https://github.com/usuario) |
| Integrante 2 | [@usuario](https://github.com/usuario) |
| Integrante 3 | [@usuario](https://github.com/usuario) |

---

## Licença

Este projeto foi desenvolvido para fins acadêmicos como parte de um desafio técnico proposto pela **FIAP** com parceria da empresa **FORD Motor Company**.
