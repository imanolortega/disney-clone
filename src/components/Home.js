import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/home-background.png";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url(${backgroundImage}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;
