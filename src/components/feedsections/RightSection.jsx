import React from "react";
import { Card } from "react-bootstrap";

import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import RightSectionRow from "./RightSectionRow";
// import "./components/ShowButton.css";
import { IoIosArrowDown, IoIosArrowDropright, IoIosArrowUp } from "react-icons/io";
// import "./components/PeopleSection.css";
import "./RightSection.css";
import FeedFooter from "./FeedFooter";

const RightSection = ({ sectionTitle }) => {
  const [peopleInfos, setPeopleInfos] = useState([]);
  const [show, setShow] = useState(true);

  const getInfo = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setPeopleInfos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  console.log(peopleInfos);
  return (
    <div>
   <Container  style={{ minWidth: "25vw" }} className="mr-5 pl-2 mb-2 PeopleContainer container-fluid">
      <h5 className="mt-3">{sectionTitle}Add to your feed</h5>
      <RightSectionRow peopleInfos={peopleInfos} show={show} />
      <div className="ShowDiv text-left p-0">
        <Button
          type="button"
          id="ShowButton"
          //   variant="outline-secondary"
          onClick={() => setShow(!show)}
        >
          {show && (
            <>
              View all recommendations <IoIosArrowDropright size={25}/>
            </>
          )}
          {!show && (
            <>
              Show Less <IoIosArrowUp />
            </>
          )}
        </Button>
      </div>
      </Container>
    
      <Card
        className="cardstyling text-left"
        style={{ height: "33vh", minWidth: "25vw" }}
      >
        <Card.Body>
        <h5 className="mb-3">{sectionTitle}Today's top courses</h5>
          <Card.Text>
          
<Card.Subtitle id="cardsubtitle" class="card-text">1. What is graphic design?</Card.Subtitle>
<Card.Text id="cardtext" className="text ml-3">Graphic design</Card.Text>
<Card.Subtitle id="cardsubtitle" class="card-text">1. What is graphic design?</Card.Subtitle>
<Card.Text id="cardtext" className="text ml-3">Graphic design</Card.Text>
<Card.Subtitle id="cardsubtitle" class="card-text">1. What is graphic design?</Card.Subtitle>
<Card.Text id="cardtext" className="text ml-3">Graphic design</Card.Text>
<Card.Text className="text-left mr-2">Show more on Linkedin Learning<IoIosArrowDropright size={25} className="ml-2"/></Card.Text>
          </Card.Text>
         
        </Card.Body>
        
      
      </Card>
      <FeedFooter>
        Footer
      </FeedFooter>
     
    </div>
  );
};

export default RightSection;


