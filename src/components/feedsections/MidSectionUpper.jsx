import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
      setMyImage(myProfile.image)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getMyProfile(), []);


  return (
    <>
      <br />
      <Container fluid className=" MidSectionContainer mt-5">
        <Row className="text-center SpaceBetween">
          <Col xs={1} className="text-left mt-3">
            <img src={MyImage} className="userImage" />
          </Col>
          <Col xs={11} className="mt-3">
            <AddPost MyImage={MyImage}/>
          </Col>
        </Row>
        <Row className="text-center SpaceBetween">
          <Col xs="auto" className="my-2">
            <Button variant="light" className="d-flex flex-row IconAndText">
              <BiPhotoAlbum />
              <span>Photo</span>
            </Button>
          </Col>
          <Col xs="auto" className="my-2">
            <Button
              variant="light"
              className="d-flex flex-row IconAndText"
              onClick
            >
              <AiOutlineVideoCamera />
              <span>Video</span>
            </Button>
          </Col>
          <Col xs="auto" className="my-2">
            <Button
              variant="light"
              className="d-flex flex-row IconAndText"
              onClick
            >
              <MdEvent />
              <span>Event</span>
            </Button>
          </Col>
          <Col xs="auto" className="my-2">
            <Button
              variant="light"
              className="d-flex flex-row IconAndText"
              onClick
            >
              <RiArticleLine />
              <span>Write Article</span>
            </Button>
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
};

export default MidSectionUpper;
