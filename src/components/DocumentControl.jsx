import { Link } from "react-router-dom";

function DocumentControl() {
  return (
    <div className="document-side-container h-[90vh] p-2 bg-blue-900 w-60">
      <div className="document-header flex text-lg font-semibold gap-3 justify-center ">
        <h1>ArtemisDocs</h1>
        <h4 className="text-xs self-center px-1 bg-sky-100 rounded-2xl">
          Free
        </h4>
      </div>
      <div className="document-nav flex justify-between my-2 ">
        <Link to="#" className="">
          {" "}
          Conversations
        </Link>
        <Link to="#"> Document</Link>
        <p>
          {" "}
          <span className="material-symbols-outlined">search</span>
        </p>
      </div>
      <div
        className="document-create-account bg-sky-100  ml-[-0.5rem] mr-[-0.5rem] w-[107%] p-2 text-sm"
        style={{ display: "none" }}
      >
        <p>
          You exceeded your conversation limit. Login or create an account to
          have more conversations
        </p>

        <div className="account-btns flex gap-2">
          <button className="create p-2 rounded bg-black text-white m-2 ">
            Create Account
          </button>
          <button className="login create p-2 rounded bg-transparent border-[1.5px] border-black text-black m-2">
            Login
          </button>
        </div>
      </div>
      <div className="open-documents flex flex-col gap-2 my-4">
        <div className="text-sm font-bold">
          <h2>TODAY</h2>
        </div>
        <div className="document-wrapper flex align-center justify-between gap-4 bg-black text-white rounded-lg p-2">
          <div className="h-full  self-center">
            <span className="material-symbols-outlined">chat_bubble</span>
          </div>
          <div className="text-sm font-normal">
            <h3 className="text-sm font-bold">AI readliness</h3>
            <p>The United Nations Development Program</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentControl;
