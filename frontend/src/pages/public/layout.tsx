import Topbar from "@/components/Topbar";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Outlet } from "react-router-dom";
// import { GeistMono } from "geist/font/mono";
// import { GeistSans } from "geist/font/sans";

function layout() {
  return (
    <div
      className={`relative flex min-h-screen flex-col bg-background overflow-hidden`}
    >
      <Topbar />
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Outlet />
      </div>
      <div className="container mx-auto">
        <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
          <div>
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/heriagape/"
              target="_blank"
              className="font-bold transition hover:text-black/50"
            >
              Heri Agape
            </a>{" "}
            (heri@heri.co)
          </div>
          <div className="flex space-x-4 pb-4 sm:pb-0">
            <a
              className="group"
              target="_blank"
              aria-label="Heri Agape on LinkedIn"
              href="https://www.linkedin.com/in/heriagape/"
            >
              <LinkedInLogoIcon className="h-4 w-4" />
            </a>
            <a
              className="group"
              target="_blank"
              aria-label="Heri Agape on GitHub"
              href="https://github.com/0x6d6861"
            >
              <GitHubLogoIcon className="h-4 w-4" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default layout;
