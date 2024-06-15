import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import LoginModal from "./auth/LoginModal";
import { useSelector } from "react-redux";
import { getUser } from "@/store/features/auth/slice";
import AccountModal from "./auth/AccountModal";
import { User } from "firebase/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// @ts-ignore
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

// @ts-ignore
function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function Topbar() {
  const user: User | null = useSelector(getUser);

  return (
    <header className="bg-white shadow-sm dark:bg-gray-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <nav className="flex items-center gap-6">
          <Link to={"/"} className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              to={"/verify"}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Verify
            </Link>
            <Link
              to={"/verify"}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Search
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          {user && (
            <Button className="hidden md:inline-flex rounded-full">
              New Upload
            </Button>
          )}

          <Button variant={"outline"} className="rounded-full">
            Feedback
          </Button>

          {!user && (
            <LoginModal>
              <Button className="hidden md:inline-flex rounded-full">
                Login
              </Button>
            </LoginModal>
          )}

          {user && (
            <AccountModal>
              <Avatar className="w-8 h-8 cursor-pointer hover:shadow">
                <AvatarImage src={user.photoURL as string} />
                <AvatarFallback>
                  {user.displayName?.[0] as string}
                </AvatarFallback>
              </Avatar>
            </AccountModal>
          )}

          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
