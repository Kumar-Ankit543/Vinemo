import { Button } from "@repo/ui/button";
import { PrismaClient } from "@repo/db/client";

const prisma = new PrismaClient();

export default function Home() {
  return (
    <div>
      <div className="text-2xl">hello from user app</div>
      <Button className="text-3xl" appName="btn">
        Hello
      </Button>
    </div>
  );
}
