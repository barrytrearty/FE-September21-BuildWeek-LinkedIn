import React from "react";
import { Container, Row, Col, Button, Modal, Image } from "react-bootstrap";
import "./MidSection.css";
import { BiPhotoAlbum } from "react-icons/bi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { MdEvent } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import AddPost from "./AddPost";
import { useState, useEffect } from "react";

const userId = "611d2acd2d52620015b6de6e";
const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;

const MidSectionUpper = () => {
  const [MyImage, setMyImage] = useState("");
  const [show, setShow] = useState(false);
  const [imageUploaded, setimageUploaded] = useState(false);
  const [imageFile, setimageFile] = useState();
  const [imagePreview, setimagePreview] = useState();

  const handleClose = () => {
    setShow(false);
    setimageFile();
    setimageUploaded(false);
  };
  const handleShow = () => setShow(true);

  const imageUpload = (e) => {
    if (e.target.files.length == 0) {
      console.log("No image selected!");
    } else {
      setimageFile(e.target.files[0]);
      let imagepreview = URL.createObjectURL(e.target.files[0]);
      setimagePreview(imagepreview);
      setimageUploaded(true);
    }
  };

  const getMyProfile = async () => {
    try {
      let response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
        },
      });
      let myProfile = await response.json();
      setMyImage(myProfile.image);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(imageUploaded);
  useEffect(() => getMyProfile(), []);
  return (
    <>
      <br />

      {/* Upload Image Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Edit your photo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 d-flex py-5">
          {imageUploaded ? (
            <Image src={imagePreview} fluid />
          ) : (
            <div className="m-auto imageuploadtext text-primary px-2 pt-1">
              <label for="file-upload" className="custom-file-upload">
                Select images to share
              </label>
              <input
                className="d-none"
                id="file-upload"
                type="file"
                onChange={(e) => imageUpload(e)}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="px-4" closeButton>
          <Button
            id="cancelmodalbutton"
            className="ml-3"
            variant="outline-primary"
            type="submit"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="ml-2"
            id="donemodalbutton"
            variant="primary"
            type="submit"
            disabled={!imageUploaded}
          >
            Done
          </Button>
        </Modal.Footer>
      </Modal>

      <Container fluid className=" MidSectionContainer mt-5">
        <Row className="text-center SpaceBetween">
          <Col xs={1} className="text-left mt-3">
            <img src={MyImage} className="userImage" />
          </Col>
          <Col xs={11} className="mt-3">
            <AddPost MyImage={MyImage} />
          </Col>
        </Row>
        {/* <Row className="text-center SpaceBetween"> */}
        {/* <Col xs="auto" className="my-2"> */}
        <div className="d-flex justify-content-between mt-3">
          <Button
            onClick={handleShow}
            variant="light"
            className="d-flex flex-row IconAndText"
          >
            <BiPhotoAlbum />
            <span>Photo</span>
          </Button>
          {/* </Col> */}
          {/* <Col xs="auto" className="my-2"> */}
          <Button
            variant="light"
            className="d-flex flex-row IconAndText"
            onClick
          >
            <AiOutlineVideoCamera />
            <span>Video</span>
          </Button>
          {/* </Col> */}
          {/* <Col xs="auto" className="my-2"> */}
          <Button
            variant="light"
            className="d-flex flex-row IconAndText"
            onClick
          >
            <MdEvent />
            <span>Event</span>
          </Button>
          {/* </Col> */}
          {/* <Col xs="auto" className="my-2"> */}
          <Button
            variant="light"
            className="d-flex flex-row IconAndText"
            onClick
          >
            <RiArticleLine />
            <span>Write Article</span>
          </Button>
          {/* </Col> */}
          {/* </Row> */}
        </div>
      </Container>
      {/* <hr /> */}
    </>
  );
};

export default MidSectionUpper;
