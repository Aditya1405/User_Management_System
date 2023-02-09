import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from "reactstrap";

const Course = (props) => {
  function handleClick() {
    props.onDelete(props.userData.id);
  }
  function handleUpdateClick() {
    props.onUpdate(props.userData);
  }

  return (
    <Card>
      <CardBody>
        <CardTitle style={{ fontWeight: "bold" }}>
          {props.userData.name}
        </CardTitle>
        <CardSubtitle>{props.userData.city}</CardSubtitle>
        <Container className="text-center">
          <Button color="danger" onClick={handleClick}>
            Delete
          </Button>
          <Button color="warning" onClick={handleUpdateClick}>
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};
export default Course;
