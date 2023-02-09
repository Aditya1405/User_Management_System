import React, { useState, useEffect } from "react";
import base_url from "../api/bootapi";
import Course from "./Course";
import axios from "axios";
import { toast } from "react-toastify";
import UpdateCourse from "./UpdateCourse";
import { Link, useNavigate } from "react-router-dom";

const Allcourse = () => {
  const [courses, setCourses] = useState([]);
  //loads when the page is mounted and not on update
  useEffect(() => {
    document.title = "View Course";
    getAllCoursesFromServer();
  }, []);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/users`).then(
      (response) => {
        //success
        console.log(response.data);
        setCourses(response.data);
        toast.success("Courses has been loaded", { position: "bottom-center" });
      },
      (error) => {
        //fail
        console.log(error);
        toast.error("something went wrong", { position: "bottom-center" });
      }
    );
  };
  function deleteNote(id) {
    console.log(id);
    setCourses((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem.id !== id;
      });
    });
  }
  const deleteFromServer = (id) => {
    console.log("del id = ", id);
    axios.delete(`${base_url}/users/${id}`).then(
      (response) => {
        //success
        deleteNote(id);
        toast.success("User has been deleted", { position: "bottom-center" });
      },
      (error) => {
        //fail
        console.log(error);
        toast.error("something went wrong", { position: "bottom-center" });
      }
    );
  };
  const navigate = useNavigate();

  const updateFromServer = (user) => {
    console.log("allcrs = ", JSON.stringify(user));
    navigate(`/update-course/${JSON.stringify(user)}`, { replace: true });
  };
  return (
    <div>
      <h1>Allcourse</h1>
      {courses.length > 0
        ? courses.map((crs, index) => {
            return (
              <Course
                key={index}
                // id={crs.id}
                // title={crs.name}
                // desc={crs.city}
                userData={crs}
                onDelete={deleteFromServer}
                onUpdate={updateFromServer}
              />
            );
          })
        : "No crs avail"}
    </div>
  );
};

export default Allcourse;
