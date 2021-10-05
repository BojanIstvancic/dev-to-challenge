import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Content = styled.div`
  flex: 1;
`;

const Gallery: React.FC<{}> = () => {
  return (
    <Layout>
      <Content>Gallery</Content>
    </Layout>
  );
};

export default Gallery;
