import React from "react";
import styled from "styled-components";

import imageBackground from "../images/star-wars-bad-2.jpg";
import imageLogo from "../images/icon-star-wars-bad.png";
import playIconBlack from "../images/play-icon-black.png";
import playIconWhite from "../images/play-icon-white.png";
import watchButton from "../images/group-icon.png";

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vh;
  min-height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  margin-right: 22px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.6);
  color: rgb(249, 249, 249);
  border: 2px solid rgb(249, 249, 249);

  &:hover {
    color: rgb(0, 0, 0, 0.6);
  }
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: rgb(0, 0, 0, 0.6);
  color: rgb(249, 249, 249);
  border: 2px solid rgb(249, 249, 249);
  margin-right: 22px;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    background: rgb(249, 249, 249);
    color: rgb(0, 0, 0, 0.6);
  }

  span {
    font-size: 30px;
  }
`;

const GroupWatchButton = styled(AddButton)`
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  margin-top: 16px;
`;

const Details = () => {
  return (
    <Container>
      <Background>
        <img alt="star-wars" src={imageBackground} />
      </Background>
      <ImageTitle>
        <img alt="logo-star-wars-bad" src={imageLogo}></img>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img alt="play-icon" src={playIconBlack}></img>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img alt="play-icon" src={playIconWhite}></img>
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img alt="group-watch" src={watchButton}></img>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2021 • 1 season • Science fiction, Animation, Action and adventure
      </SubTitle>
      <Description>
        The Bad Lot must find its way in a galaxy that is changing very fast.
      </Description>
    </Container>
  );
};

export default Details;
