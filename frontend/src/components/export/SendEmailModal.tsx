import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { invoiceData } from "@/components/export/elements/type";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { useSelector } from "react-redux";
import { getUser } from "@/store/features/auth/slice";
import { User } from "firebase/auth";
import { Label } from "../ui/label";
import { Tag, TagInput } from "emblor";

function SendEmailModal(props: { children: React.ReactNode }) {
  const user: User = useSelector(getUser);
  const [email, setEmail] = useState<string>();
  const [subject, setSubject] = useState<string>();
  const [constent, setContent] = useState<string>();

  const [emails, setEmails] = useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  useEffect(() => {
    if (user) {
      setEmails([
        {
          id: String(Date.now()),
          text: user.email as string,
        },
      ]);
      setSubject(
        `Invoice #${invoiceData.scuInfo["Invoice Number"]} from ${invoiceData.customerDetails.name}`
      );
      setContent(`Hi ${user.displayName?.split(" ")[0]}!\n
This is your invoice for ${
        invoiceData.scuInfo["Invoice Number"]
      } in Quickbooks format.\n
Please find the attached invoice.\n
Thank you,\n
eTims Team`);
    }
  }, [user]);

  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="max-w-2xl px-0">
        <DialogHeader className="px-6">
          <DialogTitle>Send via email</DialogTitle>
          <DialogDescription>
            This will send an email to {email} with the attached invoice.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="space-y-2 px-6">
            <div className="flex flex-row w-full items-center gap-1.5">
              <Label
                className="bg-gray-100 border-b-2 px-3 py-1 rounded-lg"
                htmlFor="email"
              >
                Email
              </Label>

              <TagInput
                tags={emails}
                setTags={(newTags) => {
                  setEmails(newTags);
                }}
                placeholder="Add recepient"
                styleClasses={{
                  inlineTagsContainer:
                    "border-none shadow-none text-lg focus-visible:ring-0 px-0",
                  input: "border-none shadow-none focus-visible:ring-0",
                  tag: {
                    body: "flex items-center bg-transparent font-semibold",
                    closeButton: "text-red-500 hover:text-red-600",
                  },
                }}
                activeTagIndex={activeTagIndex}
                setActiveTagIndex={setActiveTagIndex}
                variant={"default"}
                shape={"pill"}
                // borderStyle={"none"}
              />
            </div>
            <div className="flex flex-row w-full items-center gap-1.5">
              <Label
                className="bg-gray-100 border-b-2 px-3 py-1 rounded-lg"
                htmlFor="subject"
              >
                Subject
              </Label>

              <Input
                onChange={(ev) => setSubject(ev.target.value)}
                value={subject}
                id="subject"
                className="border-none shadow-none text-md font-semibold focus-visible:ring-0 px-0"
                placeholder="Subject"
              />
            </div>
          </div>
          <Separator className="border-gray-100" />

          <div className="px-6">
            <Textarea
              onChange={(ev) => setContent(ev.target.value)}
              value={constent}
              rows={9}
              className="text-md border-none shadow-none focus-visible:ring-0 px-0"
              placeholder="Type your message here."
            />
          </div>
          <div className="space-y-2 px-6">
            <div className="flex flex-row items-center gap-2">
              <div className="">
                <img src="/logos/csv_icon.svg" className="h-8" />
              </div>
              <span className="text-sm font-semibold">invoice_123445.csv</span>
              <span className="text-gray-400 text-sm font-semibold">1.4Kb</span>
            </div>
          </div>
        </div>
        <DialogFooter className="px-6">
          <Button type="submit">Send Mail</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SendEmailModal;
