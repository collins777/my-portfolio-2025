import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

// Import all components
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Navbar />
        {/* Render all components directly */}
        <Home />
        <About />
        <Projects />
        <Contact />
      </Router>
    </ThemeProvider>
  );
};

export default App;
