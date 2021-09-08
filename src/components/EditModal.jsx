import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./EditModal.css";
import { FiEdit2 } from "react-icons/fi";
import { useEffect, useState, useCallback } from "react";
import "./Edit.css";
import deleteExperience from './deleteExperience'

function EditModal({ userId, experienceId }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // preload this info in edit modal
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  //fetching existing info

  const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`;

  const getExperience = useCallback(async () => {
    try {
      const response = await fetch(
        endpoint,

        {
          headers: {
            method: "GET",
            Authorization:
              "Bearer   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRole(data.role);
        setCompany(data.company);
        setLocation(data.location);
        setStartDate(data.startDate);
        setEndDate(data.endDate);
        setDescription(data.description);
      }
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    getExperience();
  }, [getExperience]);

  console.log(role);
  console.log(company);

  // edit info
  const handleExperience = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        // fill in the () here with the states
        body: JSON.stringify(),
        headers: {
          Authorization:
            "Bearer   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const ExperienceResponse = await response.json();
        console.log("Profile is updated.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <a onClick={handleShow} className="modallink ml-auto">
        <FiEdit2 className="EditIcon" />
      </a>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Edit experience</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <Form onSubmit={handleExperience}>
            {/* title */}
            <Form.Group className="mb-4" controlId="formJobTitle">
              <Form.Label className="mb-0">
                <small>Title*</small>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Ex: Retail Sales Manager"
                className="border border-dark"
                defaultValue={role}
                onChange={(e) => setRole(e.target.value)}
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
                defaultValue={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formJobLocation">
              <Form.Label className="mb-0">
                <small>Location</small>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                className="border border-dark"
                placeholder="Ex: London, United Kingdom"
                defaultValue={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group className="mb-4" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I am currently working in this role"
                size="lg"
              />
            </Form.Group> */}

            <small>Start date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                className="mr-2 border border-dark"
                size="sm"
                type="text"
                defaultValue={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              {/* <option>Month</option>
              </Form.Control>

              <Form.Control className="border-dark" size="sm" as="select">
                <option>Year</option> */}
              {/* </Form.Control>  */}
            </div>

            <small>End date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                className="mr-2 border-dark"
                size="sm"
                type="text"
                defaultValue={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              {/* <option>Month</option>
              </Form.Control>

              <Form.Control className="border-dark" size="sm" as="select">
                <option>Year</option>
              </Form.Control> */}
            </div>

            <Form.Group
              className="mb-3 border-dark"
              controlId="formJobDescription"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="border-dark"
                type="textarea"
                rows={3}
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.File id="imageUpload" label="Media" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <deleteExperience userId={userId} experienceId={experienceId} />

          <Button id="savemodalbutton" variant="primary" type="submit">
            Edit
          </Button>
          <Button id="savemodalbutton" variant="secondary" type="button">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
