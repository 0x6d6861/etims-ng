import Topbar from "@/components/Topbar";
import { Outlet } from "react-router-dom";

function layout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50">
      <Topbar />
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Outlet />
      </div>
    </div>
  );
}

export default layout;
