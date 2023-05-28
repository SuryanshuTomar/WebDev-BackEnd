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

// ---------------------------------------------------------------------------------------
// - Prisma Schema Example -

// Prisma client generator using the @prisma/client package
// generator client {
//    provider = "prisma-client-js"
// }

// Database connection information
// datasource db {
//    provider = "mysql"
//    url      = env("DATABASE_URL")
// }

// Creating a table in the DB using Prisma
// model User {
//    id         Int      @id @default(autoincrement())
//    id         String   @id @default(uuid())
//    firstName  String
//    lastName   String
//    age        Int
//    createdAt  DateTime @default(now())
//    updatedAt  DateTime @updatedAt
//    houseOwned House[]  @relation("HouseOwner")
//    houseBuilt House[]  @relation("HouseBuilder")
// }

// model House {
//    id           String  @id @default(uuid())
//    address      String  @unique
//    wifiPassword String? // optional column property

//    owner   User  @relation("HouseOwner", fields: [ownerId], references: [id])
//    ownerId String

//    builtBy   User  @relation("HouseBuilder", fields: [builtById], references: [id])
//    builtById String

//    createdAt DateTime @default(now())
//    updatedAt DateTime @updatedAt
// }

// -----------------------------------------------------------------------------------
// Two Ways of creating id in Prisma -
//    id         Int      @id @default(autoincrement())
//    id         String   @id @default(uuid())
