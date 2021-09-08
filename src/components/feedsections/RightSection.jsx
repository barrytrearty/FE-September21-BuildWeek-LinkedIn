import React from "react";
import { Card } from "react-bootstrap";

const RightSection = () => {
  return (
    <div>
      <Card
        className="cardstyling text-center"
        style={{ height: "30vh", minWidth: "15vw" }}
      >
        <Card.Body>
          <Card.Title>LinkedIn News</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="cardstyling text-center"
        style={{ height: "25vh", minWidth: "15vw" }}
      >
        <Card.Body>
          <Card.Title>Today's top courses</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <p className="text-center bg-white">Footer</p>
    </div>
  );
};

export default RightSection;
