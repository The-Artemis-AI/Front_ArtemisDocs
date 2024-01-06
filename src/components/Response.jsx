import logo from "../assets/imgs/favicon.png";

function Response(props) {
  return (
    <div className="received-message flex  justify-start p-2 rounded gap-3 flex-row w-[100%]">
    <div className="icon w-[5%]">
      <img src={logo} className=" w-32 scale-[1] " />
    </div>
    <div className="content-container w-[70%] bg-blue-300 p-2 text-gray-900 rounded">
      <div className="content text-xm w-[90%] mb-2">
        <p className="text-xs">
         {props.response}
        </p>
      </div>
{/*<div className="time font-bold text-xs text-black">{props.time}</div>*/}
    </div>
  </div>
  )
}

export default Response