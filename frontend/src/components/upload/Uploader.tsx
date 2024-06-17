import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";

// @ts-ignore
function CloudUploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  );
}

// @ts-ignore
function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

// @ts-ignore
function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function Uploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files

    // @ts-ignore
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    });

  const files = acceptedFiles.map((file) => (
    <li
      className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-md dark:bg-gray-700"
      key={file.name}
    >
      <div className="flex items-center space-x-2">
        <FileIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <p className="text-gray-700 dark:text-gray-300">
          {file.name} - {file.size} bytes
        </p>
      </div>
      <Button variant="ghost" size="sm">
        <XIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </Button>
    </li>
  ));

  return (
    <>
      <div
        {...getRootProps({
          className:
            "cursor-pointer hover:bg-gray-100 bg-gray-50 flex flex-col item-center text-center justify-center px-6 pt-5 pb-6 border-2 hover:border-gray-400 border-gray-300 border-dashed rounded-md",
        })}
      >
        <CloudUploadIcon className="mx-auto w-12 h-12 mb-2 text-gray-500 dark:text-gray-400" />
        <div className="flex justify-center text-center text-sm text-gray-600 dark:text-gray-400">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <input
              {...getInputProps()}
              id="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
          {isDragActive ? (
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Drop the files here ...
            </p>
          ) : (
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Drag 'n' drop some files here, or click to select files
            </p>
          )}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          PDF up to 5MB
        </p>
      </div>

      {acceptedFiles.length > 0 && (
        <aside className="mt-2">
          <ul className="space-y-2">{files}</ul>
        </aside>
      )}
    </>
  );
}

export default Uploader;
