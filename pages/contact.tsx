import * as React from 'react';
import styled from "styled-components";
import Layout from "../components/Layout";

const Content = styled.div`
  flex: 1;
`;


const Contact: React.FC<{}> = () => {
  return (
    <Layout>
      <Content>Contact</Content>
    </Layout>
  );
}

export default Contact;