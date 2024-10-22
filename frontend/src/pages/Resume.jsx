import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const Resume = () => {
  const [uploadingResume, setUploadingResume] = useState("Idle");
  const [fileName, setFileName] = useState("");
  const [responseText, setResponseText] = useState("");
  const [file, setFiles] = useState();

  const uploadJD = async (files) => {
    try {
      const formData = new FormData();
      if (files) {
        formData.append("jobDescription", files);
      }
      const res = await axios.post(
        "http://localhost:8000/api/v1/resume/upload",
        formData
      );
      if (res) {
        console.log("file was sent successfully", res);
      }
      return res;
    } catch (error) {
      console.log("something wrong in uploadJD: ", error);
    } finally {
      console.log("setting loading false");
    }
  };

  const onFileInputChange = (event) => {
    console.log("hello world: ", event.target.files);
    const { files } = event.target;
    if (files) {
      setFiles(files[0]);
      uploadJD(files[0]).then((res) => {
        console.log("calling upload JD");
        console.log("Files uploaded succcess", res);
      });
    }
  };

  const handleFileSelect = (files) => {
    console.log("files: ", files[0]);
    setFiles(files[0]);
    uploadJD(files[0]).then((res) => {
      if (res && res.status === 200) {
        console.log("Uploaded successfullt");
      }
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file) return;
    console.log("files: ", file[0]);
    setFileName(file.name);
    setUploadingResume("Uploading");
    handleFileSelect(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="h-[calc(100%-50px)] relative w-full flex-1 flex flex-col max-w-[1440px] items-center">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-center text-3xl">Welcome to CareerScout.</h1>
        <h2>Please Upload your Resume for AI analysis</h2>
        <div
          {...getRootProps()}
          className={`border-dashed rounded-lg min-w-[30%] border-2 min-h-[200px] flex items-center justify-center relative ${
            uploadingResume === "Uploading" ? "bg-gray-100" : ""
          }`}
        >
          <input
            onChange={onFileInputChange}
            {...getInputProps()}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
          {isDragActive ? (
            <span>Drop your resume here...</span>
          ) : uploadingResume === "Uploading" ? (
            <span>Analyzing your file...</span>
          ) : (
            <span className="flex items-center justify-center h-full text-gray-500">
              Drag and drop your resume here or click to upload
            </span>
          )}
        </div>
        <p className="text-center text-gray-600">
          “Let our AI work its magic while you relax and sip your coffee!”
        </p>
        {uploadingResume === "Completed" && (
          <div className="flex flex-col items-center mt-4">
            <span className="text-green-500">
              {fileName} processed successfully!
            </span>
            <div className="text-left mt-2 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-bold">Extracted Text:</h3>
              <pre className="whitespace-pre-wrap">{responseText}</pre>
            </div>
          </div>
        )}
        {uploadingResume === "Error" && (
          <p className="text-red-500">
            There was an error processing your file.
          </p>
        )}
      </div>
    </div>
  );
};

export default Resume;
