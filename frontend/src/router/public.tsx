import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../pages/public/layout";
import HomePage from "../pages/public/home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [{ index: true, path: "", element: <HomePage /> }],
  },
  //   {
  //     path: "auth",
  //     element: <Layout />,
  //     children: [
  //       {
  //         index: true,
  //         path: "login",
  //         element: <LoginPage />,
  //       },
  //       {
  //         path: "*",
  //         element: (
  //           <Navigate
  //             to={{
  //               pathname: "login",
  //               // replace: true,
  //               //state: JSON.stringify({ redirect: true }),
  //               search: createSearchParams({
  //                 redirect: location.pathname,
  //               }).toString(),
  //             }}
  //           />
  //         ),
  //       },
  //     ],
  //   },
  {
    path: "*",
    element: (
      <Navigate
        to={{
          pathname: "",
        }}
      />
    ),
  },
]);

export default router;
