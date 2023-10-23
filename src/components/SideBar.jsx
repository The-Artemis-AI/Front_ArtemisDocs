import React from 'react'
// import { Button } from 'react-router-dom'

function SideBar(props) {
  return (
    <div className='h-[100vh] w-16 bg-black left-0 top-0 flex flex-col items-center justify-center gap-10'>

    <div className="upper-sidebar gap-10">
       
    <button onClick={props.onClickChat}>
      <div>
        <span className="material-symbols-outlined text-white rounded-full bg-slate-700 p-2 mb-4">chat_bubble</span>
      </div>
    </button>
    <button onClick={props.onClickPdf}>
      <div>
        <span className="material-symbols-outlined  text-slate-700 rounded-full bg-slate-300 p-2 mb-4">picture_as_pdf</span>
      </div>
    </button>
    <button onClick={props.onClickDatabase}>
      <div>
        <span className="material-symbols-outlined  text-slate-700 rounded-full bg-slate-300 p-2 mb-4">database</span>
      </div>
    </button>
    <button onClick={props.onClickCsv}>
    <div>
      <span className="material-symbols-outlined  text-slate-700 rounded-full bg-slate-300 p-2 mb-4">csv</span>
    </div>
  </button>
    <button >
      <div>
        <span className="material-symbols-outlined  text-slate-700 rounded-full bg-slate-300 p-2 mb-4">question_mark</span>
      </div>
    </button>
  
  </div>
  <div className="lower-siderbar"></div>
    </div>
  )
}

export default SideBar