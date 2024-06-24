import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function MappingElement() {
  return (
    <Tabs defaultValue="purchaces">
      <TabsList>
        <TabsTrigger value="purchaces">Purchases</TabsTrigger>
        <TabsTrigger value="sales">Sales</TabsTrigger>
      </TabsList>
      <TabsContent value="purchaces">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="sales">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default MappingElement;
