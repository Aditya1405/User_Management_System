import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Menus = (props) => {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action " to={`/`}>
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action "
          to="/add-course"
          action
        >
          Add courses
        </Link>
        <Link
          className="list-group-item list-group-item-action "
          to="/view-courses"
          action
        >
          View courses
        </Link>
        <Link className="list-group-item list-group-item-action " to="#" action>
          About
        </Link>
        <Link className="list-group-item list-group-item-action " to="#" action>
          Contact
        </Link>
      </ListGroup>
    </div>
  );
};
export default Menus;
