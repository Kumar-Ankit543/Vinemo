import { Button } from "@repo/ui";
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui";
import Link from "next/link";
import { BadgeIndianRupee } from "lucide-react";

interface AppBarProps {
  user?: {
    name?: string | null;
  };
  onSignin: any;
  onSignout: any;
}

export const AppBar = ({ user, onSignin, onSignout }: AppBarProps) => {
  return (
    <div className="border-b px-4">
      <header className="flex justify-between px-4 lg:px-6 h-12 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <BadgeIndianRupee className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-blue-600">Venmo</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {user ? (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <div></div>
          )}
          <Button
            variant={"navButton"}
            size={"sm"}
            onClick={user ? onSignout : onSignin}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </nav>
      </header>
    </div>
  );
};
