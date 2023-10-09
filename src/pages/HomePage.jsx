import pdf from "../assets/imgs/pdf_vector.png";
import csv from "../assets/imgs/csv_vector.png";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import vector1 from "../assets/imgs/pdf-summarise-vector-bg.png"
import vector2 from "../assets/imgs/pdf-summarise-vector2.png"
import vector3 from "../assets/imgs/pdf-summarise-vector3.jpg"
function HomePage() {
  return (
    <div>
      {/* <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[100vh]  flex flex-col">  */}
      <div className="relative w-full align-center justify-center bg-gradient-to-r from-[#071952] from-10%  via-[#0052A2]   to-[#071952] to-90% h-[100vh]  flex flex-col">
        <h1 className="text-3xl md:text-5xl lg:text-6xl my-5 font-bold  text-white text-center justify-center self-center w-[70%]">
          Chat with your <span className="text-blue-500">Documents</span> , An amazing way to boost your productivity
        </h1>
        <h4 className="text-2xl font-normal  text-white text-center  m-2">
          Upload your document and interact with it.
        </h4>
        <p className="text-large text-white text-center">
          {" "}
          {/* Join a lot of people who use our services */}
        </p>
        <div className="gap-2 space-x-2 items-center flex justify-center w-full mx-auto my-6">
          <button className="bg-sky-100 rounded py-2 px-4 self-center flex gap-2">
            <span className="material-symbols-outlined">upload</span>
            <Link to="upload">
              <p className="text-bold text-slate-800">UPLOAD DOCUMENT</p>
            </Link>
          </button>
          <button className="bg-sky-100 text-slate-800 text-bold rounded py-2 px-4">Conversation</button>
        </div>
      </div>
      <div className="h-60 w-70 absolute left-3 top-[60%] overflow-hidden rounded-full">
        <img className="h-full w-full" src={vector1} alt="hero" />
      </div>
      <div className="h-60 w-70 absolute right-3 top-[60%] overflow-hidden rounded-full">
        <img className="h-full w-full" src={vector2} alt="hero" />
      </div>

      <div className="w-full bg-white h-auto p-5 px-20">
        
        <div className="main-content flex flex-col ">
          {/* <div className="upper-wrapper flex">
            <div className="left-section">
              <div className="icon-start">
                {" "}
                <span className="material-symbols-outlined">chat_bubble</span>
              </div>
              <div>
                <h3>Start your first Conversation</h3>
                <p>
                  Begin a conversation with me by uploading a document. I will
                  respond with anything you need based in the document
                </p>
              </div>
            </div>
            <div className="right-section">
              <button>Start Conversation</button>
            </div>
          </div> */}
          <hr></hr>
          <div className="lower-wrapper flex flex-col sm:flex-row w-full justify-between">
            <div className="left-section p-2">
              <h3 className="text-2xl text-bold my-2 ">Getting Started</h3>
              <p className="text-slate-800">Short guides to get you started</p>
              <div className="youtube my-2 roundend overflow-hidden w-[100vh] h-[40vh] bg-blue-300">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Lh-1t87ftqg"
                  title="How To Upload A PDF To ChatGPT Using AskYourPDF ChatGPT Plugin?"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullscreen
                ></iframe>
              </div>
              
            </div>
            <div className="right-section  p-2 px-5 w-[40%] flex flex-col gap-4 align-center justify-center">
              <FAQ
                head="What is this Application About?"
                text="This application lets you chat with any document you upload"
              />
              <FAQ
                head="What is this Application About?"
                text="This application lets you chat with any document you upload"
              />
              <FAQ
                head="What is this Application About?"
                text="This application lets you chat with any document you upload"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-auto p-5 px-20 flex">
        
        <div className="h-50 w-50 overflow-hidden ">
        <img className="contain h-30 w-30 conta= fill" src={vector3} alt="hero" />
        </div>
        <h3 className="text-bold text-xl uppercase my-3 mb-5 text-center">
          {" "}
          Supported Formats
        </h3>
        <div className="flex gap-3">
          <div>
            <img className="w-19 h-20" src={pdf} alt="pdf" />
          </div>
          <div>
            <img className="w-20 h-20" src={csv} alt="pdf" />
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-white h-auto p-5 px-20">
        <div className="flex gap-3 justify-between">
          <div className="">
            Artemis Docs
            <p>Enhance your productivity by using our services.</p>
            <p>On step away from efficiency</p>
          </div>
          <div>Quick links</div>
          <div>Talk To us</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
