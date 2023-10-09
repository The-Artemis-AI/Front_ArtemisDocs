import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import { lazy, Suspense } from "react";

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
      <div className="sticky top-0 flex self-center p-4 px-9 flex-row text-white justify-between  w-full bg-gradient-to-r from-[#071952] from-10%  via-[#0052A2]   to-[#071952] to-90%  ">
      <div className="text-l text-bold w-[20%]">
            <Link to="/">ArtemisDocs Logo.</Link>
          </div>
        <div className="  flex-row hidden sm:flex  text-white justify-end gap-[45%]  w-full">
          
          <div>
            <ul className="flex gap-5">
              <Link to="/">
                <li>Home</li>
              </Link>
              <li>Docs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <Link to="login">
              <button className="bg-sky-100 text-slate-800 text-bold rounded py-1 px-3 flex align-center justify-center gap-2">Login <span className="material-symbols-outlined">
login
</span></button>
            </Link>
          </div>
        </div>
        <div className="block sm:hidden">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
      <Suspense
        fallback={
          <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-4">
            <span className="relative flex h-10 w-10 m-auto ">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
            </span>
            <h1 className="text-sky-500">Loading...</h1>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
