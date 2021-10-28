## Instruções

1. Faça um fork do repositório na sua conta do GitHub
2. Crie uma branch, preferencialmente utilizando as práticas do conventional commits
3. Depois de concluir o desafio, abra um pull-request contra a main (do seu fork) com a descrição do que foi feito, como foi feito e como testar a nova funcionalidade
4. Receberemos uma notificação quando o pull-request for aberto, faremos a avaliação da solução, e entraremos em contato

## Requisitos

- React
- TypeScript
- Componentes funcionais
- React Router
- Hooks
- Redux Toolkit
- Jest
- React Testing Library
- Consumo da seguinte API RESTful: https://rickandmortyapi.com/api/character
- Listagem dos dados em uma nova rota
- TDD de todas as novas implementações

## O que é permitido

- SCSS
- Linters
- Formatadores
- Bibliotecas de memoize, como o Reselect
- Bibliotecas HTTP, como o Axios
- Utilização de IDEs ou editores de texto de sua preferência, como o VS Code

## O que não é permitido

- Frameworks adicionais, como Bootstrap, Chakra UI, Materialize, etc
- Bibliotecas que em geral abstraiam os principais conceitos utilizados
- Reutilização de códigos de outras pessoas

## A feature a ser desenvolvida

- Você precisará implementar um novo reducer na store do Redux, o qual será responsável por armazenar o estado da resposta do GET no endpoint `/character` da API

- Crie um seletor memoizado que se retorne o estado armazenado

- Consuma esse estado dentro de um página cuja rota tenha o nome de `/personagens`, e, para cada personagem, exiba seu nome, gênero, status e foto, de acordo com o protótipo do [Figma](https://www.google.com)
