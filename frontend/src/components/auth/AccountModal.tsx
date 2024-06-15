import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { getUser } from "@/store/features/auth/slice";
import { signOut, User } from "firebase/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/services/firebase";

function AccountModal(props: { children: React.ReactNode }) {
  const user: User = useSelector(getUser);

  const processSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog modal>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center justify-center gap-6 py-8">
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <Avatar className="w-20 h-20">
                <AvatarImage src={user.photoURL as string} />
                <AvatarFallback>
                  {user.displayName?.split(" ")?.[0]}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="grid gap-1">
              <div className="font-medium">{user.displayName}</div>
              <div className="text-gray-500 dark:text-gray-400">
                {user.email}
              </div>
            </div>
          </div>
          <div className="grid gap-4 w-full max-w-[300px]">
            <Button variant="outline">Profile</Button>
            <Button variant="outline">Billing</Button>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="ghost"
            className="w-full text-destructive"
            onClick={processSignOut}
          >
            Sign Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AccountModal;
