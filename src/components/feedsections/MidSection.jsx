import React, { useState, useEffect } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import "./MidSection.css";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiSendPlaneFill, RiShareForwardLine } from "react-icons/ri";
import MyLoader from "./MyLoader";
import NewsFeedItem from "./NewsFeedItem";
// import {RiShareForwardLine}

const MidSection = () => {
  const [postsArray, setPostsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      let response = await fetch(
        `//striveschool-api.herokuapp.com/api/posts/ `,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZTBiMTJkNTI2MjAwMTViNmRjOGQiLCJpYXQiOjE2MzEwMTE2NDMsImV4cCI6MTYzMjIyMTI0M30.wxo-L7vPKDv0DeIAf5S_h2cwEHJqqvPcL0Il7sQlPYs",
          },
        }
      );
      let postsProm = await response.json();
      setPostsArray(postsProm);
      console.log("Posts" + postsArray);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <hr />
      {isLoading ? (
        <div>
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
        </div>
      ) : (
        ""
      )}

      <Card className="mt-3 mb-3">
        <Card.Body>
          <Row>
            <Col className="col-md-1">
              <Card.Img
                variant="top-left"
                height="30rem"
                src="https://cdn.tutsplus.com/net/uploads/legacy/2136_shopify/shopify-logo.png"
              />
            </Col>
            <Col className="col-md-9">
              <Card.Subtitle className="shopifysubtitle cardtitle mb-1">
                Shopify
              </Card.Subtitle>
              <Card.Text className="shopifytitle text-muted small">
                384,245 followers
                <br />
                Promoted
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-12">
              <Card.Text className="shopifytext mt-2">
                Join our fully remote Data team and update your profile location
                to: Internet,
                <br />
                Everywhere.
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="https://www.bloggersideas.com/wp-content/uploads/2015/07/Shopify-Homepage.png"
        />
        <div
          id="interaction"
          className="d-flex justify-content-around flex-end mb-1"
        >
          {/* <span> */}
          <Button variant="light">
            <AiOutlineLike /> Like
          </Button>
          {/* </span> */}
          <Button variant="light">
            <BiCommentDetail /> Comment
          </Button>
          <Button variant="light">
            <RiShareForwardLine /> Share
          </Button>
          <Button variant="light">
            <RiSendPlaneFill /> Send
          </Button>
        </div>
      </Card>

      {postsArray.map((post) => NewsFeedItem(post))}
      {/* {setIsLoading(false)} */}
    </div>
  );
};

export default MidSection;
