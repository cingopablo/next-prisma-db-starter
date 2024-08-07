## NextJS, Prisma, SQLite Starter

First, create the schema of our app in `schema.prisma`:

Then, run the following command to create a db from that schema (also to keep the db in sync):
```
npm prisma db push
```

To check what we have in the db we can run
```
npx prisma studio
```