// PRISMA ORM -

// To setup Prisma -
// 1. npm i prisma -D or npm i prisma --save-dev -> This will give us the Prisma CLI
// 2. npm i @prisma/client -> This will allow us to access the prisma DB.
// 3. npx prisma init -> This will initialize prisma db for us.

// Creating the Model and Configure DB in schema.prisma file

// To create a new table in Prisma we need to first migrate the DB
// - npx prisma generate
// - npx prisma migrate dev --name init --create-only
// - npx prisma migrate deploy

// After creating the Model and Setting up the DB, we can see the prisma GUI using
// - npx prisma studio

// To Generate model definition again after modifying the model -
// - npx prisma generate
// - npx prisma migrate dev
