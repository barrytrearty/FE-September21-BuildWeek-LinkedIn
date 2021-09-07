import React, { Component } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { Form, FormControl, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import "./EditModal.css"
import "./DeleteExperience.jsx"


function EditModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let url = window.location.href
    return (
      <div className="ml-auto">
       <a onClick={handleShow} className="editmodallink"><BiPencil/></a>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="px-4" closeButton>
            <Modal.Title id="contactnametext">Edit experience</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
       
        
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="12">
      Title
    </Form.Label>
    <Col sm="12">
      <Form.Control type="password" placeholder="Title" />
    </Col>
  </Form.Group>
</Form>
<Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="12">
      Employment type
    </Form.Label>
    <Col sm="12">
      <Form.Control type="password" placeholder="Please select" />
    </Col>
  </Form.Group>
</Form>

<Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="12">
      Company name
    </Form.Label>
    <Col sm="12">
      <Form.Control type="password" placeholder="Leaf" />
    </Col>
  </Form.Group>
</Form>

<Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="12">
      Location
    </Form.Label>
    <Col sm="12">
      <Form.Control type="password" placeholder="Berlin, Germany" />
    </Col>
  </Form.Group>
</Form>

<Form>
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={"I am currently working in this role"}
      />

    </div>
  ))}
  
</Form>

<Form.Label column sm="12">
      Start date
    </Form.Label>
    {[DropdownButton, DropdownButton].map((DropdownType, idx) => (
      <DropdownType
        as={ButtonGroup}
        key={idx}
        id={`dropdown-button-drop`}
        size="md"
        title="Start date"
        className="mr-2 startDate"
        
      >
      </DropdownType>
    ))}
    <Form.Label column sm="12">
      End date
    </Form.Label>
    {[DropdownButton, DropdownButton].map((DropdownType, idx) => (
      <DropdownType
        as={ButtonGroup}
        key={idx}
        id={`dropdown-button-drop`}
        size="md"
        title="End date"
        className="mr-2 startDate"
        
      >
      </DropdownType>
    ))}
          </Modal.Body>
          <Modal.Footer>
    <Button variant="secondary" className="modalButton">Delete experience</Button>
   
  </Modal.Footer>

        </Modal>
      </div>
    );
  }

export default EditModal;

