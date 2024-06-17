import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Uploader from "@/components/upload/Uploader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function verify() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="min-h-[60vh] space-y-8 flex flex-col">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Upload eTims Document
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Verify legitimacy of your eTims document, use the output with your
              favorite accounting software.
            </p>
          </div>
          <div>
            <Card className="shadow-lg">
              <CardContent className="mt-6">
                <Uploader />
              </CardContent>
              <CardFooter>
                <Button className="mt-4">
                  Process <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Recently Uploaded Documents
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className="group relative">
              <Card className="shadow-none border hover:shadow-lg">
                <CardHeader>
                  <CardTitle>PowWater LTD</CardTitle>
                  <CardDescription>KRA: 1343546</CardDescription>
                  <div className="font-semibold text-sm">Invoice #3102</div>
                </CardHeader>
                <CardContent>
                  {/* <p className="">2 Items</p> */}
                  <h1 className="text-2xl font-semibold">KES 234.65</h1>
                  <p className="text-xs text-muted-foreground">
                    May 22nd, 2024
                  </p>
                </CardContent>
              </Card>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  <span aria-hidden="true" className="absolute inset-0" />
                  W-2 Form
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Uploaded: 2023-04-15
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full h-56 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src="/placeholder.svg"
                  alt="Document thumbnail"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  <span aria-hidden="true" className="absolute inset-0" />
                  W-2 Form
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Uploaded: 2023-04-15
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full h-56 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src="/placeholder.svg"
                  alt="Document thumbnail"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  <span aria-hidden="true" className="absolute inset-0" />
                  1099 Form
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Uploaded: 2023-04-10
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full h-56 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src="/placeholder.svg"
                  alt="Document thumbnail"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Tax Return
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Uploaded: 2023-04-05
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            FAQ
          </h2>
          <div className="mt-6 space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  What types of tax documents can I upload?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  You can upload PDF, JPG, or PNG files up to 10MB in size.
                  Common tax documents include W-2 forms, 1099 forms, and tax
                  returns.
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  How long does the verification process take?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  We aim to verify your documents within 3-5 business days. You
                  will receive an email notification once the verification is
                  complete.
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  What happens if my documents are not accepted?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  If your documents are not accepted, you will receive an email
                  explaining the reason. You can then upload updated documents
                  and resubmit for verification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default verify;
