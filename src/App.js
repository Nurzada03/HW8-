import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import MainContent from "./components/MainContent/MainContent";
import Header from "./components/Header/Header";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("users");

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem("isLogin");

    if (storedUserLoggedInfo === "1") {
      isLoggedIn("true");
    }
  }, [isLoggedIn]);

  const loginHandler = ( ) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("islogin");
  };

  return (
    <React.Fragment>
      <Header
        onChangePage={handleNavigationClick}
        isAuthenticated={isLoggedIn}
        onLogout={logoutHandler}
      />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <MainContent currentPage={currentPage} />}
      </main>
    </React.Fragment>
  );
}

export default App;
