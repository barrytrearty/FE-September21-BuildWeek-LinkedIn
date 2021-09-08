import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState, useCallback } from "react";

const DeleteExperience = ({ userId, experienceId }) => {
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
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg",
          },
        }
      );
      if (response.ok) {
        // this.props.fetchExperiences();
        // this.props.onHide();
        console.log("Response ok")
      } else {
        console.log("Delete unsuccessful");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button onClick={deleteThisExperience}  variant="secondary" type="button">
      Delete
    </Button>
  );
};
export default DeleteExperience;
