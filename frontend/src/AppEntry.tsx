import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn, loginUser, logoutUser } from "./store/features/auth/slice";
import publicRoutes from "./router/public";
import protectedRoutes from "./router/protected";
import { useAppDispatch } from "./store/store";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/screen/LoadingScreen";

function AppEntry() {
  const [loaded, setLoaded] = useState(false);

  const dispatch = useAppDispatch();

  const userIsLoggedIn = useSelector(isLoggedIn);

  const routes = userIsLoggedIn ? protectedRoutes : publicRoutes;

  useEffect(() => {
    const subscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          //   const uid = user.uid;

          dispatch(loginUser({ user: user }));
        } else {
          // User is signed out
          // ...
          dispatch(logoutUser());
        }

        setLoaded(true);
      },
      (err) => {
        console.log("done!!!");

        console.error(err);
      },
      () => {
        console.log("done!!!");
        // setLoaded(true);
      }
    );

    return () => {
      subscribe();
    };
  }, []);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default AppEntry;
