import { Button } from "@/components/ui/button";
import React from "react";

function ExportElement(props) {
  return (
    <div className="min-h-40 my-2 mt-8 rounded-md border bg-gray-50 border-gray-200 flex flex-col justify-center items-center gap-4">
      <Button>Send To Email</Button>
      <Button>Download CSV</Button>
    </div>
  );
}

export default ExportElement;
