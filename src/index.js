import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./Components/App/App";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter} from "react-router-dom";
// import Header from "./Components/Header/Header";
// import Main from "./Components/Main/Main"
// import Faq from "./Components/Faq/Faq";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";


ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <Routes>
      <Navbar />
      <Route path="/" exact element={<Header />} />
      <Route path="/about" element={<Main />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/footer" element={<Footer />} />
    </Routes> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
