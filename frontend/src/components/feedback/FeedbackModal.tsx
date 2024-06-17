import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "@/store/features/auth/slice";
import { User } from "firebase/auth";

function FeedbackModal(props: { children: ReactNode }) {
  const user: User | null = useSelector(getUser);

  const [payload, setPayload] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    feedback: "",
  });

  return (
    <Dialog modal>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Give us your feedback or feature request</DialogTitle>
          <DialogDescription>
            We'd love to hear your thoughts! Please fill out the form below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={payload.name}
                placeholder="Enter your name"
                onChange={(e) => {
                  setPayload({
                    ...payload,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                onChange={(e) => {
                  setPayload({
                    ...payload,
                    email: e.target.value,
                  });
                }}
                value={payload.email}
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="feedback">Feedback or Feature Request</Label>
            <Textarea
              id="feedback"
              placeholder="Enter your feedback or feature request"
              className="min-h-[100px]"
              value={payload.feedback}
              onChange={(e) => {
                setPayload({
                  ...payload,
                  feedback: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FeedbackModal;
