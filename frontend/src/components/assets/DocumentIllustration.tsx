import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";
import { BadgeAlert, BadgeCheck } from "lucide-react";

function DocumentIllustration(props: { valid?: boolean }) {
  return (
    <div>
      <Card className="w-[250px] relative overflow-hidden transition transform hover:scale-105 hover:rotate-3 hover:shadow-lg">
        <CardHeader className="flex flex-col items-end space-x-4 bg-gray-50 pb-3">
          <Skeleton className="h-10 w-10 rounded-none" />
          <div className="space-y-1 flex flex-col items-end">
            <Skeleton className="h-2 w-[100px]" />
            <Skeleton className="h-1 w-[65px]" />
            <Skeleton className="h-1 w-[70px]" />
          </div>
        </CardHeader>
        <CardContent className="pt-3">
          <div className="text-xs text-gray-400 mb-2">INVOICE</div>
          <div className="flex flex-row gap-3 items-center">
            <div className="space-y-1 flex flex-col">
              <Skeleton className="h-1 w-[50px bg-gray-400" />
              <Skeleton className="h-1 w-[35px]" />
              <Skeleton className="h-1 w-[40px]" />
            </div>
            <div className="space-y-1 flex flex-col">
              <Skeleton className="h-1 w-[50px] bg-gray-400" />
              <Skeleton className="h-1 w-[35px]" />
              <Skeleton className="h-1 w-[40px]" />
            </div>
            <div className="flex-1 flex flex-row gap-2 justify-end">
              <Skeleton className="h-1 w-[30px] bg-gray-400" />
              <Skeleton className="h-1 w-[40px] bg-gray-400" />
            </div>
          </div>
        </CardContent>
        <CardContent className="flex flex-col gap-2">
          <Separator />
          <div className="flex flex-row items-start gap-4">
            <div className="flex-1 space-y-1">
              <Skeleton className="h-1 w-[25px] bg-gray-500" />
              <Skeleton className="h-1 w-[40px]" />
              <Skeleton className="h-1 w-[40px]" />
            </div>
            <div className="flex-1 space-y-1 flex flex-col items-end">
              <Skeleton className="h-1 w-[25px] bg-gray-500" />
              <Skeleton className="h-1 w-[20px]" />
              <Skeleton className="h-1 w-[20px]" />
            </div>
            <div className="flex-1 space-y-1 flex flex-col items-end">
              <Skeleton className="h-1 w-[25px] bg-gray-500" />
              <Skeleton className="h-1 w-[20px]" />
              <Skeleton className="h-1 w-[20px]" />
            </div>
            <div className="flex-1 space-y-1 flex flex-col items-end">
              <Skeleton className="h-1 w-[25px] bg-gray-500" />
              <Skeleton className="h-1 w-[30px]" />
              <Skeleton className="h-1 w-[30px]" />
            </div>
          </div>
          <Separator />
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="w-full flex flex-row gap-4">
            <div className="flex-1">
              <Skeleton className="h-1 w-[45px] bg-gray-500" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex flex-row justify-between gap-2">
                <Skeleton className="h-1 w-[25px] bg-gray-500" />
                <Skeleton className="h-1 w-[35px]" />
              </div>
              <div className="flex flex-row justify-between">
                <Skeleton className="h-1 w-[25px] bg-gray-500" />
                <Skeleton className="h-1 w-[35px]" />
              </div>
              <div className="flex flex-row justify-between">
                <Skeleton className="h-1 w-[25px] bg-gray-500" />
                <Skeleton className="h-1 w-[35px]" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 mt-4">
            <div className="flex flex-row justify-between">
              <Skeleton className="h-2 w-[45px] rounded-none" />
              <Skeleton className="h-2 w-[35px] rounded-none" />
            </div>
            <div>
              <Skeleton className="mx-auto h-1 w-[80%] rounded-none mt-2" />
            </div>
          </div>
        </CardFooter>
        {props?.valid ? (
          <BadgeCheck className="absolute w-14 h-14 top-[-12px] left-[-12px] fill-green-500 stroke-white drop-shadow-sm opacity-50" />
        ) : (
          <BadgeAlert className="absolute w-14 h-14 top-[-12px] left-[-12px] fill-red-200 stroke-white drop-shadow-sm opacity-50" />
        )}
      </Card>
    </div>
  );
}

export default DocumentIllustration;
