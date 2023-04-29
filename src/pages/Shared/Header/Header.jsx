import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4 mb-4">
        <img className="mb-4" src={logo} alt="" />
        <p className="mb-2">Journalism Without Fear or Favour</p>
        <p>
          <b>{moment().format("dddd, MMMM D, YYYY")}</b>
        </p>
      </div>
      <div className="mb-4 d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
