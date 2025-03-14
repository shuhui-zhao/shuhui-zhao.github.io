import React from "react";
// import Container from "react-bootstrap/Container";
// import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
import { about, getInTouch } from "../../editable-stuff/config.js";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

const MainBody = React.forwardRef(
  ({ /*gradient,*/ title /*message, icons*/, imgSize }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: "#e9ecef",
          backgroundSize: "1200% 1200%",
        }}
        // className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        {/* <div id="stars"></div> */}
        <div className="py-5 px-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6">
                {" "}
                <h1 ref={ref} className="display-1">
                  {title}
                </h1>
                <div className="text-center">
                  {" "}
                  <a
                    className="btn btn-outline-dark btn-lg my-1 mx-3"
                    href={`mailto:${getInTouch.email}`}
                  >
                    Contact Me
                  </a>
                  <a
                    className="btn btn-outline-dark btn-lg my-1 mx-3"
                    href={about.resume}
                    role="button"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Learn more about me"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  className="img-fluid my-3 card-image"
                  src={about.imageLink}
                  alt="profilepicture of shuhuizhao"
                  width="300"
                />
              </div>
            </div>
          </div>

          {/* <Typist>
            <div className="lead typist">{message}</div>
          </Typist> */}
          {/* <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div> */}

          {/* <div className="container row" />
        <div className="col-5 d-none d-lg-block align-self-center">
          (
          <img
            className="border border-secondary"
            src={about.imageLink}
            alt="profilepicture"
            width={imgSize}
          />
          )
        </div> */}
          {/* <div className="col-lg-7">
          <h2 className="display-4 mb-5 text-center">heading</h2>
        </div> */}
        </div>
      </Jumbotron>
    );
  }
);

export default MainBody;
