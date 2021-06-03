import React from "react";
import styled from "styled-components";

import background from "../images/login-background.jpg";
import cta from "../images/cta-logo-one.svg";
import ctaTwo from "../images/cta-logo-two.png";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${background});
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const CTAOne = styled.img``;
const CTATwo = styled.img``;

const SignUp = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px 0px;
  border-radius: 4px;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  margin-bottom: 20px;
`;

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTAOne alt="logos-cta" src={cta}></CTAOne>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          © 2021 Disney and its family of affiliated companies. All rights
          reserved.
        </Description>
        <CTATwo alt="logos-cta-2" src={ctaTwo}></CTATwo>
      </CTA>
    </Container>
  );
};

export default Login;
