// import MainLayout from "../MainLayout";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import "../assets/css/progress.css"
import ReadCSVPage from "./ReadCSVPage";

function UploadPage() {
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

  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [databasePage, setDatabasePage] = useState(false);
  const [pdfPage, setPdfPage] = useState(false);
  const [csvPage, setCsvPage] = useState(false);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          setUploadProgress(progress);
        },
      });

      setUploadedFile(response.data);
      setUploadProgress(0); // Reset progress bar
    } catch (error) {
      console.error('Error uploading document:', error);
    }
    
    // Simulate file upload with a setTimeout for demonstration
    // In a real application, you would use an API call to upload the file
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
    accept: ['.pdf', '.csv', '.doc', '.docx'],  // You can specify the file types you want to accept
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
  </div> ): csvPage?(<ReadCSVPage/>) :( <div className="w-[80%] p-5 bg-slate-100 border-solid border-[1px] border-sky-200 h-full flex-col flex mx-auto  self-center justify-center rounded">
   
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
              className={activeButton === "document-button" ? "active-btn bg-gray-300 p-1 ease-in " : ""}
              onClick={() => handleButtonClick("document-button")}
            >
              Upload Document
            </button>

            <button
              id="url-button"
              className={activeButton === "url-button" ? "active-btn bg-gray-300 p-1" : ""}
              onClick={() => handleButtonClick("url-button")}
            >
              Upload from URL
            </button>
          </div>
        </div>
        <div className="section-wrapper  h-[35%]">
        {activeButton === 'document-button' && (
    
          <div className="section2 p-5 border-spacing-2 rounded-md bg-white border-solid border-[1px] border-sky-500 w-[60%] m-auto my-2 justify-center align-center flex flex-col cursor-pointer">
          <div {...getRootProps()} className="dropzone grid items-center">
          <input {...getInputProps()} />
          {(uploadProgress == 0 || uploadProgress == 100) && (<div>
            <p style={{textAlign:"center"}}><span className="material-symbols-outlined text-gray-500">
        cloud_upload
        </span></p>
          <p className="text-gray-500">Drag & drop a PDF file here, or click to select one.</p>
          </div>
          )}
        </div>
        {(uploadProgress > 0 && uploadProgress < 99) && (
          <div className="w-full justify-center items-center">
          <p className="text-center  my-2">Loading...</p>
          <div className="progress-bar">
            <div
              className="progress h-2 w-full bg-blue-400 rounded-full "
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          </div>
        )}
        {(uploadProgress == 100) && (
          <div className="">
           <p className="text-xs">Upload Complete</p>
          </div>
        )}
        
          </div>
          
            )}
          {(uploadedFile && activeButton === 'document-button') &&(
            <div className="uploaded-file justify-center align-center bg-white self-start mx-auto py-2 rounded-full px-2 flex-row items-center w-[60%]">
              <p className="text-sm ">
                Uploaded Document: <strong >{uploadedFile.name}</strong>
              <span className="material-symbols-outlined text-red-600 text-sm items-center justify-center  ml-2">cancel</span>

              </p>


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

        <div className="section3 mt-6 ">
          <div className="upper-wrapper flex justify-between items-center h-[80%] justify-self-end">
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
