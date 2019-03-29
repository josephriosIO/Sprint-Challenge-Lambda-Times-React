import React from "react";
import styled, { css } from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const TobBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

    @media (min-width: 1280px) {
      width: 1280px;
`;
const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  ${props =>
    props.primary &&
    css`
      cursor: pointer;
      margin-right: 25%;
      font-weight: bold;
    `}
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  ${props =>
    props.secondary &&
    css`
      cursor: pointer;
      margin-right: 5%;

      &:last-child {
        margin-right: 0;
      }
      &:hover {
        text-decoration: underline;
      }
    `}
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  ${props =>
    props.third &&
    css`
      cursor: pointer;
    `}
`;

const TopBar = () => {
  return (
    <TobBarDiv>
      <Container>
        <ContainerLeft>
          <ContainerLeft primary>TOPICS</ContainerLeft>
          <ContainerLeft primary>SEARCH</ContainerLeft>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenter secondary>GENERAL</ContainerCenter>
          <ContainerCenter secondary>BROWNBAG</ContainerCenter>
          <ContainerCenter secondary>RANDOM</ContainerCenter>
          <ContainerCenter secondary>MUSIC</ContainerCenter>
          <ContainerCenter secondary>ANNOUNCEMENTS</ContainerCenter>
        </ContainerCenter>
        <ContainerRight className="container-right">
          <ContainerRight third>{`hello! ${localStorage.getItem(
            "username"
          )}`}</ContainerRight>
        </ContainerRight>
      </Container>
    </TobBarDiv>
  );
};

export default TopBar;
