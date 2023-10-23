import { useState } from "react";
import DocumentControl from "../components/DocumentControl";
import logo from "../assets/imgs/favicon.png";
import send from "../assets/imgs/img_send.svg";
import "./../assets/css/scrollbar.css"
import Question from "../components/Question";
import Response from "../components/Response";

const ConversationPage = ({ messages }) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);
  const [tryMessages, setTryMessages] = useState([
    { message: "What is the reson of tax increase in America?", time: "5:29" },
    { message: "What is the reson of tax increase in America?", time: "5:29" },
    { message: "What is the reson of tax increase in America?", time: "5:29" },
  ]);

  const handleSubmitQuestion =()=>{
    let newMsg= {message,time:"10:34"}
    console.log('new msg',newMsg)
    //setChatMessages([...chatMessages, newMsg]);
    setTryMessages([...tryMessages, newMsg])
    

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
    <div className="conversation-container flex bg-sky-300 ">
      <DocumentControl />

      <div
        className="document-container resizable-container min-w-[35%]   resize-x "
        style={{ width: 300 }}
      >
        <div className="button-wrap bg-black h-[100%] w-full ">
          <input type="file" id="upload" onChange={handleFileUpload} />
          {uploadedDocument && (
            <div
              className="document h-full resize-x w-[100%] bg-green-600 "
              // style={{ width: containerWidth + "px" }}
              onDrag={handleResize}
            >
              <embed
                src={URL.createObjectURL(uploadedDocument)}
                width="100%"
                height="100%"
                style={{ resize: "horizontal" }}
              />
            </div>
          )}
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
        <div className="ask-container flex w-full  flex-col  justify-self-end self-center  absolute bottom-[20px] rounded overflow-hidden">
          <form className="ask-container flex justify-between  w-[70%] justify-self-center self-center border-[.5px] border-black">
            <div className="w-full">
              <input
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
            <button type="send" className="send-btn" onSubmit={handleSubmitQuestion}>
              <div className="bg-black h-full px-3 flex flex-col items-center justify-center hover:bg-slate-950">
                <img src={send} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
