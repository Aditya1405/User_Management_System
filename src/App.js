import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Course from "./components/Course";
import Allcourse from "./components/Allcourse";
import AddCourse from "./components/AddCourse";
import Menus from "./components/Menus";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateCourse from "./components/UpdateCourse";

function App() {
  const mybtn = function () {
    toast("this is my first msg");
  };
  return (
    <div className="App">
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <h1>menu</h1>
            <Menus />
          </Col>
          <Col md={8}>
            <h1>content</h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/view-courses" element={<Allcourse />} />
              <Route path="/update-course/:user" element={<UpdateCourse />} />
            </Routes>
          </Col>
        </Row>
      </Container>

      {/* <Allcourse /> */}
      {/* <AddCourse /> */}
    </div>
  );
}

export default App;
