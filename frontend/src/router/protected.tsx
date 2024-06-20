import Layout from "@/pages/protected/layout";
import Verify from "@/pages/protected/etims/verify";
import Single from "@/pages/protected/etims/single";
import Search from "@/pages/protected/search/search";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "etims",
        element: <Outlet />,
        children: [
          {
            path: ":invoiceId/details",
            element: <Single />,
            index: true,
          },
          {
            path: "verify",
            element: <Verify />,
            index: true,
          },
        ],
      },
      {
        path: "search",
        element: <Search />,
        index: true,
      },
    ],
  },
  {
    path: "*",
    element: (
      <Navigate
        to={{
          pathname: "/etims/verify",
        }}
      />
    ),
  },
]);

export default router;
