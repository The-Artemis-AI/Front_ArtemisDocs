
import  { useState } from 'react';
import "../assets/css/conversation-page.css"
import DocumentControl from "../components/DocumentControl";
import logo from '../assets/images/favicon.png'
import send from '../assets/images/img_send.svg'
import doc from '../assets/docs/doc.pdf'


let document = doc

const ConversationPage = ({ messages }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState(messages);

  const handleSendMessage = () => {

  // endpoint: localhost:8000/ask

   
    setChatMessages([...chatMessages, { text: message, user: 'user' }]);
    setMessage('');
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
    window.removeEventListener('mousemove', handleResize);
    window.removeEventListener('mouseup', stopResize);
  };

  const startResize = () => {
    window.addEventListener('mousemove', handleResize);
    window.addEventListener('mouseup', stopResize);
  };

  return (
   
    <div className="conversation-container">
    <DocumentControl/>
    <div className="document-container resizable-container" style={{ width: containerWidth }}>
    <div className="resizer" onMouseDown={startResize} />
    
    <div className="button-wrap">
    {/* <label className="button" for="upload">Upload File</label> */}
      <input type="file" id="upload" onChange={handleFileUpload} />
      {uploadedDocument && (
        <div className="document">
          {/* <p>Uploaded Document:</p> */}
          {/* <embed src={URL.createObjectURL(uploadedDocument)} width="90%" height="90%" /> */}
          <embed src={URL.createObjectURL(uploadedDocument)} width="100%" height="100%" />
        </div>
      )}
    </div>
    </div>
    <div className="chat-container">
     
    <div>
    {responses.map((response, index) => (
      <div key={index}>{response}</div>
    ))}
  </div>
  <div className="response-container">
  <div className="received-message">
  <div className="icon"><img src={logo}/></div>
  <div className="content-container">
  <div className="content">
  <p>Hello! I am a multilingual document assistant here to help 
  you with any questions you may have about the document you uploaded.
   The document discusses the performance of a network, specifically focusing
   on topics such as bandwidth, throughput, latency, and the
   bandwidth-delay product. It also includes examples to
    help illustrate these concepts.</p></div>
    <div className="time">9:30 PM</div>
    </div>
    
  </div>
  <div className="question-message">
 
  <div className="content-container">
  <div className="content">
  <p>Hello! I am a multilingual document assistant here to help 
  you with any questions you may have about the document you uploaded.
   The document discusses the performance of a network, specifically focusing
   on topics such as bandwidth, throughput, latency, and the
   bandwidth-delay product. It also includes examples to
    help illustrate these concepts.</p></div>
    <div className="time">9:30 PM</div>
    </div>
    <div className="icon"><span className="material-symbols-outlined">
    person
    </span></div>
    
  </div>
  <div className="sent-message">
  </div>
  </div>
  <div className="ask-container">
  <form className="ask-container">
  {/* <div className="ask-img"> <img src={logo} alt="logo"/></div> */}
  <div>
  <input
    type="text"
    placeholder="Ask a question..."
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        const question = e.target.value;
        handleAskQuestion(question);
        e.target.value = '';
      }
    }}
  /></div> 
  <button type="send" className="send-btn">
  <div >
  <img src={send}/>
  </div></button>
  </form>
  </div>
 
    </div>

  </div>
  
  )
}

export default ConversationPage