import React, { Component } from 'react';
import { Container, Image, Card, Button, Row, Col } from 'react-bootstrap';

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
                           
                <Card style={{ width: '70%' }}>
                <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F10-ferdinand-stohr-149422-unsplash-1200x298.jpg" />
                <Image className="profileimage" src={this.state.user.image} roundedCircle />
                
                <Card.Body>
                <div style={{ height: '1.8em' }}></div>
                    <Row className="ml-1 mr-3">

                    <Col sm={9}>
                    <Card.Title className="mb-0" style={{ fontSize: "1.5em" }}>{this.state.user.name} {this.state.user.surname} <small className="text-muted">1st</small></Card.Title>
                    <Card.Text className="mb-0">{this.state.user.title}</Card.Text>
                    <Card.Text className="mb-0"><small className="text-muted">{this.state.user.area} <a style={{ fontWeight: "500" }} href="">Contact info</a></small></Card.Text>
                    <Card.Text><small className="text-muted"><a style={{ fontWeight: "500" }} href="">96 connections</a></small></Card.Text>
                    <Card.Text><small className="text-muted"><a style={{ fontWeight: "500", color: "inherit" }} href="">2 mutual connections: <span style={{ fontWeight: "400" }}>Magdalena Sochon and Tetiana Yaremko</span></a></small></Card.Text>
                    <Button className="mr-2 messagebutton px-3 py-1" variant="primary">Message</Button>
                    <Button className="morebutton px-3 py-1" variant="outline-secondary">More</Button>
                    </Col>

                    <Col className="bg-success" sm={3}>sm=3</Col>
                    </Row>
                
                    
                </Card.Body>
                </Card>

                <Card style={{ width: '70%' , marginTop: "1rem", paddingLeft: "15px"}}>
                <Card.Body>
                <Card.Title >About</Card.Title>
                <Card.Text>{this.state.user.bio}</Card.Text>
                </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default ProfileTopCard;