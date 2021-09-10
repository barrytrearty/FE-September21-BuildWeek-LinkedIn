/* import React from "react";
import LinkedInLogo from "../data/linkedin_logo.png";
import "./Navbar.css";
import NavbarProfile from "./NavbarProfile";
import SearchBar from "./SearchBar";

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
  InputGroup,
  Button,
  Container,
  Card,
  Col,
  Row,
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
<<<<<<< Updated upstream
      <Container className="navContainer d-flex flex-row justify-content-center">
        {/* <div className="row" style={{ height: "3.5rem"}}> */}

        <Row className="NavRow">
          <Col>
            <Navbar variant="light" expand="lg" sticky="top" id="navbar">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <div className="navicons" id="navicons">
                  <Nav id="navbar">
                    <div className="d-flex justify-content-between NavDiv">
                      <Link to="/feed" >
                        <Navbar.Brand classname="logodiv">
                          <a href="#" id="navbarlogo">
                            <img
                              className="pb-1 LinkedInLogo"
                              src={LinkedInLogo}
                              alt=""
                              id="navbarlogo"
                            />
                          </a>
                        </Navbar.Brand>
                      </Link>

                   <div className="mx-3 mt-2">
                        <InputGroup className="InputSearch ml-0">
                          <FormControl
                            placeholder="Search..."
                            aria-label="Searchbar"
                            aria-describedby="basic-addon1"
                            className="SearchBar"
                          />
                        </InputGroup>
                   </div>
                      <div className="d-flex flex-row NavLogos ">
                        <Nav.Link style={{ height: "5vh" }} href="/">
                          <FontAwesomeIcon
                            icon={faHouseUser}
                            className="ml-2 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Home
                        </Nav.Link>

                        <Nav.Link style={{ height: "5vh" }} href="/">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="ml-4 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          My Network
                        </Nav.Link>
=======
      <div className="scrolleddiv"
        style={{
          backgroundColor: "white",
          height: "4rem",
          width:"100rem",
          marginBottom: "0.5rem",
          paddingTop: "0rem",
          position: "fixed",
	top: 0,

        }}
        
      >
         <Container className="mb-0">
           
    


          <div className="row" style={{ height: "3.5rem"}}>
            <div className="col-md-12">



              <Navbar variant="light" expand="lg" fixed="top" id="navbar" className="mr-1">
              
              
>>>>>>> Stashed changes

                        <Nav.Link style={{ height: "5vh" }} href="/">
                          <FontAwesomeIcon
                            icon={faSuitcase}
                            className="ml-2 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Jobs
                        </Nav.Link>

<<<<<<< Updated upstream
                        <Nav.Link style={{ height: "5vh" }} href="/">
                          <FontAwesomeIcon
                            icon={faCommentDots}
                            className="ml-4 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Messaging
                        </Nav.Link>
=======
                <Link to="/feed">
                  <Navbar.Brand className="mr-3">
                    <a className="mb-5" href="#" id="navbarlogo">
                      <img
                        className="pb-1"
                        src={LinkedInLogo}
                        width="43"
                        height="43"
                        alt=""
                        id="navbarlogo"
                      />
                    </a>
                  </Navbar.Brand>
                </Link>
                  <div className="searchbar">
                <Form
            inline
            className="align-items-center"
            style={{ height: "40px" }}
          >
            <Col xs="auto" className="px-0">
              <InputGroup className="flex-row">
                <InputGroup.Text
                  style={{
                    height: "38px",
                    width: "40px",
                    borderRadius: "0.25rem 0px 0px 0.25rem",
                    backgroundColor: "White",
                    borderRight: 0,
                    paddingLeft: "0.8rem",
                    paddingRight: "0",
                    border: "0",
                    backgroundColor: "#EEF3F8",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ height: "15px", width: "15px" }}
                    icon={faSearch}
                  />
                </InputGroup.Text>
                <SearchBar />
                {/* <FormControl id="inlineFormInputGroup" placeholder="Search" style={{ backgroundColor: "#DCE6F1", border: "0" }} />
              </InputGroup>
            </Col>
          </Form>
  </div>
          <div className="nav">
                <Nav className="d-inline-flex ml-auto mb-5">
                <div className="d-flex flex-row">
                  
                      <Nav.Link style={{ height: "5vh" }} href="/">
                        <FontAwesomeIcon
                          icon={faHouseUser}
                          className="ml-2 mb-1 navicon"
                          color="#4d4d4d"
                        />
                        <br />
                        Home
                      </Nav.Link>
                      
                      <Nav.Link style={{ height: "5vh" }} href="/">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="ml-4 mb-1 navicon"
                          color="#4d4d4d"
                        />
                        <br />
                        My Network
                      </Nav.Link>
                     
                      <Nav.Link style={{ height: "5vh" }} href="/">
                        <FontAwesomeIcon
                          icon={faSuitcase}
                          className="ml-2 mb-1 navicon"
                          color="#4d4d4d"
                        />
                        <br />
                        Jobs
                      </Nav.Link>
                     
                      <Nav.Link style={{ height: "5vh" }} href="/">
                        <FontAwesomeIcon
                          icon={faCommentDots}
                          className="ml-4 mb-1 navicon"
                          color="#4d4d4d"
                        />
                        <br />
                        Messaging
                      </Nav.Link>
                     
                      <Nav.Link style={{ height: "5vh" }} href="/">
                        <FontAwesomeIcon
                          icon={faBell}
                          className="ml-4 mb-1 navicon"
                          color="#4d4d4d"
                        />
                        <br />
                        Notifications
                      </Nav.Link>
                 
                      <div className="ml-2 mb-4">
                        <NavbarProfileImage />
>>>>>>> Stashed changes

                        <Nav.Link style={{ height: "5vh" }} href="/">
                          <FontAwesomeIcon
                            icon={faBell}
                            className="ml-4 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Notifications
                        </Nav.Link>

                        <div className="ml-2">
                          <NavbarProfileImage />

                          <NavDropdown
                            title="Me"
                            id="basic-nav-dropdown"
                            className="ml-2"
                          >
                            <NavbarProfile />

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

                        <div className="mr-1">
                          {/* <FontAwesomeIcon
                                className="ml-3"
                                icon={faTable}
                                color="#4d4d4d"
                              /> */}
                          <svg
                            className="ml-3"
<<<<<<< Updated upstream
                            height="25"
                            width="25"
                            viewBox="0 0 30 30"
                          >
                            <path
                              transform="translate(2, 2)"
                              d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"
                            ></path>
                          </svg>
=======
                            icon={faTable}
                            color="#4d4d4d"
                          />
                          <svg className="ml-3" height="25" width="25" viewBox="0 0 30 30">
                <path
                  transform="translate(2, 2)"
                  d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"
                ></path>
              </svg>
>>>>>>> Stashed changes
                          <br />

                          <NavDropdown
                            title="Work"
                            className="ml-1"
                            id="basic-nav-dropdown"
                          >
<<<<<<< Updated upstream
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
                          style={{ color: "#996c02", height: "5vh" }}
                          href="/"
=======
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

<br />


                        <NavDropdown
                          title="Work"
                          className="ml-1"
                          id="basic-nav-dropdown"
>>>>>>> Stashed changes
                        >
                          Try Premium for
                          <br />
                          <p className="freepremium">free</p>
                        </Nav.Link>
                      </div>
<<<<<<< Updated upstream
=======
                     
                      <Nav.Link
                        className="mr-2"
                        style={{ color: "#996c02", height: "5vh" }}
                        href="/"
                      >
                       Try Premium for
                       <br/>
                        <p className="freepremium">free</p>
                      </Nav.Link>
                     </div>
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

export default BootstrapNavbar; */

import React from "react";
import LinkedInLogo from "../data/linkedin_logo.png";
import "./Navbar.css";
import NavbarProfile from "./NavbarProfile";
import SearchBar from "./SearchBar";

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
  InputGroup,
  Button,
  Container,
  Card,
  Col,
  Row,
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
      <Container className="navContainer d-flex flex-row justify-content-center">
        {/* <div className="row" style={{ height: "3.5rem"}}> */}

        <Row className="NavRow">
          <Col>
            <Navbar variant="light" expand="lg" sticky="top" id="navbar">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <div className="navicons" id="navicons">
                  <Nav id="navbar">
                    <div className="d-flex justify-content-between NavDiv">
                      <Link to="/feed" >
                        <Navbar.Brand classname="logodiv">
                          <a href="#" id="navbarlogo">
                            <img
                              className="pb-1 LinkedInLogo"
                              src={LinkedInLogo}
                              alt=""
                              id="navbarlogo"
                            />
                          </a>
                        </Navbar.Brand>
                      </Link>
                      <div className="searchbar">
                <Form
            inline
            className="align-items-center"
            style={{ height: "40px" }}
          >
            <Col xs="auto" className="px-0">
              <InputGroup className="flex-row mt-2">
                <InputGroup.Text
                  style={{
                    height: "38px",
                    width: "40px",
                    borderRadius: "0.25rem 0px 0px 0.25rem",
                    borderRight: 0,
                    paddingLeft: "0.8rem",
                    paddingRight: "0",
                    border: "0",
                    backgroundColor: "#EEF3F8",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ height: "15px", width: "15px" }}
                    icon={faSearch}
                  />
                </InputGroup.Text>
                <SearchBar/>
                {/* <FormControl id="inlineFormInputGroup" placeholder="Search" style={{ backgroundColor: "#DCE6F1", border: "0" }} /> */}
              </InputGroup>
            </Col>
          </Form>
  </div>

                      <div className="d-flex flex-row NavLogos ">
                        <Nav.Link style={{ height: "5vh" }} href="/">
                          <FontAwesomeIcon
                            icon={faHouseUser}
                            className="ml-2 mb-1 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Home
                        </Nav.Link>

                        <Nav.Link style={{ height: "5vh" }} href="/">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="ml-4 mb-1 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          My Network
                        </Nav.Link>

                        <Nav.Link style={{ height: "5vh" }} href="/">
                          <FontAwesomeIcon
                            icon={faSuitcase}
                            className="ml-2 mb-1 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Jobs
                        </Nav.Link>

                        <Nav.Link style={{ height: "5vh" }} href="/">
                          <FontAwesomeIcon
                            icon={faCommentDots}
                            className="ml-4 mb-1 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Messaging
                        </Nav.Link>

                        <Nav.Link style={{ height: "5vh" }} href="/">
                          <FontAwesomeIcon
                            icon={faBell}
                            className="ml-4 mb-1 navicon"
                            color="#4d4d4d"
                          />
                          <br />
                          Notifications
                        </Nav.Link>

                        <div className="ml-2">
                          <NavbarProfileImage />

                          <NavDropdown
                            title="Me"
                            id="basic-nav-dropdown"
                            className="ml-2"
                          >
                            <NavbarProfile />

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

                        <div className="mr-1">
                          {/* <FontAwesomeIcon
                                className="ml-3"
                                icon={faTable}
                                color="#4d4d4d"
                              /> */}
                          <svg
                            className="ml-3"
                            height="25"
                            width="25"
                            viewBox="0 0 30 30"
                          >
                            <path
                              transform="translate(2, 2)"
                              d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"
                            ></path>
                          </svg>
                          <br />

                          <NavDropdown
                            title="Work"
                            className="ml-1"
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
                          style={{ color: "#996c02", height: "5vh" }}
                          href="/"
                        >
                          Try Premium for
                          <br />
                          <p className="freepremium">free</p>
                        </Nav.Link>
                      </div>
>>>>>>> Stashed changes
                    </div>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>

        <br />
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default BootstrapNavbar;
