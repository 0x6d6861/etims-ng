import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../pages/public/layout";
import HomePage from "../pages/public/home";
import PrivacyPage from "../pages/public/privacy";
import TermsPage from "../pages/public/service";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "",
        element: <HomePage />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
    ],
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
