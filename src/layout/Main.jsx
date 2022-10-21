import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      {/* <Header /> */}
      <Container>
        <Outlet />
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
