import {Button} from "react-bootstrap";


const deleteExperience = async () => {
    // e.preventDefault() 
  
    // const userId = this.props.userId
    // const expId = this.state.experience._id
    
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2MzA5MTgwNDIsImV4cCI6MTYzMjEyNzY0Mn0.2hhEx_eDgxioUecToSSqJQuMR6ezl3BCgvP7z6HtkS4`,
            }
        })
        if(response.ok) {
            this.props.fetchExperiences()
            this.props.onHide()
          } else {
            console.log("Delete unsuccessful")
        }
    } catch (err) {
        console.log(err)
    }

    return {

    }
  
}
  export default deleteExperience;
