import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";


export interface NavigationMobileProps { }

const NavigationMobile: React.FC<NavigationMobileProps> = () => {
  const Navigation = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
  `;

  const NavigationItem = styled.a`
    width: 100%;
    font-size: 20px;
    text-align: center;
    background: ${(props) => (props.isDecorated ? "RGB(15, 20, 23)" : "")};
    color: ${(props) => (props.isDecorated ? "#fff" : "RGB(15, 20, 23)")};
    border-bottom: 1px solid RGB(15, 20, 23);
    padding: 20px 0;

    &:last-child {
      border-bottom: none;
    }

    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: RGB(15, 20, 23);
      z-index: 5;
    }
  `;

  const router = useRouter();
  const route = router.route;
  return (
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
    </Navigation>
  );
};

export default NavigationMobile;
