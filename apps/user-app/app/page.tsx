import { Button } from "@repo/ui/button";
import { PrismaClient } from "@repo/db/client";

const prisma = new PrismaClient();

export default function Home() {
  return (
    <div>
      <div className="text-2xl">hi there...</div>
      <Button className="text-3xl" appName="btn">
        Hello
      </Button>
    </div>
  );
}
