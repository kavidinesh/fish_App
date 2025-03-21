import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { Home } from "./pages/user/home";
import { SignUp } from "./signup/signup";
import { AdminPage } from "./pages/admin/adminpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes path="/">
        <Route path="/*" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/admin/*" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
