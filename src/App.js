import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Employer_Registration from "./components/pages/Employer/Employer_Registration";
import Home from "./components/pages/Home";
//import Home from "./components/pages/Employer/Home";
import LoginModal from "./components/pages/LoginModal";
import LoginForm from "./components/pages/Employer/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/employer_registration"
          element={<Employer_Registration />}
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login_modal" element={<LoginModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
