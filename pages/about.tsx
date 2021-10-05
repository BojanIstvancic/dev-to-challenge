import * as React from 'react';
import styled from "styled-components";
import Layout from "../components/Layout";

const Content = styled.div`
  flex: 1;
`;


const About: React.FC<{}> = () => {
  return (
    <Layout>
      <Content>ABOUT</Content>
    </Layout>
  );
}

export default About;
