import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

function SendEmailModal(props: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <p>hello</p>
          <div className="space-y-2">
            <div className="flex flex-row items-center gap-2">
              <div className="">
                <img src="/logos/csv_icon.svg" className="h-8" />
              </div>
              <span className="text-sm font-semibold">invoice_123445.csv</span>
              <span className="text-gray-400 text-sm font-semibold">1.4Kb</span>
            </div>
          </div>
        </div>
        <DialogFooter className="">
          <Button type="submit">Send Mail</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SendEmailModal;
