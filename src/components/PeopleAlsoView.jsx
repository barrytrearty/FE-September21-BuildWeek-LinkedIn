import { useState, useEffect } from "react";
import "./PeopleAlsoView.css";
import { Container, Button } from "react-bootstrap";
import PeopleRow from "./PeopleRow";
import "./ShowButton.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PeopleSection = ({sectionTitle}) => {
  const [peopleInfos, setPeopleInfos] = useState([]);
  const [show, setShow] = useState(true);

  //fetching to get image
  const getImage = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2MzA5MTgwNDIsImV4cCI6MTYzMjEyNzY0Mn0.2hhEx_eDgxioUecToSSqJQuMR6ezl3BCgvP7z6HtkS4",
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
    getImage();
  }, []);

  console.log(peopleInfos);
  return (
    <Container className="my-4">
        <h5>{sectionTitle}</h5>
      <PeopleRow peopleInfos={peopleInfos} show={show} />
      <div className="ShowDiv text-center">
        <Button
          type="button"
          id="ShowButton"
        //   variant="outline-secondary"
          onClick={() => setShow(!show)}
        >
          {show && (
            <>
              Show More <IoIosArrowDown />
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
  );
};

export default PeopleSection;


