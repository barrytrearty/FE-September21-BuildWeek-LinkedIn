import React from "react";
import { Card } from "react-bootstrap";

const LeftSection = () => {
  return (
    <div>
      <Card className="cardstyling text-center" style={{ height: "32vh" }}>
        <Card.Body>
          <Card.Title>Profile Section</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardstyling text-center" style={{ height: "20vh" }}>
        <Card.Body>
          <Card.Title>Page Admin Section</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardstyling text-center" style={{ height: "14vh" }}>
        <Card.Body>
          <Card.Title>Groups and Events</Card.Title>
          <Card.Text>Some quick example text.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeftSection;
