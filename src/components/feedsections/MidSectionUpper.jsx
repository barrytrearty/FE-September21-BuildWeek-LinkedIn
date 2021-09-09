import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./MidSection.css";
import { BiPhotoAlbum } from "react-icons/bi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { MdEvent } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import AddPost from "./AddPost";
import { useState, useEffect } from "react";

const userId = "611d2acd2d52620015b6de6e";
const endpointprofile = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;

const MidSectionUpper = () => {
  const [MyImage, setMyImage] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [imageUploaded, setimageUploaded] = useState(false);
  const [imageFile, setimageFile] = useState();
  const [imagePreview, setimagePreview] = useState();
  const [postContent, setPostContent] = useState("");

  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setimageFile();
    setimageUploaded(false);
  };
  const handleShowImageModal = () => setShowImageModal(true);

  const handleClosePostModal = () => {
    setShowPostModal(false);
    setShowImageModal(false);
  };
  const handleShowPostModal = () => {
    setShowImageModal(false);
    setShowPostModal(true);
  };

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
      let response = await fetch(endpointprofile, {
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

  useEffect(() => getMyProfile(), []);

  const endpoint = "https://striveschool-api.herokuapp.com/api/posts/";
  const createPost = async () => {
    try {
      let response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          text: postContent,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
        },
      });

      if (response.ok) {
        const hello = response.json();

        alert("Success!");
        // history.go(0);
      } else {
        alert("Error! Please complete the form!");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <br />

      {/* Upload Image Modal */}
      <Modal show={showImageModal} onHide={handleCloseImageModal}>
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
            onClick={handleCloseImageModal}
          >
            Cancel
          </Button>
          {imageUploaded ? (
            <Button
              className="ml-2"
              id="donemodalbutton"
              variant="primary"
              type="submit"
              onClick={handleShowPostModal}
            >
              Done
            </Button>
          ) : (
            <Button
              className="ml-2"
              id="donemodalbutton"
              variant="primary"
              type="submit"
              disabled={!imageUploaded}
            >
              Done
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Modal show={showPostModal} onHide={handleClosePostModal}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title id="contactnametext">Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <Row className="d-flex flex-row align-items-top">
            <Col>
              <img src={MyImage} className="mr-5 userImage" />
              <Button className="AuthorButton">James Sutcliffe</Button>
              <Button className="AuthorButton">Anyone</Button>
            </Col>
            <Col xs={12} className="mt-4">
              <InputGroup className="postContent">
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="What do you want to talk about?"
                  className="postContent"
                  onChange={(e) => setPostContent(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Image src={imagePreview} fluid />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button id="savemodalbutton" type="button" onClick={createPost}>
            Post
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
            onClick={handleShowImageModal}
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
