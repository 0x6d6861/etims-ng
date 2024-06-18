import DocumentIllustration from "@/components/assets/DocumentIllustration";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function home() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="min-h-[60vh] space-y-8 flex flex-col">
          <div className="space-y-8">
            <h1 className="text-center mx-auto max-w-3xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-6xl">
              Verify & Validate all your{" "}
              <span className="relative whitespace-nowrap text-red-600">
                <span className="z-10">eTims</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="z-1 absolute top-2/3 left-0 h-[0.58em] w-full fill-red-400/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
              </span>{" "}
              documents with ease!
            </h1>
            <p className="text-center mt-4 text-2xl text-gray-400 dark:text-gray-300">
              Export your validated eTims data to formats compatible with
              various accounting software, ensuring seamless integration with
              your financial systems.
            </p>
            <div className="flex flex-col items-center">
              <span className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
                uploaded <span className="font-semibold">2, 345, 453</span>{" "}
                eTims and counting
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center">
              <div className="cursor-pointer rotate-6">
                <DocumentIllustration valid={false} />
              </div>
              <div className="cursor-pointer ml-[-6rem]">
                <DocumentIllustration valid={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-none row-span-2 col-span-2">
              <CardHeader>
                <CardTitle>Document Upload and Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Easily upload government documents such as tax invoices,
                  business permits, and other official records for verification.
                  Our advanced system ensures authenticity and integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none row-span-1 col-span-2">
              <CardHeader>
                <CardTitle>Search by KRA PIN</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quickly locate businesses using their Kenya Revenue Authority
                  (KRA) Personal Identification Number (PIN) and access detailed
                  information about registered businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none row-span-1 col-span-2">
              <CardHeader>
                <CardTitle>Search by Business Name</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Find businesses by entering their registered name. Get
                  insights into business operations, contact details, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none row-span-1 col-span-2">
              <CardHeader>
                <CardTitle>Search by Product</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover businesses based on the products they sell. Connect
                  with suppliers, service providers, and more within your
                  industry.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none row-span-1 col-span-2">
              <CardHeader>
                <CardTitle>Export to Accounting Software</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Save time and reduce errors by exporting verified document
                  data to formats compatible with popular accounting software.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="space-y-8 mt-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            FAQs
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

export default home;
