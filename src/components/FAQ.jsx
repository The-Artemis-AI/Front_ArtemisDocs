import { useState } from "react";

function FAQ(props) {
  const [isContentVisible, setContentVisible] = useState(false);

  const handleChangeContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className="faq-container flex flex-col ">
      <div className="faq-content-right flex text-white justify-center shadow-grey-500/20 bg-slate-900 shadow-2xl">
        <p className="text-md text-semibold tex text-normal p-4 text-white">
          {props.head}
        </p>
        <div className="faq-content-left  p-4">
        <div className="icons-faq cursor-pointer" onClick={handleChangeContent}>
          {isContentVisible ? (
            <span className="material-symbols-outlined">do_not_disturb_on</span>
          ) : (
            <span className="material-symbols-outlined">add_circle</span>
          )}
        </div>
      </div>
       
      </div>
      <div className=" bg-sky-100" > <p
          className={`text ml-3 text-sm py-4  text-slate-800 ${
            isContentVisible ? "visibly" : "hidden"
          }`}
        >
          {props.text}
        </p></div>
      
    </div>
  );
}

export default FAQ;
