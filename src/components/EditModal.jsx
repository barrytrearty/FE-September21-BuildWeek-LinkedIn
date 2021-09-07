import React, { Component } from "react";
import {
  Modal,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import "./EditModal.css";
import "./DeleteExperience.jsx";
import { FiEdit2 } from "react-icons/fi";
import { useEffect, useState, useCallback } from "react";

function EditExperienceModal({ userId, experienceId }) {
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

  const getExperience = useCallback(async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`,

        {
          headers: {
            method: "PUT",
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

  return (
    <>
      <a onClick={handleShow} className="modallink">
        <FiEdit2 size={27} />
      </a>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Edit experience</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <Form>
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
              <Form.Control className="border-dark" type="textarea" rows={3} />
            </Form.Group>

            <Form.Group>
              <Form.File id="imageUpload" label="Media" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id="savemodalbutton" variant="primary" type="button">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditExperienceModal;
