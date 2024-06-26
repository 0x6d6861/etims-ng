import { Button } from "@/components/ui/button";
import { AccountingSoftware, AccountingType, mappings } from "./type";
import SendEmailModal from "../SendEmailModal";

function ExportElement(props: {
  software?: AccountingSoftware | undefined;
  type?: AccountingType | undefined;
}) {
  const mapping =
    mappings?.[props.software as AccountingSoftware]?.[
      props.type as AccountingType
    ] || {};
  const mapsTo = Object?.values(mapping)?.filter(Boolean) || [];
  console.log(mapsTo);
  return (
    <div className="min-h-40 my-2 mt-8 rounded-md border bg-gray-50 border-gray-200 flex flex-col justify-center items-center gap-4">
      <SendEmailModal>
        <Button>Send To Email</Button>
      </SendEmailModal>
      <Button>Download CSV</Button>
    </div>
  );
}

export default ExportElement;
