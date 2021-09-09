
import React, { useState, useEffect } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import "./MidSection.css";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiSendPlaneFill, RiShareForwardLine } from "react-icons/ri";
// import {RiShareForwardLine}


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
        <Card className="cardstyling" key={post._id}>
          <Card.Body>
            <div>
              <div className="border-bottom">
                <p>
                  <strong>{post.username}</strong> likes this
                </p>
              </div>
              <Col>
                <img src={post.image} alt="" />
              </Col>
              <Col>
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>{post.username}</strong>{" "}
                    <span className="text-muted">3rd+</span>
                    <div>{post.title} 45m</div>
                  </div>
                  <div id="follow" className="mt-2">
                    <CgMathPlus size={27} /> <span>Follow</span>
                  </div>
                </div>
              </Col>
              <div className="mt-3">
                <p>{post.text}</p>
              </div>
            </div>
          </Card.Body>
          {/* <div> */}
          <div
            id="interaction"
            className="d-flex justify-content-around flex-end mb-1"
          >
            <span>
              <AiOutlineLike /> Like
            </span>
            <span>
              <BiCommentDetail /> Comment
            </span>
            <span>
              <RiShareForwardLine /> Share
            </span>
            <span>
              <RiSendPlaneFill /> Send
            </span>
          </div>
          {/* </div> */}
        </Card>
      ))}

      {/* <Card className="cardstyling" style={{ height: "75vh" }}>
        <Card.Body>
          <div>
            <div className="border-bottom">
              <p>
                <strong>Mark Metry</strong> supports this
              </p>
            </div>
            <Col>
              <img src="" alt="" />
            </Col>
            <Col>
              <div>
                {" "}
                <strong>Mark Metry</strong> Following
              </div>
              <div>
                {" "}
                Forbes Featured Top 100 Podcasts Bestselling Author TEDx
                Speaker. 45m. Edited
              </div>
            </Col>
            <div>
              {" "}
              <p>I didn't have a plan</p>
              <p>My mental health was terribly neglected</p>
              <p>...see more</p>
            </div>
          </div>
          <div className="px-3 border">
            <div>Are you taking a step forward today?</div>
            <div>
              The author can see how you vote. <a href="#learn">Learn More</a>{" "}
            </div>
            <div>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded"
                block
              >
                Yes 100%
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded"
                block
              >
                I will try...
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded"
                block
              >
                Nope
              </Button>
            </div>
            <div>132 votes. 1w left</div>
          </div>
          <div>32. 13 Comments</div>

          <div className="d-flex justify-content-around">
            <span>Like</span> <span>Comment</span> <span> Share </span>
            <span>Send</span>
          </div>
        </Card.Body>
      </Card> */}
    </div>
  );
};


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
