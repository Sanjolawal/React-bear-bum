import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router} from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Main />
      <Faq />
      <Footer />
    </Router>
  );
};

export default App;
