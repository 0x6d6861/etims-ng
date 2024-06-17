import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

function search() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="min-h-[60vh] space-y-8 flex flex-col">
          <div>
            <div className="flex flex-row items-center gap-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Search business
              </h1>
              <Badge variant="default">12 businesses</Badge>
            </div>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Find a business by name or KRA PIN
            </p>
          </div>
          <div>
            <Card className="shadow-lg">
              <CardContent className="mt-6">
                <div className="mb-8 flex flex-row gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="name" />
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="kra" />
                    <label
                      htmlFor="kra"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      KRA PIN
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="product" />
                    <label
                      htmlFor="product"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      By Product
                    </label>
                  </div>
                </div>
                <Input className="h-12 text-lg" placeholder="Search ..." />
              </CardContent>
              <CardFooter>
                <Button className="mt-4">
                  Search <Search className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg">Search results</h4>
            <div>
              <p>search results come here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default search;
