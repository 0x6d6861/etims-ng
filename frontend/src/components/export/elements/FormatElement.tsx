import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const choices = [
  { id: "quickbooks", label: "Quickbooks", icon: "quickbooks" },
  { id: "sage", label: "Sage Accounting", icon: "sage" },
  { id: "odoo", label: "Odoo", icon: "odoo" },
  { id: "zoho", label: "Zoho", icon: "zoho" },
  { id: "salesforce", label: "Salesforce", icon: "salesforce" },
  { id: "custom", label: "Custom Format" },
];

function FormatElement() {
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      defaultValue="custom"
      size={"lg"}
      className="grid grid-cols-3 items-stretch gap-4"
    >
      {choices.map((choice) => (
        <ToggleGroupItem
          value={choice.id}
          id={choice.id}
          aria-label={choice.label}
          className="py-4 px-4 h-auto"
        >
          {choice.icon ? (
            <img
              src={`/logos/${choice.icon}.svg`}
              alt={choice.label}
              className="h-12"
            />
          ) : (
            <span>{choice.label}</span>
          )}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export default FormatElement;
