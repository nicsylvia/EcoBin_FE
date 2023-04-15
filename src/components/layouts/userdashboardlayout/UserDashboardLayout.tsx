import React from "react";
import { Sidenav } from "../../blocks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const UserDashboardLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
    >
      <Sidenav />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default UserDashboardLayout;

const Container = styled.div`
  width: calc(100vw - 270px);

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
