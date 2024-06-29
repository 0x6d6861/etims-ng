import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { AccountingSoftware, choices } from "./type";

function FormatElement({
  onChange,
  defaultValue,
}: {
  onChange: (e: AccountingSoftware) => void;
  defaultValue?: string | undefined;
}) {
  return (
    <ToggleGroup
      onValueChange={onChange}
      type="single"
      variant="outline"
      defaultValue={defaultValue}
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
