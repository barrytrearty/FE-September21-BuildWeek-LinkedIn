import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState, useCallback } from "react";

const deleteExperience = ({ userId, experienceId }) => {
  // e.preventDefault()

  // const userId = this.props.userId
  // const expId = this.state.experience._id
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const deleteThisExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2MzA5MTgwNDIsImV4cCI6MTYzMjEyNzY0Mn0.2hhEx_eDgxioUecToSSqJQuMR6ezl3BCgvP7z6HtkS4`,
          },
        }
      );
      if (response.ok) {
        // this.props.fetchExperiences();
        // this.props.onHide();
        console.log("Respponse ok")
      } else {
        console.log("Delete unsuccessful");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button  variant="secondary" type="button">
      Cancel
    </Button>
  );
};
export default deleteExperience;
