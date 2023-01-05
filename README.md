# Estudo Regex
Projeto foi desenvolvido para compreender o funcionamento básico de **Regex**.
Este modelo valida os campos de:
* **Nome**: Só aceita letras maiúsculas, minúsculas e espaços além de letras com acento;
* **Email**: Só aceita o formato 'algumtexto' '@' 'algumtexto' '.' 'algumtexto' (obrigatório) '.algum texto' (opcional);
* **Telefone**: Só aceita dígitos no formato '00-00000-0000', validando também caso o usuário omite o hífen '-';
* **CPF**: Só aceita dígitos no formato '000.000.000-00', validando também caso o usuário omite o ponto '.' e o hífen '-'. Neste último exemplo, não foram verificados se o CPF é verdadeiro ou falso, apenas verifica sua estrutura.

**Observação**: Por segurança, o formulário deste projeto não envia os dados inseridos para algum lugar. Ao clicar em enviar, os dados são perdidos e apenas recirecionamos para uma nova página.



### Ferramentas de desenvolvimento

Para este exemplo, foram utulizados:

* [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
* [Bootstrap](https://getbootstrap.com)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
