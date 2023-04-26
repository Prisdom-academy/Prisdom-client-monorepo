<div style="text-align: center;">

![Prisdom img](images/Logo.png)

</div>

## Prisdom monorepos clientside architecture

1. Component-ui: a shared component library
2. Theme: prisdom theming system: [https://www.figma.com/files/team/1156515949250706142/Prisdom?fuid=903115735678343771]
3. prisdom application (@prisdom/app): our main app
4. prisdom landing and gateway (@prisdom/gateway): prisdom gateway

## Setup and referenced resource

1. Code styles setup: [ESlint and prettier](https://dev.to/monfernape/enforce-husky-pre-commit-with-eslint-prettier-in-monorepo-55jc)
2. Monorepos setup: [Setup monorepos ](https://jibin.tech/blog/monorepo-with-create-react-app/)
3. **@prisdom/app** state management using inversifyJS: [https://inversify.io/]
4. Theming using chakraUI: [https://chakra-ui.com/]

## How to run:

### Develop @prisdom/app (localhost:3000)

1. Dev application **(@prisdom/app)**: `yarn start-app`
2. Build application **(@prisdom/app)**: `yarn start-app`
3. Test application **(@prisdom/app)**: `yarn test-app`

### Develop @prisdom/gateway (localhost:3030)

1. Dev application **(@prisdom/gateway)**: `yarn dev-gw`
1. Build application **(@prisdom/gateway)**: `yarn build-gw`
