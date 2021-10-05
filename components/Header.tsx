import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const HeaderStyled = styled.div`
  position: relative;
  display: flex;
  padding: 35px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
  }
`;

const Navigation = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavigationItem = styled.a`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 20px;
  line-height: 1.5em;
  font-weight: 700;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    z-index: 5;
    display: ${(props) => (props.isDecorated ? "block" : "none")};
  }
`;

const Image = styled.img`
  height: 35px;

  &.sun {
    margin-left: 60px;
  }

  @media (min-width: 768px) {
    &.hamburger {
      display: none;
    }
  }
`;

const Language = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageItem = styled(NavigationItem)`
  margin-left: 10px;
  margin-right: 10px;
`;

export interface HeaderProps {
  onDisplayMiniNav: any,
  onSetLocale: any
}

const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();
  const route = router.route;

  const displayNav = () => {
    props.onDisplayMiniNav();
  };

  const setLocaleEng = () => {
    localStorage.setItem("language", "en");
    props.onSetLocale("en");
  };

  const setLocaleSr = () => {
    localStorage.setItem("language", "sr");
    props.onSetLocale("sr");
  };

  return (
    <HeaderStyled>
      <Image src="/images/logo.png" />
      <Navigation>
        <Link href="/">
          <NavigationItem isDecorated={route === "/"}>
            <FormattedMessage id="navigation.item.1.name" />
          </NavigationItem>
        </Link>
        <Link href="/about">
          <NavigationItem isDecorated={route === "/about"}>
            <FormattedMessage id="navigation.item.2.name" />
          </NavigationItem>
        </Link>
        <Link href="/gallery">
          <NavigationItem isDecorated={route === "/gallery"}>
            <FormattedMessage id="navigation.item.3.name" />
          </NavigationItem>
        </Link>
        <Link href="/contact">
          <NavigationItem isDecorated={route === "/contact"}>
            <FormattedMessage id="navigation.item.4.name" />
          </NavigationItem>
        </Link>
        <Language>
          <LanguageItem onClick={setLocaleEng}>en</LanguageItem>/
          <LanguageItem onClick={setLocaleSr}>sr</LanguageItem>
        </Language>
      </Navigation>
      <Image
        src="/images/hamburger.png"
        className="hamburger"
        onClick={displayNav}
      />
    </HeaderStyled>
  );
};

export default Header;
