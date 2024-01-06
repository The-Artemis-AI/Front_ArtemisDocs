

function Question(props) {
  return (
    <div className="question-message flex  justify-end p-2 rounded gap-3 flex-row w-[100%] my-2 self-end justify-self-start">
    <div className="content-container bg-blue-100 p-2 rounded w-[70%]">
      <div className="content text-sm w-[90%] mb-2">
        <p className="text-xs">
          {props.question}
        </p>
      </div>
  {/* <div className="time font-bold text-xs">{props.time}</div>*/}
    </div>
    <div className="icon bg-slate-200 h-8 w-8 rounded-full p-1">
      <span className="material-symbols-outlined">person</span>
    </div>
  </div>
  )
}

export default Question
