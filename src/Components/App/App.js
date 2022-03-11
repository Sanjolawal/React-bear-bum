import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";

// <Header />
//     <Navbar />
//     <Main />
//     <Faq />
//     <Footer />

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Main />
      <Faq />
      {/* <Routes>
        <Route path="/" exact element={<Header />} />
        <Route path="/about" element={<Main />} />
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/footer" element={<Footer />} /> 
      </Routes> */}
      <Footer />
    </Router>
  );
};

export default App;
