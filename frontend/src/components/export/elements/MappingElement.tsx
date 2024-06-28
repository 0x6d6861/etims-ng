import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Equal, XIcon } from "lucide-react";
import { AccountingSoftware, AccountingType, mappings } from "./type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function MappingElement(props: {
  software: AccountingSoftware;
  type: AccountingType;
}) {
  const mapping = mappings?.[props.software]?.[props.type] || {};
  const mapsTo = Object?.values(mapping)?.filter(Boolean) || [];
  return (
    <Tabs defaultValue="purchaces" className="w-full">
      <TabsList className="grid w-full grid-cols-2 hidden">
        <TabsTrigger value="purchaces">Purchases</TabsTrigger>
        <TabsTrigger disabled value="sales">
          Sales
        </TabsTrigger>
      </TabsList>
      <TabsContent value="purchaces">
        <Table className="w-full border border-gray-100">
          <TableHeader className="bg-gray-100">
            <TableRow className="">
              <TableHead>
                <span className="">{props.software}</span>
              </TableHead>
              <TableHead></TableHead>
              <TableHead>
                <span>eTims</span>
              </TableHead>
              <TableHead></TableHead>
              <TableHead>
                <span>Example</span>
              </TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(mapping).map(([field, map]) => {
              return (
                <TableRow className="border-none py-1">
                  <TableCell className="border-none py-1">
                    <Label>{field}</Label>
                  </TableCell>
                  <TableCell className="border-none py-1">
                    <ArrowRight className="h-4 w-4 stroke-gray-300" />
                  </TableCell>
                  <TableCell className="border-none py-1">
                    <Select defaultValue={map}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="---" />
                      </SelectTrigger>
                      <SelectContent>
                        {mapsTo.map((label) => {
                          return (
                            <SelectItem value={label} key={label}>
                              {label}
                            </SelectItem>
                          );
                        })}
                        <SelectItem value={"---"} key={`key-${"---"}`}>
                          ---
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="border-none py-1">
                    <Equal className="h-4 w-4 stroke-gray-300" />
                  </TableCell>
                  <TableCell className="border-none py-1">first row</TableCell>
                  <TableCell className="text-right py-1">
                    <Button
                      variant="ghost"
                      className="rounded-full"
                      type="button"
                      size="icon"
                    >
                      <XIcon className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="sales">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default MappingElement;
