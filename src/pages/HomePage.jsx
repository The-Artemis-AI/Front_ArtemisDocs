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
import frame from "../assets/imgs/Frame.png"
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="">
      {/* <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[100vh]  flex flex-col">  */}
      
      <div className="relative w-full align-center flex flex-col  h-[100vh]" style={{ backgroundImage:`url(${frame})`}}>
      <header className=" m-2 mx-auto flex flex-row items-center justify-between h-[10%] w-[90%]">
      <div><Link to="/"><p>ARTEMIS LOGO.</p></Link></div>
      <div>
      <ul className="flex space-x-4">
      <Link to="/"> <li>Home</li></Link>
      <Link to="conversation"><li>Conversation</li></Link>
      <li>Contact</li>
      <Link to="signup"><li>Sign Up </li></Link>
      <Link to="login"><li className="rounded-full border border-myOrange bg-myOrange px-4 py-[1px]">Login </li> </Link>
      </ul>
      </div>
      </header>

      <div className="flex flex-row items-center justify-betwee h-[80%] w-[90%] mx-auto ">
      <div className="w-[50%] h-full justify-center space-y-6 flex flex-col px-3">
      <h1 className="font-bold text-5xl text-primary"><span className="text-myOrange">CHAT </span>WITH YOUR DOCUMENT</h1>
      <p className="w-[60%] text-lg">An tool to build you productivity. Upload your document and interact with it</p>
      <div className="flex flex-row space-x-4">

      <Link to="upload"><button className="flex space-x-2 items-center flex-row rounded-full  bg-primary px-4 py-2">
       <span className="material-symbols-outlined text-myOrange text-[20px]">
      upload_2
      </span><p className="text-white font-semibold">Upload File</p></button></Link>
      <button className="flex space-x-2 flex-row rounded-full border border-primary px-4 py-2 items-center"> 
      <span className="material-symbols-outlined text-myOrange text-[20px]">
      play_circle
      </span><p>View Demo</p></button>
      </div>
      </div>
      <div className="w-[40%] h-[80%]" style={{ backgroundImage:`url(${vector1})`}}>
      <image src={vector2} className="w-[40opx] h-[200px] contain" alt="hero"/>
      </div>
      
      </div>
      </div>  
      
     

      <div className="w-full bg-white h-auto p-5 px-20">
        <div className="main-content flex flex-col ">
          {/* <div className="upper-wrapper flex">
            <div className="left-section">
              <div className="icon-start">
              
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
          <div className=" flex flex-col sm:flex-row w-[90vw] mx-auto ml-[-150px] justify-between ">
            <div className="left-section p-2 w-[45%]">
              <h3 className="text-2xl text-bold my-2 ">Getting Started</h3>
              <p className="text-slate-800">Short guides to get you started</p>
              <div className="youtube my-2 roundend overflow-hidden w-[40vw] h-[60vh] ">
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
            <div className="right-section  p-2 px-5 w-[50vw]  flex flex-col gap-4 align-center justify-center">
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
          
            Why Artemis Docs
          </h3>
          <p>
           
            ArtemisDocs offers an amazing AI experience with simplicity in mind.
          </p>
          <p>
            You can Upload files from either URL or your device and start
            receiving information about them instantly.
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
            <h4 className="font-bold text-lg my-4 text-sky-200">Its faster</h4>
          </div>
          <div>
            <p className="font-normal text-white">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
          <br></br>
          <div>
            <p className="font-normal text-white">
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
            <h4 className="font-bold text-lg my-4 text-sky-200">Its faster</h4>
          </div>
          <div>
            <p className="font-normal text-white">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
          <br></br>
          <div>
            <p className="font-normal text-white">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
        </div>
        <div className="card h-auto border border-sky-200 bg-sky-700 rounded-md pd-3 md:w-[30%] relative py-16 px-10">
          <div className="flex flex-col items-center justify-center p-2 bg-white w-16 h-16 rounded-full absolute top-[-10px] left-[-10px]">
            <img className="scale-100" src={url} alt="pdf" />
          </div>
          <div>
            <h4 className="font-bold text-lg my-4 text-sky-200">Its faster</h4>
          </div>
          <div>
            <p className="font-normal text-white">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
          <br></br>
          <div>
            <p className="font-normal text-white">
              Artemis Docs takes less time to compute and analyse your document,
              giving you immerse power over what to ask.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default HomePage;
