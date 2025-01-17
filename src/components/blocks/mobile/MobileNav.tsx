import React from "react";
import styled from "styled-components";
import { mobileNav } from "../../../types";
import { NavLink, useNavigate } from "react-router-dom";
import Popup from "./popup/UserPopup";

const MobileNav: React.FC<mobileNav> = ({
  firstIcon,
  firstText,
  firstLink,
  secondIcon,
  secondText,
  secondLink,
  thirdIcon,
  thirdLink,
  fourthIcon,
  fourthText,
  fourthLink,
  fifthIcon,
  fifthText,
  fifthLink,
  colours,
  popUp,
}) => {
  const navigate = useNavigate();
  const [first, setFirst] = React.useState(false);
  const [second, setSecond] = React.useState(false);
  const [third, setThird] = React.useState(false);
  const [fourth, setFourth] = React.useState(false);
  const [fifth, setFifth] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  const toggleFunction = () => {
    setToggle(!toggle);
  };
  const firstFunction = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
    setFourth(false);
    setFifth(false);
  };
  const secondFunction = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
    setFourth(false);
    setFifth(false);
  };
  const thirdFunction = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
    setFourth(false);
    setFifth(false);
  };
  const fourthFunction = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFourth(true);
    setFifth(false);
  };
  const fifthFunction = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFourth(false);
    setFifth(true);
  };

  return (
    <Container>
      <Wrapper>
        <LeftPair>
          <Item
            to={firstLink}
            cl={first ? colours : "silver"}
            onClick={firstFunction}
          >
            <Icon>{firstIcon}</Icon>
            <Text>{firstText}</Text>
          </Item>
          <Item
            to={secondLink}
            cl={second ? colours : "silver"}
            onClick={secondFunction}
          >
            <Icon>{secondIcon}</Icon>
            <Text>{secondText}</Text>
          </Item>
        </LeftPair>
        {popUp ? (
          <LoneMid2 cl={colours} onClick={toggleFunction}>
            {toggle ? "x" : thirdIcon}
          </LoneMid2>
        ) : (
          <LoneMid
            to={thirdLink}
            cl={third ? colours : "silver"}
            onClick={thirdFunction}
          >
            {thirdIcon}
          </LoneMid>
        )}
        <RightPair>
          <Item
            to={fourthLink}
            cl={fourth ? colours : "silver"}
            onClick={fourthFunction}
          >
            <Icon>{fourthIcon}</Icon>
            <Text>{fourthText}</Text>
          </Item>
          <Item
            to={fifthLink}
            cl={fifth ? colours : "silver"}
            onClick={fifthFunction}
          >
            <Icon>{fifthIcon}</Icon>
            <Text>{fifthText}</Text>
          </Item>
        </RightPair>
      </Wrapper>
      {toggle ? <Popup /> : null}
    </Container>
  );
};

export default MobileNav;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const LeftPair = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Item = styled(NavLink)<{ cl: string }>`
  text-decoration: none;
  width: 35%;
  height: 70%;
  color: ${(props) => props.cl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  width: 100%;
  height: 70%;
  font-size: 23px;
  display: flex;
  justify-content: center;
`;
const Text = styled.div`
  font-size: 15px;
`;
const LoneMid = styled(NavLink)<{ cl: string }>`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.cl};
  border: 3px solid white;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  margin-top: -60px;
`;
const LoneMid2 = styled.div<{ cl: string }>`
  height: 70px;
  width: 70px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.cl};
  border: 3px solid white;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  margin-top: -60px;
  z-index: 1;
`;
const RightPair = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
