import { useState, useEffect, useRef } from "react";
import DocumentControl from "../components/DocumentControl";
import logo from "../assets/imgs/favicon.png";
import send from "../assets/imgs/img_send.svg";
import "./../assets/css/scrollbar.css"
import Question from "../components/Question";
import Response from "../components/Response";
import ReadCSVPage from "./ReadCSVPage";
import { TiAttachmentOutline } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";

const ConversationPage = ({ messages }) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);
  const [tryMessages, setTryMessages] = useState([
    { message: "What is the reson of tax increase in America?", time: "5:29" },
    { message: "What is the reson of tax increase in America?", time: "5:29" },
    { message: "What is the reson of tax increase in America?", time: "5:29" },
  ]);
  const [isLoading, setIsLoading] = useState(false)
  const [color, setColor] = useState("gray");
  const [question, setQuestion] = useState("");
const [showUpload, setShowUpload]= useState(false)
const divRef = useRef(null);

// const handleClickOutside = (event) => {
//   if (divRef.current && !divRef.current.contains(event.target)) {
//     setShowUpload(false);
//   }
// };

// // Add event listener when the component mounts
// useEffect(() => {
//   document.addEventListener('click', handleClickOutside);

//   // Remove event listener when the component unmounts
//   return () => {
//     document.removeEventListener('click', handleClickOutside);
//   };
// }, [])

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };
  
  useEffect(() => {
    if (question.length > 0) {
      setColor('black');
    } else {
      setColor('gray');
    }
  }, [question]);


  const handleSubmitQuestion =(event)=>{
    event.preventDefault()
    let newMsg= {message,time:"10:34"}
    console.log('new msg',newMsg)
    //setChatMessages([...chatMessages, newMsg]);
    setTryMessages([...tryMessages, newMsg])
    
  }

  const handleChangeIcon =(event)=>{
    setIsLoading(true);
    event.preventDefault()
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  const handleSendMessage = () => {
    // endpoint: localhost:8000/ask

    setChatMessages([...chatMessages, { text: message, user: "user" }]);
    setMessage("");
  };

  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);


  const handleAskQuestion = (question) => {
    // endpoint: localhost:8000/ask/<response> to get an answer
  };

  const [uploadedDocument, setUploadedDocument] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedDocument(file);
  };

  const [containerWidth, setContainerWidth] = useState(300); // Initial width

  const handleResize = (event) => {
    setContainerWidth(event.clientX);
  };

  const stopResize = () => {
    window.removeEventListener("mousemove", handleResize);
    window.removeEventListener("mouseup", stopResize);
  };

  const startResize = () => {
    window.addEventListener("mousemove", handleResize);
    window.addEventListener("mouseup", stopResize);
  };

  return (
    <div className="conversation-container flex bg-sky-300  min-h-[100vh] ">
      <DocumentControl />

      <div
        className="document-container resizable-container min-w-[35%]   resize-x "
        style={{ width: 300 }}
      >
        <div className="button-wrap bg-black  w-full min-h-full">
          <input type="file" id="upload" onChange={handleFileUpload} className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100" />
          {uploadedDocument && (
            <div
              className="document resize-x w-[100%] min-h-[96vh] bg-green-600 "
              // style={{ width: containerWidth + "px" }}
              onDrag={handleResize}
            >
              <embed
                src={URL.createObjectURL(uploadedDocument)}
                width="100%"
                height="580vh"
                style={{ resize: "vertical" }}
              />
            </div>
          )
        }
        </div>
      </div>
      <div className="chat-container px-2 rounded  h-[90vh] py-2 flex flex-col gap-3 relative">
      
     
        <div className="response-container  h-[85%] bg-white rounded-md   p-2 overflow-y-scroll scrollbar-thumb-blue-500 scrollbar-track-gray-200">
        <Response 
        response=' Hello! I am a multilingual document assistant here to help you
        with any questions you may have about the document you
        uploaded. The document discusses the performance of a network,
        specifically focusing on topics such as bandwidth, throughput,
        latency, and the bandwidth-delay product. It also includes
        examples to help illustrate these concepts.'
        time="9:22 PM"
        />
        <Question 
        question="What is the meaning of Intellectual conscience as opposed to Dr. Jameson's research conclusion"
        time="9:33 PM"
        />
        <Response 
        response="His research proves the theories of Cultural Studies. The main theories associated with cultural studies include those of cultural construction, hegemony, Marxism cultural theory, and non-Marxism theory. Early proponents of cultural studies largely believed and adhered to the Marxist approach"
        time="9:34PM"
        />
     

        <Question 
        question="What are the main points of cultural studies?"
        time="9:35 PM"
        />

        <Response 
        response="Cultural studies researchers generally investigate how cultural practices relate to wider systems of power associated with, or operating through, social phenomena. These include ideology, class structures, national formations, ethnicity, sexual orientation, gender, and generation."
        time="9:35PM"
        />
          
          
          <div className="sent-message"></div>
        </div>
     <div className="ask-container flex w-full  flex-col  justify-self-end self-center  absolute bottom-[-5px] rounded-lg  ">
        
     
     {showUpload && <div ref={divRef} className=" absolute bg-blacky w-[150px] h-[110px] bg-[#1E293B] rounded p-2 z-10 left-28 -top-24">
    <div className="flex justify-between">
    <p className="font-semibold mb-1 text-[#dbdada]">Add File</p>
    <IoIosClose onClick={()=>{setShowUpload(false)}}  className="text-xl rounded-full focus:ring-[#dbdada] text-[#dbdada] hover:text-[#1E293B] hover:bg-[#dbdada]"/>
    </div>
     <input type="file" id="upload" onChange={handleFileUpload} className="block w-full text-sm text-slate-500
     file:mr-40 file:py-2 file:p-2 file:w-full file:text-left file:hover:bg-slate-200 file:bg-transparent
     file:rounded file:border-0
     file:text-sm file:font-semibold file:text-[#94A3B8] file:hover:text-[#1E293B]
    " />
     <p className="text-[#94A3B8] hover:text-[#1E293B] font-semibold p-1 px-2 rounded hover:bg-slate-200 transition-all cursor-pointer text-sm">Import URL</p>
     </div> }
     
     <form className="ask-container flex justify-between  w-[70%] justify-self-center self-center border-[.5px] border-gray-400 rounded-md relative">
       
     <button className="bg-white" onClick={(e)=>{e.preventDefault(); setShowUpload(!showUpload)}}>
          <TiAttachmentOutline className="text-xl mx-2  rounded-full p-[.1rem] focus:ring-black focus:ring-[1px]" />
          </button>
            <div className="w-full">
            
              <input
              value={question} 
              onChange={handleQuestionChange}
                className="p-2 w-full outline-none"
                type="text"
                placeholder="Ask a question..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const question = e.target.value;
                    handleAskQuestion(question);
                    e.target.value = "";
                  }
                }}
              />
            </div>
           {!isLoading? (<button disabled={question.length == 0} type="send" className="send-btn" onClick={handleChangeIcon}>
              <div className=" h-full px-3 flex flex-col items-center justify-center hover:bg-slate-950" style={{backgroundColor:`${color}`}}>
                <img src={send} />
              </div>
            </button>):(<button type="send" className="send-btn" onClick>
            <div className=" h-full flex flex-col items-center justify-center hover:bg-slate-950 mr-[-2px]" style={{backgroundColor:"black"}}>
            <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div>
          </button>)}
          </form>
        </div>
      </div>
    </div>
  )}

export default ConversationPage;
