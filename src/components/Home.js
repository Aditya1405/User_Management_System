import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "reactstrap";

const Home = function (props) {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <Container fluid>
        <h1 style={{ fontWeight: "bold" }}>Fluid jumbotron</h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>

      {/* <h1 className="display-3">Hello, world!</h1> */}
    </div>
  );
};

export default Home;
