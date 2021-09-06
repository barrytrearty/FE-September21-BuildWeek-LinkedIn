import React from "react";
import LinkedInLogo from "../data/linkedin_logo.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import Profile from "../pages/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faSuitcase,
  faCommentDots,
  faTable,
  faHouseUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "white", height: "4rem" }}>
        <Container className="px-3">
          <div className="row">
            <div className="col-md-12">
              <Router>
                <Navbar variant="light" expand="lg" sticky="top">
                  <Navbar.Brand>
                    <a href="#">
                      <img src={LinkedInLogo} width="40" height="40" alt="" />
                    </a>
                  </Navbar.Brand>
                  <Form inline>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                  </Form>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="row-md-12 ml-auto">
                      <Nav.Link href="/">
                        <FontAwesomeIcon icon={faHouseUser} />
                        Home
                      </Nav.Link>
                      <Nav.Link href="/">
                        <FontAwesomeIcon icon={faUser} />
                        My Network
                      </Nav.Link>
                      <Nav.Link href="/">
                        <FontAwesomeIcon icon={faSuitcase} />
                        Jobs
                      </Nav.Link>
                      <Nav.Link href="/">
                        <FontAwesomeIcon icon={faCommentDots} />
                        Messaging
                      </Nav.Link>
                      <Nav.Link href="/">
                        <FontAwesomeIcon icon={faBell} />
                        Notifications
                      </Nav.Link>

                      <NavDropdown title="Me" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="Work" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                <br />
                <Switch>
                  <Route exact path="/">
                    <Profile />
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default BootstrapNavbar;
