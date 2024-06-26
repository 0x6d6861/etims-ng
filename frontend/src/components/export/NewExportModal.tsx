import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FormatElement from "./elements/FormatElement";
import MappingElement from "./elements/MappingElement";
import { AccountingSoftware } from "./elements/type";
import ExportElement from "./elements/ExportElement";

function NewExportModal(props: { children: React.ReactNode }) {
  const [software, setSoftwate] = useState<AccountingSoftware>();

  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Export Invoice</DialogTitle>
          <DialogDescription>
            Export invoice in the accounting format of your choice.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <FormatElement onChange={(e) => setSoftwate(e)} />
          {software === "custom" && (
            <>
              <MappingElement software={software} type="purchase" />
              {/* <PreviewElement software={software} type="purchase" /> */}
            </>
          )}
          {!!software && <ExportElement software={software} type="purchase" />}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default NewExportModal;
