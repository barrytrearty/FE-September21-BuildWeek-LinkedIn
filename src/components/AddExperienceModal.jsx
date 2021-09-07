import React, { useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";

function AddExperienceModal() {
  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "2020-05-14",
    endDate: null,
    description: "",
    area: "",
    company: "",
    image: "",
  });

  const [currentlyWorking, setcurrentlyWorking] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postData = async () => {
    try {
      var raw = JSON.stringify(experience);
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg"
      );
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/611d2acd2d52620015b6de6e/experiences/",
        requestOptions
      );

      if (response.ok) {
        alert("Success!");
      } else {
        alert("Error! Please complete the form!");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleInput = (e, propertyName) => {
    setExperience({
      ...experience,
      [propertyName]: propertyName === "" ? "" : e.target.value,
    });
  };

  const handleDateInput = (e, propertyName) => {
    if (propertyName === "startDateMonth") {
    }
  };

  const handleCheckInput = (e) => {
    setcurrentlyWorking(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <>
      <a onClick={handleShow} className="modallink">
        <CgMathPlus size={27} />
      </a>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Add experience</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <Form id="addExperienceForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formJobTitle">
              <Form.Label className="mb-0">
                <small>Title*</small>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Ex: Retail Sales Manager"
                className="border border-dark"
                onChange={(e) => handleInput(e, "role")}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formCompanyName">
              <Form.Label className="mb-0">
                <small>Company name*</small>
              </Form.Label>
              <Form.Control
                className="border border-dark"
                size="sm"
                type="text"
                placeholder="Ex: Microsoft"
                onChange={(e) => handleInput(e, "company")}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formJobArea">
              <Form.Label className="mb-0">
                <small>Location</small>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                className="border border-dark"
                placeholder="Ex: London, United Kingdom"
                onChange={(e) => handleInput(e, "area")}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formWorkingCheckbox">
              <Form.Check
                type="checkbox"
                label="I am currently working in this role"
                size="lg"
                onChange={(e) => handleCheckInput(e)}
              />
            </Form.Group>

            <small>Start date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                className="mr-2 border border-dark"
                size="sm"
                as="select"
                onChange={(e) => handleDateInput(e, "startDateMonth")}
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </Form.Control>

              <Form.Control
                className="border-dark"
                size="sm"
                as="select"
                onChange={(e) => handleDateInput(e, "startDateYear")}
              >
                <option>Year</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
              </Form.Control>
            </div>

            <small>End date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                className="mr-2 border-dark"
                size="sm"
                as="select"
                disabled={currentlyWorking}
                onChange={(e) => handleDateInput(e, "endDateMonth")}
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </Form.Control>

              <Form.Control
                disabled={currentlyWorking}
                className="border-dark"
                size="sm"
                as="select"
                onChange={(e) => handleDateInput(e, "endDateYear")}
              >
                <option>Year</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
              </Form.Control>
            </div>

            <Form.Group
              className="mb-3 border-dark"
              controlId="formJobDescription"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) => handleInput(e, "description")}
                className="border-dark"
                as="textarea"
                rows={3}
              />
            </Form.Group>

            {/* <Form.Group>
              <Form.File id="imageUpload" label="Media" />
            </Form.Group> */}

            <Form.Group className="mb-4" controlId="formImageUrl">
              <Form.Label className="mb-0">
                <small>Image URL</small>
              </Form.Label>
              <Form.Control
                className="border border-dark"
                size="sm"
                type="text"
                placeholder="Ex: https://fakeimg.pl/10x10/"
                onChange={(e) => handleInput(e, "image")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id="savemodalbutton" type="submit" form="addExperienceForm">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExperienceModal;
