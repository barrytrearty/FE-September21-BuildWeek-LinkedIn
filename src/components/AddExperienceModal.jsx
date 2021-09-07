import React, { Component, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { parseISO, format } from "date-fns";

function AddExperienceModal(props) {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState({ year: "", month: "" });
  const [endDate, setEndDate] = useState({ year: "", month: "" });

  let years = [];
  for (let i = 2021; i >= 1921; i--) {
    years.push(i);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // console.log(startDate, endDate);
    const parsedDate = format(
      new Date(startDate.year, startDate.month, 1),
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    );
    console.log(parsedDate);
  }, [startDate]);

  useEffect(() => {
    // console.log(startDate, endDate);
    const parsedDate = format(
      new Date(endDate.year, endDate.month, 1),
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    );
    console.log(parsedDate);
  }, [endDate]);

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
          <Form>
            <Form.Group className="mb-4" controlId="formJobTitle">
              <Form.Label className="mb-0">
                <small>Title*</small>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Ex: Retail Sales Manager"
                className="border border-dark"
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

            <Form.Group className="mb-4" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I am currently working in this role"
                size="lg"
              />
            </Form.Group>

            <small>Start date*</small>
            <div className="d-flex mb-4">
              <Form.Control
                value={startDate.month}
                className="mr-2 border border-dark"
                size="sm"
                as="select"
                placeholder="Month"
                onChange={(e) =>
                  setStartDate({ ...startDate, month: e.target.value })
                }
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
                value={startDate.year}
                className="border-dark"
                size="sm"
                as="select"
                onChange={(e) =>
                  setStartDate({ ...startDate, year: e.target.value })
                }
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
                value={endDate.month}
                className="mr-2 border-dark"
                size="sm"
                as="select"
                placeholder="Month"
                onChange={(e) =>
                  setEndDate({ ...endDate, month: e.target.value })
                }
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
                value={endDate.year}
                className="border-dark"
                size="sm"
                as="select"
                onChange={(e) =>
                  setEndDate({ ...endDate, year: e.target.value })
                }
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
              <Form.Control className="border-dark" as="textarea" rows={3} />
            </Form.Group>

            <Form.Group>
              <Form.File id="imageUpload" label="Media" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id="savemodalbutton" variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExperienceModal;
