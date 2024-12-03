import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export async function main() {
  const alice = await prisma.user.upsert({
    where: {
      number: "1111111111",
    },
    update: {},
    create: {
      number: "1111111111",
      email: "alice@gmail.com",
      name: "alice",
      password: await bcrypt.hash("alice", 10),
      Balance: {
        create: {
          amount: 200000,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          amount: 20000,
          status: "Success",
          token: "token__1",
          provider: "HDFC Bank",
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: {
      number: "2222222222",
    },
    update: {},
    create: {
      number: "2222222222",
      email: "bob@gmail.com",
      name: "bob",
      password: await bcrypt.hash("bob", 10),
      Balance: {
        create: {
          amount: 300000,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          amount: 30000,
          status: "Failure",
          token: "token__2",
          provider: "Axis Bank",
        },
      },
    },
  });
  console.log({ alice, bob });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
