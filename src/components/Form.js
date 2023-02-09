import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

const UserForm = (props) => {
  //track state of user- name;city;status
  const [user, setUser] = useState({ name: "", city: "", status: "" });
  const [btnName, setBtnName] = useState("Add");
  useEffect(() => {
    Number.isInteger(props.data.id) ? setBtnName("Update") : setBtnName("Add");

    setUser({
      name: props.data.name,
      city: props.data.city,
      status: props.data.status
    });
  }, []);
  // handle change in input
  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log(user);
  }
  //reset
  const reset = () => {
    setUser(() => {
      return { name: "", city: "", status: "" };
    });
  };
  //
  function submitForm(e) {
    //     When we use onSubmit() event for form submission the default behaviour of this event is to refresh the browser and render a new html page.
    // To prevent this default behaviour of page refresh for onSubmit event we put event.preventDefault(); inside the function we are calling for onSubmit event.
    e.preventDefault();
    reset();
    props.handle(user);
  }
  return (
    <Form onSubmit={submitForm}>
      <FormGroup>
        <Label for="Name">Name</Label>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={user.name}
          placeholder="enter user name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="City">City</Label>
        <Input
          onChange={handleChange}
          type="text"
          name="city"
          value={user.city}
          placeholder="enter user City"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Status">Status</Label>
        <Input
          onChange={handleChange}
          type="text"
          name="status"
          value={user.status}
          placeholder="enter course Status"
        />
      </FormGroup>
      <Container>
        <Button color="success" type="submit">
          {btnName} course
        </Button>
        <Button color="warning " onClick={reset} className="ml-2">
          Clear
        </Button>
      </Container>
    </Form>
  );
};
export default UserForm;
