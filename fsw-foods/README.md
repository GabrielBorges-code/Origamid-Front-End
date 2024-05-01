## Para iniciar o projeto

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## CONFIGURAR O .env PARA SE CONECTAR AO BANCO DE DADOS

## configurações iniciais do banco

```bash
# fazer a migração do banco de dados para contruír o schema
npx prisma migrate dev --name init_database

# para popular o banco com dados
npx prisma db seed
```