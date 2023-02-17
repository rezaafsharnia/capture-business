import React from "react";
import Nav from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import OurWorkPage from "./pages/OurWorkPage";
import ContactUsPage from "./pages/ContactUsPage";
import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route, useLocation } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  console.log(location.key)
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={"/"} element={<AboutPage />} />
          <Route path={"/our-work"} element={<OurWorkPage />} />
          <Route path={"/contact-us"} element={<ContactUsPage />} />
          <Route path={"/work/:title"} element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
