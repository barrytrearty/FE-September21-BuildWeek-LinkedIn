import React from "react";
import { Card, Col } from "react-bootstrap";

const MidSection = () => {
  return (
    <div>
      <Card className="cardstyling text-center" style={{ height: "15vh" }}>
        <Card.Body>
          <Card.Title>Start a post</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
      <hr />
      <Card className="cardstyling text-center" style={{ height: "75vh" }}>
        <Card.Body>
          <div>
            <div className="border-bottom">
              <strong>Mark Metry</strong> supports this
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
          <div>
            <div>Are you taking a step forward today?</div>
            <div>
              The author can see how you vote. <a href="#learn">Learn More</a>{" "}
            </div>
            <div>
              <button>Yes 100%</button>
              <button>I will try...</button>
              <button>Nope</button>
            </div>
            <div>132 votes. 1w left</div>
          </div>
          <div>EMOJIS 32. 13 Comments</div>

          <div>Like Comment Share Send</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MidSection;
