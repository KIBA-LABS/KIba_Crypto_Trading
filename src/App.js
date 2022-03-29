import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SignIn from "./components/pages/Employer/SignIn";
import Home from "./components/pages/Home";

import LoginModal from "./components/pages/LoginModal";
import LoginForm from "./components/pages/Employer/LoginForm";
import Appbar from "./components/common/Appbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Appbar></Appbar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login_modal" element={<LoginModal />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
