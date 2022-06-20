import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import HandOverThings from "./components/HandOverThings";

function App() {
  return (
          <React.StrictMode>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="login" element={<Login />} />
                      <Route path="register" element={<Register />} />
                      <Route path="logout" element={<Logout />} />
                      <Route path="hand-over-things" element={<HandOverThings />} />
                  </Routes>
              </BrowserRouter>
          </React.StrictMode>
  );
}

export default App;
