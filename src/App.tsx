import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      {/* this appears in all routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
