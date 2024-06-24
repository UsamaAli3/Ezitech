import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Certifications from "./pages/Certifications.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Internship from "./pages/Internship.jsx";
import Nopage from "./pages/Nopage.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="internship" element={<Internship />} />

          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
