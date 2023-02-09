import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import UserForm from "./Form";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const handleForm = (user) => {
    console.log(user);
    postData(user);
    // user.preventDefault();
  };
  //post data to server
  const postData = (data) => {
    axios.post(`${base_url}/users`, data).then(
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

  return <UserForm handle={handleForm} data={{}} />;
};
export default AddCourse;
