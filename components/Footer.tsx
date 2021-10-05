import * as React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const FooterStyled = styled.div`
  display: flex;
  height: 21vh;

  @media (min-width: 768px) {
    height: 28vh;
  }
`;

const IconContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 10vw;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Icon = styled.img`
  margin: 20px 0;
`;

const ArticleContainer = styled.div`
  position: relative;
  flex: 1;

  display: flex;
  padding-left: 25px;
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.42) 0%,
    rgba(0, 0, 0, 0.558) 100%
  );
  backdrop-filter: blur(20px);

  @media (min-width: 768px) {
    padding-left: 125px;
  }
`;

const ArticleImage = styled.div`
  position: relative;
  width: 63%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArticleContent = styled.div`
  display: flex;
  flex: 1;
  padding: 25px 22px 56px;
  overflow: hidden;

  div + div {
    margin-left: 18%;
  }

  @media (min-width: 768px) {
    padding: 35px 80px;
  }

  @media (max-width: 1599px) {
    div + div {
      display: none;
    }
  }
`;

const Article = styled.div`
  position: relative;
  width: 24%;

  &:first-child {
    width: auto;
    flex: 1;
    overflow: hidden;
  }

  &:last-child {
    display: none;
  }

  @media (min-width: 768px) {
    &:last-child {
      display: block;
    }
  }
`;

const ArticleTitle = styled.h1`
  font-size: 15px;
  line-height: 1.5em;
  font-weight: 700;
  margin-block-end: 0.4em;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-block-end: 0.67em;
  }
`;

const ArticleDescription = styled.p`
  font-size: 12px;
  line-height: 1.4em;
  font-weight: 500;
  margin-block-start: 0;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.8em;
    margin-block-start: 1em;
  }
`;

const ArticleIcon = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;

  @media (min-width: 768px) {
    display: block;
    bottom: 20px;
  }
`;

export interface FooterProps { }

const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <FooterStyled>
      <IconContainer>
        <Icon src="/images/facebook.png" />
        <Icon src="/images/instagram.png" />
        <Icon src="/images/twitter.png" />
      </IconContainer>
      <ArticleContainer>
        <ArticleImage>
          <Image src="/images/astronaut.png" />
        </ArticleImage>
        <ArticleContent>
          <Article>
            <ArticleTitle>
              <FormattedMessage id="article.1.title" />
            </ArticleTitle>
            <ArticleDescription>
              <FormattedMessage id="article.1.description" />
            </ArticleDescription>
            <ArticleIcon src="/images/arrow.png" />
          </Article>
          <Article>
            <ArticleTitle>
              <FormattedMessage id="article.2.title" />
            </ArticleTitle>
            <ArticleDescription>
              <FormattedMessage id="article.2.description" />
            </ArticleDescription>
          </Article>
        </ArticleContent>
      </ArticleContainer>
    </FooterStyled>
  );
};

export default Footer;
