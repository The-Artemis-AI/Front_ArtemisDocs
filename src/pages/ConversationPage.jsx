import { useState } from "react";
import DocumentControl from "../components/DocumentControl";
import logo from "../assets/imgs/favicon.png";
import send from "../assets/imgs/img_send.svg";

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
        className="document-container resizable-container min-w-[35%]   resize-x bg-red-200"
        style={{ width: 300 }}
      >
        <div className="button-wrap bg-black h-[95%] w-full ">
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
      <div className="chat-container p-3 flex flex-col justify-between">
        <div>
          {responses.map((response, index) => (
            <div key={index}>{response}</div>
          ))}
        </div>
        <div className="response-container  h-full p-2 overflow-y-scroll">
          <div className="received-message flex  justify-start p-2 rounded gap-3 flex-row w-[100%]">
            <div className="icon w-[5%]">
              <img src={logo} className=" w-32 scale-[1] " />
            </div>
            <div className="content-container w-[70%] bg-blue-500 p-2 text-gray-900 rounded">
              <div className="content text-xm w-[90%] mb-2">
                <p className="text-xs">
                  Hello! I am a multilingual document assistant here to help you
                  with any questions you may have about the document you
                  uploaded. The document discusses the performance of a network,
                  specifically focusing on topics such as bandwidth, throughput,
                  latency, and the bandwidth-delay product. It also includes
                  examples to help illustrate these concepts.
                </p>
              </div>
              <div className="time font-bold text-xs text-black">9:30 PM</div>
            </div>
          </div>
          
          <div className="question-message flex  justify-end p-2 rounded gap-3 flex-row w-[100%] my-2 self-end justify-self-start">
            <div className="content-container bg-blue-100 p-2 rounded w-[70%]">
              <div className="content text-sm w-[90%] mb-2">
                <p className="text-xs">
                  Hello! I am a multilingual document assistant here to help you
                  with any questions you may have about the document you
                  uploaded. The document discusses the performance of a network,
                  specifically focusing on topics such as bandwidth, throughput,
                  latency, and the bandwidth-delay product. It also includes
                  examples to help illustrate these concepts.
                </p>
              </div>
              <div className="time font-bold text-xs">9:30 PM</div>
            </div>
            <div className="icon bg-slate-200 h-8 w-8 rounded-full p-1">
              <span className="material-symbols-outlined">person</span>
            </div>
          </div>
          <div className="sent-message"></div>
        </div>
        <div className="ask-container flex w-full  flex-col self-center">
          <form className="ask-container flex justify-between bg-red-700 w-[70%] justify-self-center self-center border-2 border-black">
            {/* <div className="ask-img"> <img src={logo} alt="logo"/></div> */}
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
