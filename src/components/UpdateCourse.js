import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import UserForm from "./Form";
import { useParams } from "react-router-dom";

const UpdateCourse = (props) => {
  const { user } = useParams();

  console.log("UserData = ", JSON.parse(user));

  // console.log(props.id);
  // console.log(props.data);
  const handleForm = (user) => {
    console.log("hf=", user);
    updateData(user);
    // user.preventDefault();
  };
  const updateData = (data) => {
    axios.put(`${base_url}/users/${JSON.parse(user).id}`, data).then(
      (response) => {
        //success
        console.log("success");
        toast.success("User has been saved", { position: "bottom-center" });
      },
      (error) => {
        //fail
        console.log("error");
        toast.error("something went wrong", { position: "bottom-center" });
      }
    );
  };

  return <UserForm handle={handleForm} data={JSON.parse(user)} />;
  // return <h1>works</h1>;
};

export default UpdateCourse;
