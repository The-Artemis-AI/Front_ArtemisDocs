import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import "../src/assets/css/progress.css"


library.add(fas, faTwitter, faFontAwesome)

const HomePage = lazy(() => import("./pages/HomePage"));
const ConversationPage = lazy(() => import("./pages/ConversationPage"));
const UploadPage = lazy(() => import("./pages/UploadPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/conversation" element={<ConversationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

function NavWrapper() {
  return (
    <>
  
      <Suspense
        fallback={
          <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-4">
          <div className="lds-ripple"><div></div><div></div></div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;



// <div className=" flex self-center p-4 px-9 flex-row text-sky-700 justify-between  w-full border-b border-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg  top-0 z-10 bg-primary">
// <div className="text-l text-bold w-[20%]">
//   <Link to="/">ArtemisDocs Logo.</Link>
// </div>
// <div className="  flex-row hidden sm:flex  text-sky-700  justify-end gap-[45%]  w-full">
//   <div>
//     <ul className="flex gap-5">
//       <Link to="/">
//         <li className="font-semibold hover:text-sky-200 hover:font-bold text-white cursor-pointer">Home</li>
//       </Link>
//       <li className="font-semibold hover:text-sky-200 hover:font-bold text-white cursor-pointer">Docs</li>
//       <li className="font-semibold hover:text-sky-200 hover:font-bold text-white cursor-pointer">Contact</li>
//     </ul>
//   </div>
//   <div>
//     <Link to="login">
//       <button className="bg-sky-100 text-slate-800 text-semibold rounded py-1 px-3 flex align-center justify-center gap-2">
//         Login
//         <span className="material-symbols-outlined text-medium font-normal">
//           login
//         </span>
//       </button>
//     </Link>
//   </div>
// </div>
// <div className="block sm:hidden">
//   <span className="material-symbols-outlined">menu</span>
// </div>
// </div>