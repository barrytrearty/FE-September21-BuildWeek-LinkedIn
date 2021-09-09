import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./MidSection.css"
import { useState, useEffect } from "react";
import { CgMathPlus } from "react-icons/cg";


const MidSection = () => {
  const [postsArray, setPostsArray] = useState([]);

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {console.log(postsArray[0])}

      <Card className="cardstyling text-center" style={{ height: "15vh" }}>
        <Card.Title>Start a post</Card.Title>
        <Card.Body>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

      <hr />
      <Card className="mt-3 mb-3">
    <Card.Body>
      <Row>
      <Col className="col-md-1">
    <Card.Img variant="top-left" height="30rem" src="https://cdn.tutsplus.com/net/uploads/legacy/2136_shopify/shopify-logo.png" />
      </Col>
      <Col className="col-md-9">
      <Card.Subtitle className="shopifysubtitle cardtitle mb-1">
        Shopify</Card.Subtitle>
      <Card.Text className="shopifytitle text-muted small">
       384,245 followers<br/>
       Promoted
      </Card.Text>
      </Col>
      </Row>
      <Row>
        <Col className="col-md-12">
          <Card.Text className="shopifytext mt-2">
            Join our fully remote Data team and update your profile location to: Internet,<br/>
            Everywhere.
          </Card.Text>
        </Col>
      </Row>
    </Card.Body>
    <Card.Img variant="bottom" src="https://www.bloggersideas.com/wp-content/uploads/2015/07/Shopify-Homepage.png" />
  </Card>
    
    

      {postsArray.map((post) => (
        <Card className="cardstyling" style={{ height: "auto" }} key={post._id}>
          <Card.Body>
            
            <div>
              <Col>
              <div className="border-bottom">
                <p>
                  <strong>{post.username}</strong> likes this
                </p>
              </div>
              
                <img src={post.image} alt="" />
              </Col>
              <Col>
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>{post.username}</strong>{" "}
                    <span className="text-muted">3rd+</span>
                    <div>{post.title} 45m</div>
                  </div>
                  <div className="mt-2">
                    Follow <CgMathPlus size={27} />
                  </div>
                </div>
              </Col>
              <div className="mt-3">
                <p>{post.text}</p>
              </div>
            </div>
            <div id="interaction">
              <div>32. 13 Comments</div>
              <div className="d-flex justify-content-around">
                <span>Like</span> <span>Comment</span> <span> Share </span>
                <span>Send</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
      </div>
      )
      }
      
export default MidSection;
