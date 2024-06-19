import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/services/firebase";

// @ts-ignore
function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
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

const provider = new GoogleAuthProvider();

function LoginModal(props: { children: React.ReactNode }) {
  //   const dispatch = useAppDispatch();

  const processLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      //   const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      if (token) {
        // dispatch(setToken(token));
      }
    } catch (error) {
      // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // The email of the user's account used.
      //   const email = error.customData.email;
      // The AuthCredential type that was used.
      //   const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  return (
    <Dialog modal>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center justify-center gap-6 py-8">
          <div className="space-y-2 text-center">
            <div className="flex items-center gap-2">
              <MountainIcon className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Acme Inc</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to your account to continue.
            </p>
          </div>
          <Button
            variant="outline"
            className="w-full max-w-[300px]"
            onClick={processLoginWithGoogle}
          >
            <ChromeIcon className="h-5 w-5 mr-2" />
            Sign in with Google
          </Button>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            By signing in, you agree to our{" "}
            <Link to={"/terms"} className="underline underline-offset-2">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to={"/privacy"} className="underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
