// import MainLayout from "../MainLayout";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

function UploadPage() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [databasePage, setDatabasePage] = useState(false);
  const [pdfPage, setPdfPage] = useState(false);
  const [csvPage, setCsvPage] = useState(false);

  const handleDbpage = ()=>{
    setDatabasePage(true)
    setCsvPage(false)
    setPdfPage(false)
  }
  const handlePdfpage = ()=>{
    setPdfPage(true)
    setDatabasePage(false)
    setCsvPage(false)
  }
  const handleCsvpage = ()=>{
    setCsvPage(true)
    setDatabasePage(false)
    setPdfPage(false)
  }

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/upload_text/",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            setUploadProgress(progress);
          },
        }
      );

      setUploadedFile(response.data);
      setUploadProgress(0); // Reset progress bar
    } catch (error) {
      console.error("Error uploading document:", error);
    }

 

    const simulateFileUpload = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setUploadedFile(file);
        }
      }, 200);
    };

    simulateFileUpload();
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: [".pdf", ".csv", ".doc", ".docx"], // You can specify the file types you want to accept
  });

  const [activeButton, setActiveButton] = useState("document-button");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="w-full h-full flex"> 
    <SideBar 
    onClickChat= {()=>{}}
    onClickDatabase= {handleDbpage}
    onClickCsv= {handleCsvpage}
    onClickPdf= {handlePdfpage}
    />  
   {databasePage ?(<div className="w-[80%] p-5 bg-slate-100 border-solid border-[1px] border-sky-200 h-full flex-col flex mx-auto my-[100px] self-center justify-center rounded">
   <div className="gap-3 flex flex-col justify-center items-center">
   <h3> Feature not yet Available</h3>
   <p>Sign up and be the first to know when it comes</p>
   <Link to="Signup"><p className="text-blue-500">Sign up</p></Link>
   </div>
  </div> ):( <div className="w-[80%] p-5 bg-slate-100 border-solid border-[1px] border-sky-200 h-full flex-col flex mx-auto my-[100px] self-center justify-center rounded">
   
    <div className="p-5 flex justify-between">
        
          <div className=" w-[40%] text-bold text-3xl">
            <h1>Upload Your Document</h1>
          </div>
        
        <div className=" w-[60%]  text-normal text-medium">
          <p className=" ">
            Begin a conversation with me by uploading a document. I will respond
            with anything you need based on the document
          </p>
        </div>
      </div>
      <hr className="border-solid border-[1px] border-sky-200"></hr>
      <div className="lower-wrapper upload-wrapper flex-col gap-1 flex">
        <div className="section1 ">
          <div className="flex gap-5 align-center justify-center rounded-full bg-white w-[290px] p-[3px] my-2">
            <button
              id="document-button"
              className={activeButton === "document-button" ? "active-btn bg-slate-400 p-1 ease-in " : ""}
              onClick={() => handleButtonClick("document-button")}
            >
              Upload Document
            </button>

            <button
              id="url-button"
              className={activeButton === "url-button" ? "active-btn bg-slate-400 p-1" : ""}
              onClick={() => handleButtonClick("url-button")}
            >
              {" "}
              Upload from URL
            </button>
          </div>
        </div>
        <div className="section-wrapper  h-[35%]">
          {activeButton === "document-button" && (
            <div className="section2 p-5 border-spacing-2 rounded-md bg-white border-solid border-[1px] border-sky-500 w-[60%] m-auto my-2 justify-center align-center flex flex-row cursor-pointer">
              <div {...getRootProps()} className="grid items-center ">
                <input {...getInputProps()} />
                {
                  <div>
                    <p style={{ textAlign: "center" }}>
                      <span className="material-symbols-outlined">
                        cloud_upload
                      </span>
                    </p>
                    <p>Drop file here.</p>
                  </div>
                }
              </div>
              {uploadProgress > 0 && (
                <div className=" h-1 w-[90%] bg-grey-100 roundend m-auto">
                  <div
                    className=" h-full bg-[#3498d roundened ease-linear]"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              )}
              {uploadedFile && (
                <div className="uploaded-file">
                  <p>
                    Uploaded Document: <strong>{uploadedFile.name}</strong>{" "}
                  </p>
                </div>
              )}
            </div>
          )}
          {activeButton === "url-button" && (
            <div className="section22 ">
              <div className="bar flex w-[90%]">
                <form id="url-form" className="flex my-3 w-full bg-white border-solid border-[1px] border-slate-600 gap-4 p-3 rounded mx-auto">
                  <p className="px-2 ">https://</p>
                  <hr></hr>
                  <input
                    type="text"
                    placeholder="www.artemisdocs.com"
                    name="document-url"
                    className="w-full outline-none"
                  />
                </form>
              </div>
              <div className="fetch-btn">
                <button className="text-white bg-black p-4 text-sm rounded-xl">Fetch Document</button>
              </div>
            </div>
          )}
        </div>

        <div className="section3">
          <div className="upper-wrapper flex justify-between">
            <div className="left-section">
              <div className='flex justify-between '>
                <p>
                  By starting a conversation you agree with our data privacy
                  policy and terms
                </p>
              </div>
            </div>
            <div className="right-section">
              <Link to="/conversation" style={{ textDecoration: "none" }}>
                <button className="text-white bg-black p-4 text-sm rounded-xl">Start Conversation</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>)}
    </div>
  );
}

export default UploadPage;
