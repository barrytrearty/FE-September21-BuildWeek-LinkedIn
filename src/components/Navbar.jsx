import React from "react";
import LinkedInLogo from "../data/linkedin_logo.png";
import "./Navbar.css";
import NavbarProfile from './NavbarProfile'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Card,
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
import NavbarProfileImage from "./NavbarProfileImage";




class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "4.2rem",
          marginBottom: "2px",
        }}
      >
        <Container className="pt-0">
          <div className="row">
            <div className="col-md-12">
              <Navbar variant="light" expand="lg" sticky="top">
                <Link to="/feed">
                  <Navbar.Brand className="mb-5">
                    <a className="mb-5" href="#">
                      <img
                        className="mb-5 ml-1 pb-1"
                        src={LinkedInLogo}
                        width="45"
                        height="45"
                        alt=""
                      />
                    </a>
                  </Navbar.Brand>
                </Link>


                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <div className="mt-1 ml-5">
                      <Nav className="row-md-12 ml-5 mb-5">
                        <Nav.Link href="/">
                          <FontAwesomeIcon
                            icon={faHouseUser}
                            className="ml-2 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Home
                        </Nav.Link>
                        <Nav.Link href="/">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="ml-4 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          My Network
                        </Nav.Link>
                        <Nav.Link href="/">
                          <FontAwesomeIcon
                            icon={faSuitcase}
                            className="ml-2 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Jobs
                        </Nav.Link>
                        <Nav.Link href="/">
                          <FontAwesomeIcon
                            icon={faCommentDots}
                            className="ml-4 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Messaging
                        </Nav.Link>
                        <Nav.Link href="/">
                          <FontAwesomeIcon
                            icon={faBell}
                            className="ml-4 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Notifications
                        </Nav.Link>
                        
                        <div className="ml-0">
                        <NavbarProfileImage/>

                          <NavDropdown
                            title="Me"
                            id="basic-nav-dropdown"
                            className="ml-2"
                          >
                            <NavbarProfile/>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">
                              Account
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              Settings and Privacy
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              Help
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                              Language
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.5">
                              Manage
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">
                              Posts and Activity
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">
                              Company
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.8">
                              Job Posting Account
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.9">
                              Sign Out
                            </NavDropdown.Item>
                          </NavDropdown>
                        </div>

                        <div className="ml-2">
                          <FontAwesomeIcon
                            className="ml-3"
                            icon={faTable}
                            color="#4d4d4d"
                          />
                          <br />
{/*
                <div className="mb-5">
                  <Form inline>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2 mb-5"
                    />
                  </Form>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <div className="mt-1 ml-5">
                    <Nav className="row-md-12 ml-5 mb-5">
                      <Nav.Link href="/feed">
                        <FontAwesomeIcon
                          icon={faHouseUser}
                          className="ml-2 navicon"
                          color="#4d4d4d"
                        />
                        <br />
                        Home
                      </Nav.Link>
                      <Nav.Link href="/mynetwork">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="ml-4 navicon"
                          color="#4d4d4d"
                        />
                        <br />
                        My Network
                      </Nav.Link>
                      <Nav.Link href="/">
                        <FontAwesomeIcon
                          icon={faSuitcase}
                          className="ml-2 navicon"
                          color="#4d4d4d"
                        />
                        <br />
                        Jobs
                      </Nav.Link>
                      <Nav.Link href="/">
                        <FontAwesomeIcon
                          icon={faCommentDots}
                          className="ml-4 navicon"
                          color="#4d4d4d"
                        />
                        <br />
                        Messaging
                      </Nav.Link>
                      <Nav.Link href="/">
                        <FontAwesomeIcon
                          icon={faBell}
                          className="ml-4 navicon"
                          color="#4d4d4d"
                        />
                        <br />
                        Notifications
                      </Nav.Link>

                      <div className="ml-4">
                        <NavDropdown
                          title="Me"
                          id="basic-nav-dropdown"
                          className="mt-3"
                        >
                          <Button
                            className="connectbutton ml-4"
                            variant="outline-primary"
                            href="/me"
                          >
                            View Profile
                          </Button>
                          <NavDropdown.Item href="#action/3.1">
                            Account
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Settings and Privacy
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">
                            Help
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">
                            Language
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.5">
                            Manage
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.6">
                            Posts and Activity
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.7">
                            Company
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.8">
                            Job Posting Account
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.9">
                            Sign Out
                          </NavDropdown.Item>
                        </NavDropdown>
                      </div>

                      <div className="ml-5">
                        <FontAwesomeIcon
                          className="ml-3"
                          icon={faTable}
                          color="#4d4d4d"
                        />
<br /> */}


                        <NavDropdown
                          title="Work"
                          className="mb-5"
                          id="basic-nav-dropdown"
                        >
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
                      </div>
                      <Nav.Link
                        className="ml-2"
                        style={{ color: "#996c02" }}
                        href="/"
                      >
                        Try Premium for
                        <br />
                        <p className="ml-4">free</p>
                      </Nav.Link>
                    </Nav>
                  </div>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                  <Profile />
                </Route>
              </Switch>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default BootstrapNavbar;
