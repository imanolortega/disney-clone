import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router";

import logo from "../images/logo.svg";
import home from "../images/home-icon.svg";
import search from "../images/search-icon.svg";
import watchList from "../images/watchlist-icon.svg";
import originals from "../images/original-icon.svg";
import movie from "../images/movie-icon.svg";
import series from "../images/series-icon.svg";

const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.div`
  width: 75px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 30px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      margin-left: 10px;
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.div`
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.4px;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      console.log(user);
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut);
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo>
        <a href="/">
          <img alt="logo-disney-plus" src={logo}></img>
        </a>
      </Logo>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>LOGIN</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img alt="home-icon" src={home}></img>
              <span>HOME</span>
            </a>
            <a href="/">
              <img alt="search-icon" src={search}></img>
              <span>SEARCH</span>
            </a>
            <a href="/">
              <img alt="watchlist-icon" src={watchList}></img>
              <span>WATCHLIST</span>
            </a>
            <a href="/">
              <img alt="originals-icon" src={originals}></img>
              <span>ORIGINALS</span>
            </a>
            <a href="/">
              <img alt="movie-icon" src={movie}></img>
              <span>MOVIES</span>
            </a>
            <a href="/">
              <img alt="series-icon" src={series}></img>
              <span>SERIES</span>
            </a>
          </NavMenu>
          <Login onClick={signOut}>LOGOUT</Login>
        </>
      )}
    </Nav>
  );
};

export default Header;
