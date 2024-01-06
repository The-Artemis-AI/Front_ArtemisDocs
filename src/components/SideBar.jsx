import React from 'react'
// import { Button } from 'react-router-dom'
import Logo from "../assets/imgs/logo1.png"
import { Link } from 'react-router-dom'

function SideBar(props) {
  return (
    <div className='h-[100vh] w-16 bg-black left-0 top-0 flex flex-col items-center justify-center gap-10'>

    <div className='absolute top-2 left-[-2px]'>
    <Link to="/"><button onClick={props.onClickChat}>
      <div className='rounded-full bg-gray-100 p-1 mx-auto ml-2'>
      <img src={Logo} className='w-10 h-10'/>
      </div>
    </button></Link>
    </div>
    
    <div className="upper-sidebar gap-10">
       
    <button onClick={props.onClickChat}>
      <div>
        <span className="material-symbols-outlined text-white rounded-full bg-slate-700 p-2 mb-4 mx-auto ml-2">chat_bubble</span>
      </div>
    </button>
    <button onClick={props.onClickPdf}>
      <div>
        <span className="material-symbols-outlined  text-slate-700 rounded-full bg-slate-300 p-2 mb-4 ml-2">picture_as_pdf</span>
      </div>
    </button>
    <button onClick={props.onClickDatabase}>
      <div>
        <span className="material-symbols-outlined  text-slate-700 rounded-full bg-slate-300 p-2 mb-4 ml-2">database</span>
      </div>
    </button>
    <button onClick={props.onClickCsv}>
    <div>
      <span className="material-symbols-outlined  text-slate-700 rounded-full bg-slate-300 p-2 mb-4 ml-2">csv</span>
    </div>
  </button>
 
  
  </div>
  <div className="lower-siderbar gap-10">
  <button >
  <div>
    <span className="material-symbols-outlined  text-slate-700 rounded-full bg-slate-300 p-2 mb-4 ml-2">question_mark</span>
  </div>
</button>
  </div>
    </div>
  )
}

export default SideBar