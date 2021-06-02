import React from "react";
import styled from "styled-components";

import viewerOne from "../images/viewers-disney.png";
import viewerTwo from "../images/viewers-pixar.png";
import viewerThree from "../images/viewers-marvel.png";
import viewerFor from "../images/viewers-starwars.png";
import viewerFive from "../images/viewers-national.png";

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 23px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  box-sizing: border-box;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s !important;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.8);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img alt="disney" src={viewerOne}></img>
      </Wrap>
      <Wrap>
        <img alt="pixar" src={viewerTwo}></img>
      </Wrap>
      <Wrap>
        <img alt="marvel" src={viewerThree}></img>
      </Wrap>
      <Wrap>
        <img alt="star-wars" src={viewerFor}></img>
      </Wrap>
      <Wrap>
        <img alt="national-geographic" src={viewerFive}></img>
      </Wrap>
    </Container>
  );
};

export default Viewers;
