import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn, loginUser, logoutUser } from "./store/features/auth/slice";
import publicRoutes from "./router/public";
import protectedRoutes from "./router/protected";
import { useAppDispatch } from "./store/store";

function AppEntry() {
  const dispatch = useAppDispatch();

  const userIsLoggedIn = useSelector(isLoggedIn);

  const routes = userIsLoggedIn ? protectedRoutes : publicRoutes;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      //   const uid = user.uid;

      dispatch(loginUser({ user: user }));
    } else {
      // User is signed out
      // ...
      dispatch(logoutUser());
      console.log("User is signed out");
    }
  });

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default AppEntry;
