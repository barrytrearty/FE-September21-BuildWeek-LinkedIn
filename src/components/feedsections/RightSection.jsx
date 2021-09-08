import React from "react";
import { Card } from "react-bootstrap";

import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import RightSectionRow from "./RightSectionRow";
// import "./components/ShowButton.css";
import { IoIosArrowDown, IoIosArrowDropright, IoIosArrowUp } from "react-icons/io";
// import "./components/PeopleSection.css";
import "./RightSection.css";


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
   <Container  style={{ minWidth: "23vw" }} className="mr-5 pl-2 mb-2 PeopleContainer container-fluid">
      <h5 className="mt-3 ml-2">{sectionTitle}Add to your feed</h5>
      
      <RightSectionRow peopleInfos={peopleInfos} show={show} />
      <div className="ShowDiv text-left p-0">
        <Button
          type="button"
          id="ViewButton"
          //   variant="outline-secondary"
          onClick={() => setShow(!show)}
        >
          {show && (
            <>
              View all recommendations <IoIosArrowDropright size={22} className="ml-1"/>
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
        style={{ height: "36vh", minWidth: "23vw" }}
      >
        <Card.Body>
        <h5 className="mb-3">{sectionTitle}Today's top courses</h5>
          <Card.Text>
          
<Card.Subtitle id="cardsubtitle" class="card-text">1. What is graphic design?</Card.Subtitle>
<Card.Text id="cardtext" className="text ml-3">Sean Adams</Card.Text>
<Card.Subtitle id="cardsubtitle" class="card-text">2. Customer Service Foundations</Card.Subtitle>
<Card.Text id="cardtext" className="text ml-3">Jeff Toister</Card.Text>
<Card.Subtitle id="cardsubtitle" class="card-text">3. Uncovering Your Authentic Self at Work</Card.Subtitle>
<Card.Text id="cardtext" className="text ml-3">Kenji Yoishino</Card.Text>
<Card.Text className="learning text-left mr-2">Show more on Linkedin Learning<IoIosArrowDropright size={22} className="ml-2"/></Card.Text>
          </Card.Text>
         
        </Card.Body>
        
      
      </Card>
      
      <footer className="footer ml-4 mt-4">
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="row justify-content-center">
                <p>
                About
                </p>
                
                  <p>Accessibility
                    </p>
                <p>Help Center</p>
                </div>
                <div className="row justify-content-center">
                <p>Impressum</p>
                <p>Privacy and Terms</p>
            </div>
            <div className="row justify-content-center">
                <p>Ad Choices</p>
                <p>Advertising</p>
            </div>
            <div className="row justify-content-center">
                <p>Business Services</p>
                <p>Get the Linkedin app</p>
            </div>
            <div className="row justify-content-center">
                <p>More</p>
                
            </div>
    
          
  
    <div className="row">
      <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
                width="60"
                height="15"
                className="d-inline-block align-top mr-2 ml-2"
            /><p>Linkedin Corporation © 2021</p>
            
    </div>
    </div>
</div>
    

</footer>
     
    </div>
 
  );
};

export default RightSection;


