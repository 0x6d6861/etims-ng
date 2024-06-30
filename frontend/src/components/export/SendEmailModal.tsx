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
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";

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
          <div className="space-y-2">
            <div className="grid w-full items-center gap-1.5">
              {/* <Label htmlFor="email">Email</Label> */}
              <Input
                className="border-none shadow-none"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <Separator className="h1 border-gray-200" />
            <Input className="border-none shadow-none" placeholder="Subject" />
            <Separator className="h1 border-gray-200" />
            <Textarea
              rows={8}
              className="border-none shadow-none"
              placeholder="Type your message here."
            />
          </div>
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
