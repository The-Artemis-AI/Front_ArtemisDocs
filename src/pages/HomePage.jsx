import pdf from "../assets/imgs/pdf_vector.png";
import csv from "../assets/imgs/csv_vector.png";
import word from "../assets/imgs/word-vector.png";
import excel from "../assets/imgs/excel-vector.png";
import ppt from "../assets/imgs/ppt-vector1.png";
import url from "../assets/imgs/url-vector.png";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import vector1 from "../assets/imgs/pdf-summarise-vector-bg.png";
import vector2 from "../assets/imgs/pdf-summarise-vector2.png";
import vector3 from "../assets/imgs/pdf-summarise-vector3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function HomePage() {
  return (
    <div>
      {/* <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[100vh]  flex flex-col">  */}
      <div className="relative w-full align-center justify-center bg-gradient-to-r from-primary from-10%  via-[#0052A2]   to-[#071952] to-90% h-[100vh]  flex flex-col">
        <h1 className="text-3xl md:text-5xl lg:text-6xl my-5 font-bold  text-white text-center justify-center self-center w-[70%]">
          Chat with your <span className="text-blue-500">Documents</span> , An
          amazing way to boost your productivity
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
          <button className="bg-sky-100 text-slate-800 text-bold rounded py-2 px-4">
            Conversation
          </button>
        </div>
      </div>
      <div className="h-60 w-70 hidden md:block absolute left-3 top-[60%] overflow-hidden rounded-full">
        <img className="h-full w-full" src={vector1} alt="hero" />
      </div>
      <div className="h-60 w-70 hidden md:block absolute right-3 top-[60%] overflow-hidden rounded-full">
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
      <div className="supported-formats w-full bg-sky-400 h-auto p-5 px-20 block align-center md:flex  items-center justify-center py-8">
        <div className="h-50 w-50 overflow-hidden  w-full md:w-[50%] my-10 ">
          <h3 className="text-bold text-xl uppercase my-3 mb-5 text-center">
            {" "}
            Why Artemis Docs
          </h3>
          <p>
            {" "}
            ArtemisDocs offers an amazing AI experience with simplicity in mind.{" "}
          </p>
          <p>
            You can Upload files from either URL or your device and start
            receiving information about them instantly.{" "}
          </p>
          {/* <img className="contain h-[250px] w-30 conta= fill" src={vector3} alt="hero" /> */}
          <button className="bg-primary rounded py-2 px-4 self-center flex gap-2 my-3">
            <Link to="upload">
              <p className="text-bold text-sky-100">Get Started</p>
            </Link>
            <span className="material-symbols-outlined text-sky-100">
              navigate_next
            </span>
          </button>
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col items-center justify-center p-2 bg-white w-16 h-16 rounded-full">
            <img className="scale-50" src={pdf} alt="pdf" />
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-white w-16 h-16 rounded-full">
            <img className="scale-100" src={csv} alt="pdf" />
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-white w-16 h-16 rounded-full">
            <img className="scale-100" src={ppt} alt="pdf" />
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-white w-16 h-16 rounded-full">
            <img className="scale-100" src={word} alt="pdf" />
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-white w-16 h-16 rounded-full">
            <img className="scale-100" src={url} alt="pdf" />
          </div>
        </div>
      </div>
      <div className="services flex flex-col sm:flex-row flex-grow flex-wrap gap-3 justify-between  w-full bg-blue-200 text-black h-auto p-10 px-20">
        <div className="card h-auto border border-sky-200 bg-sky-700 rounded-md pd-3 md:w-[30%] relative py-10 px-10">
          <div className="flex flex-col items-center justify-center p-2 bg-white w-16 h-16 rounded-full absolute top-[-10px] left-[-10px]">
            <img className="scale-100" src={url} alt="pdf" />
          </div>
          <div>
            <h4 className="font-bold text-lg my-4">Its faster</h4>
          </div>
          <div>
            <p className="font-normal">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
          <br></br>
          <div>
            <p className="font-normal">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
        </div>
        <div className="card h-auto border border-sky-200 bg-sky-700 rounded-md pd-3 md:w-[30%] relative py-10 px-10">
          <div className="flex flex-col items-center justify-center p-2 bg-white w-16 h-16 rounded-full absolute top-[-10px] left-[-10px]">
            <img className="scale-100" src={url} alt="pdf" />
          </div>
          <div>
            <h4 className="font-bold text-lg my-4">Its faster</h4>
          </div>
          <div>
            <p className="font-normal">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
          <br></br>
          <div>
            <p className="font-normal">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
        </div>
        <div className="card h-auto border border-sky-200 bg-sky-700 rounded-md pd-3 md:w-[30%] relative py-10 px-10">
          <div className="flex flex-col items-center justify-center p-2 bg-white w-16 h-16 rounded-full absolute top-[-10px] left-[-10px]">
            <img className="scale-100" src={url} alt="pdf" />
          </div>
          <div>
            <h4 className="font-bold text-lg my-4">Its faster</h4>
          </div>
          <div>
            <p className="font-normal">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
          <br></br>
          <div>
            <p className="font-normal">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
        </div>
    
      </div>
      <div className="w-full bg-black text-white h-auto p-5 px-20">
        <div className="flex gap-3 justify-between my-3">
          <div className="gap-3 flex flex-col items-start">
            Artemis Docs
            <p>Enhance your productivity by using our services.</p>
            <p>On step away from efficiency</p>
            <button className="bg-primary rounded py-2 px-4  flex gap-2 my-3 hover:bg-sky-300 hover:text-slate-800 ">
            <Link to="upload">
              <p className="text-bold text-sky-100">Get Started</p>
            </Link>
            <span className="material-symbols-outlined text-sky-100">
              navigate_next
            </span>
          </button>
          </div>
          <div>
            <h3 className="mb-2 text-center">Quick links</h3>
            <ul className="flex gap-1 flex-col">
              <li>Home</li>
              <li>About</li>
              <li>Docs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-[35%]">
            <h3 className="mb-4"> Talk To us</h3>
            <div>
              <form action="#" method="post" className="flex flex-col gap-2">
                <div className="flex  gap-2">
                <input type="text" placeholder="your name" className="text-sm rounded  py-2 px-3 text-black"/>
                <input type="email" placeholder="your email" name="" id=""  className=" text-sm rounded px-3 py-2 text-black"/>
                </div>
                <textarea name="" id="" cols="5" rows="10" className="text-sm rounded h-20 p-3 text-black" placeholder="Your message"></textarea>
               
                <button type="submit" className="bg-primary rounded py-2 px-3 w-20 text-sm hover:bg-sky-300 hover:text-slate-800 ">Submit</button>
              </form>
            </div>
          </div>
          
        </div><hr></hr>
        <div className="my-5 text-center">
          
          ArtemisDocs By Artemis AI &copy; reserved 2023</div>
          
      </div>
    </div>
  );
}

export default HomePage;
