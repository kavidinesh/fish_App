import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure you import these
import HomePage from "./components/HomePage/HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
