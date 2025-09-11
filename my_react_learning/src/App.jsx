import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Form from "./Pages/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const getInitialPage = () => {
    const path = window.location.pathname;
    if (path === "/about") return "about";
    if (path === "/contact") return "contact";
    if (path === "/form") return "form";
    return "home";
  };

  const [activePage, setActivePage] = useState(getInitialPage);

  const handleNavClick = (page) => {
    setActivePage(page);
    const newUrl =
      page === "home" ? "/" : `/${page}`;
    window.history.pushState({ page }, "", newUrl);
  };

  useEffect(() => {
    const onPopState = () => {
      setActivePage(getInitialPage());
    };
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "form":
        return <Form />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activePage={activePage} onNavClick={handleNavClick} />
      <main className="content">{renderPage()}</main>
    </div>
  );
}

export default App;