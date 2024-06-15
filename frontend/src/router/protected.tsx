import Layout from "@/pages/protected/layout";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "etims",
        element: <div>etims Page</div>,
        index: true,
      },
      {
        path: "search",
        element: <div>search Page</div>,
        index: true,
      },
    ],
  },
  {
    path: "*",
    element: (
      <Navigate
        to={{
          pathname: "/etims",
        }}
      />
    ),
  },
]);

export default router;
