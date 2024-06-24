import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { XIcon } from "lucide-react";

function MappingElement() {
  return (
    <Tabs defaultValue="purchaces">
      <TabsList>
        <TabsTrigger value="purchaces">Purchases</TabsTrigger>
        <TabsTrigger value="sales">Sales</TabsTrigger>
      </TabsList>
      <TabsContent value="purchaces">
        <table className="w-full">
          <tbody>
            <tr>
              <td>field</td>
              <td>map</td>
              <td>first row</td>
              <td className="text-right">
                <Button variant="ghost" size="icon">
                  <XIcon className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </TabsContent>
      <TabsContent value="sales">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default MappingElement;
