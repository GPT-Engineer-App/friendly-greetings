import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("UA-XXXXXXXXX-X");
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Initialize Hotjar
    hotjar.initialize("YOUR_HOTJAR_ID", 6);
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <a href="/privacy-policy" style={{ color: "#ffffff" }}>
          Learn more
        </a>
      </CookieConsent>
    </Router>
  );
}

export default App;