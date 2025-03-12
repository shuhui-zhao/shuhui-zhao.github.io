import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./home/migration";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <Jumbotron fluid id="contact" className="bg-light m-0">
      <footer style={bgStyle} className="bg-light m-0 text-center ">
        <Container>
          {props.children}
          <a
            rel="noopener"
            href="https://github.com/shuhui-zhao"
            // need to change href
            aria-label="My GitHub"
          >
            {" "}
            <span className="badge bg-dark">Shuhui Zhao</span>
          </a>{" "}
          using <i className="fab fa-react" />
        </Container>
      </footer>
    </Jumbotron>
  );
};

export default Footer;
