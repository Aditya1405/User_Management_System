import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody } from "reactstrap";

const Header = (props) => {
  return (
    <div>
      <Card className="my-3 bg-warning">
        <CardBody>
          <h1 className="text-center my-3">Welcome to Course Application</h1>
        </CardBody>
      </Card>
    </div>
  );
};
export default Header;
