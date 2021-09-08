import React from "react";
import { Card } from "react-bootstrap";

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
          <Card.Title>News Feed</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MidSection;
