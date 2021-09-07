import React, { Component, useEffect } from "react";

import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { parseISO, format } from "date-fns";

function AddExperienceModal(props) {
  const [show, setShow] = useState(false);
  // const [startDate, setStartDate] = useState({ year: "", month: "" });
  // const [endDate, setEndDate] = useState({ year: "", month: "" });

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: { year: "", month: "" },
    endDate: { year: "", month: "" },
    description: "",
    area: "",
    company: "",
    image: "",
  });

  const [currentlyWorking, setcurrentlyWorking] = useState(false);

  let years = [];
  for (let i = 2021; i >= 1921; i--) {
    years.push(i);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // console.log(startDate, endDate);
    const parsedDate = format(
      new Date(experience.startDate.year, experience.startDate.month, 1),
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    );
    console.log(parsedDate);
  }, [experience.startDate]);

  useEffect(() => {
    // console.log(startDate, endDate);
    const parsedDate = format(
      new Date(experience.endDate.year, experience.endDate.month, 1),
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    );
    console.log(parsedDate);
  }, [experience.endDate]);

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
    if (experience.endDate === "") {
      setExperience({ ...experience, endDate: null });
    }
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
                <option key="-1" value="-1">
                  Month
                </option>
                <option value="0">Jan</option>
                <option value="1">Feb</option>
                <option value="2">Mar</option>
                <option value="3">Apr</option>
                <option value="4">May</option>
                <option value="5">Jun</option>
                <option value="6">Jul</option>
                <option value="7">Aug</option>
                <option value="8">Sep</option>
                <option value="9">Oct</option>
                <option value="10">Nov</option>
                <option value="11">Dec</option>
              </Form.Control>

              <Form.Control
                className="border-dark"
                size="sm"
                as="select"
                onChange={(e) => handleDateInput(e, "startDateYear")}
              >
                <option>Year</option>
                {years.map((year) => (
                  <option>{year}</option>
                ))}
              </Form.Control>
            </div>

            <small>End date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                className="mr-2 border-dark"
                size="sm"
                as="select"
                onChange={(e) => handleDateInput(e, "endDateMonth")}
              >
                <option key="-1" value="-1">
                  Month
                </option>
                <option value="0">Jan</option>
                <option value="1">Feb</option>
                <option value="2">Mar</option>
                <option value="3">Apr</option>
                <option value="4">May</option>
                <option value="5">Jun</option>
                <option value="6">Jul</option>
                <option value="7">Aug</option>
                <option value="8">Sep</option>
                <option value="9">Oct</option>
                <option value="10">Nov</option>
                <option value="11">Dec</option>
              </Form.Control>

              <Form.Control
                disabled={currentlyWorking}
                className="border-dark"
                size="sm"
                as="select"
                onChange={(e) => handleDateInput(e, "endDateYear")}
              >
                <option>Year</option>
                {years.map((year) => (
                  <option>{year}</option>
                ))}
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
