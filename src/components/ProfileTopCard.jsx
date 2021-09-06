import React, { Component } from 'react';
import { Container, Image, Card, Button } from 'react-bootstrap';

class ProfileTopCard extends Component {
    state = {
        user: [],
      };

      componentDidMount = async () => {
        try {
          var myHeaders = new Headers();
          myHeaders.append(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg"
          );
    
          var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };
          let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/profile/me",
            requestOptions
          );
    
          if (response.ok) {
            let userdetails = await response.json();
            this.setState({ user: userdetails });
          } else {
            console.log("error");
          }
        } catch (error) {
          console.log(error);
        }
      };

    render() {
        return (
            <Container>
                           
                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4D16AQHOVtvrNfDs2A/profile-displaybackgroundimage-shrink_200_800/0/1583686615635?e=1636588800&v=beta&t=thI_7pWSrHybQgGGFshRJOBzD4DLZDWKigk6TksLidA" />
                <Card.Body>
                <Image className="w-25" src={this.state.user.image} roundedCircle />    
                    <Card.Title>{this.state.user.name} {this.state.user.surname}</Card.Title>
                    <Card.Text>{this.state.user.title}</Card.Text>
                    <Card.Text><small className="text-muted">{this.state.user.area} <a href="">Contact info</a></small></Card.Text>
                    <Button className="mr-2" variant="primary">Message</Button>
                    <Button variant="outline-secondary">More</Button>

                </Card.Body>
                </Card>
                <p>{this.state.user.bio}</p>
            </Container>
        );
    }
}

export default ProfileTopCard;