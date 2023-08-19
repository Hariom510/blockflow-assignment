import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "./mycss.css";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isBubbleOpaque, setIsBubbleOpaque] = useState(false);

  const handleMode = () => {
    if (darkMode === true) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
    setIsBubbleOpaque(false);
  };

  const handleBubbleScroll = () => {
    setIsBubbleOpaque(true);
  };

  return (
    <div
      className="animated-container"
      style={{
        backgroundColor: darkMode ? "#1f284a" : "#FFF",
        color: darkMode ? "#FFF" : "#444444",
      }}
    >
      <div
        className={`bubble ${darkMode ? "animate-up" : ""} ${
          isBubbleOpaque ? "animate-opacity" : ""
        }`}
        onTransitionEnd={handleBubbleScroll}
      ></div>
      <div className={`content ${darkMode ? "animate-content" : ""}`}>
        <AllContent>
          <Headers>
            <Left>
              {darkMode ? (
                <img src="images/whitelogo.png" alt="blockflow" />
              ) : (
                <img src="images/blacklogo.png" alt="blockflow" />
              )}
            </Left>
            <Right style={{ backgroundColor: darkMode ? "#1f284a" : "#FFF" }}>
              <p>DOCS</p>
              <p>BLOG</p>
              <p>PRICING</p>
              <p>CONTACT US</p>
              {darkMode ? (
                <img src="images/light-mode.svg" onClick={handleMode} alt="" />
              ) : (
                <img src="images/dark-mode.svg" onClick={handleMode} alt="" />
              )}
            </Right>
          </Headers>

          <Container>
            <LeftChild>
              <p>ELEVATE YOUR</p>
              <p>DAPP DEVELOPMENT</p>
              <p>WITH BLOCKFLOW</p>
              <BottomText>
                <p>Efficient API creation for your</p>
                <p>Blockchain Data Needs.</p>
              </BottomText>
            </LeftChild>
            <RightChild>
              <img className="hexagon1" src="images/hexagon.svg" alt="" />{" "}
              <br />
              {darkMode ? (
                <>
                  <img
                    className="left-quad"
                    src="images/left-darkmode.png"
                    alt=""
                  />
                  <img
                    className="right-quad"
                    src="images/right-darkmode.png"
                    alt=""
                  />
                </>
              ) : (
                <>
                  <img
                    className="left-quad"
                    src="images/left-lightmode.png"
                    alt=""
                  />
                  <img
                    className="right-quad"
                    src="images/right-lightmode.png"
                    alt=""
                  />
                </>
              )}
              <img className="hexagon2" src="images/hexagon.svg" alt="" />
            </RightChild>
          </Container>
          <br />
          <Button
            style={{
              backgroundColor: darkMode ? "#8075FF" : "#A9C2E8",
              boxShadow: darkMode
                ? "0px 20px 24px 3px black"
                : "0px 20px 24px 3px #becde4",
            }}
          >
            <p>REQUEST DEMO</p>
          </Button>
        </AllContent>
      </div>
    </div>
  );
}

export default Home;

const AllContent = styled.div``;

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 460px) {
    min-height: 8vh;
  }
`;
const Left = styled.div`
  display: flex;
  margin-left: 44px;
  img {
    width: 200px;
    height: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
const Right = styled.div`
  display: flex;
  margin-right: 44px;

  p {
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 15px;
    margin-right: 20px;
    cursor: pointer;
    @media (max-width: 460px) {
      font-size: 15;
      font-weight: 520;
    }
  }
  img {
    cursor: pointer;
  }
  @media (max-width: 460px) {
    margin-right: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7%;
`;
const LeftChild = styled.div`
  margin-left: 5%;
  text-align: left;
  p {
    font-family: "Bebas Neue", sans-serif;
    margin: 0;
    padding: 0;
    font-size: 4rem;
    letter-spacing: 4px;
  }
`;
const BottomText = styled.div`
  margin-top: 5%;
  p {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1px;
  }
`;
const RightChild = styled.div`
  margin-right: 5%;
  width: 30%;
  text-align: left;
  .hexagon1 {
    position: relative;
    margin-left: 0;
    padding: 0;
  }
  .left-quad {
    position: absolute;
    top: 51%;
    margin-left: 6%;
  }
  .right-quad {
    position: absolute;
    top: 55%;
    margin-left: 12%;
  }
  .hexagon2 {
    position: absolute;
    top: 55%;
    margin-left: 18%;
  }
`;
const Button = styled.button`
  margin-left: 5%;
  border: 0px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  line-height: 17px;
  padding: 2px 17px;
  cursor: pointer;
  margin-bottom: 5%;
`;
