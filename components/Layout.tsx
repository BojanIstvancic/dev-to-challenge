import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import NavigationMobile from "./NavigationMobile";
import { useState, useEffect } from "react";

import { IntlProvider } from "react-intl";
import Serbian from "../translations/sr_RS.json";
import English from "../translations/en_US.json";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(to left, #0c0c0c, #2c4550);

  .placika {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    opacity: 0.5;
    pointer-events: none;
  }
`;

const DecorationLine = styled.div`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10vw;
  border-right: 2px solid #fff;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Layout: React.FC<{}> = ({ children }) => {
  const [showMiniNav, setShowMiniNav] = useState(false);

  const displayMiniNav = () => {
    setShowMiniNav(true);
  };

  let lang;
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    setLocale(localStorage.getItem("language"));
    // default local storage protection is not set
  }, []);

  if (locale === "en") {
    lang = English;
  } else {
    lang = Serbian;
  }

  return (
    <IntlProvider locale={locale} messages={lang}>
      <LayoutStyled>
        <Header onDisplayMiniNav={displayMiniNav} onSetLocale={setLocale} />
        {children}
        <Footer />
        <DecorationLine />
        {/* <img src="/images/placeholder-desktop.png" className="placika" /> */}
        {/* <img src="/images/placeholder-mobile.png" className="placika" /> */}
        {showMiniNav && <NavigationMobile />}
      </LayoutStyled>
    </IntlProvider>
  );
};

export default Layout;
