import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileTopCard from "./components/ProfileTopCard";
import AfterMain from "./components/AfterMain";
import PeopleSection from "./components/PeopleSection";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12} sm={12} lg={8}>
            <ProfileTopCard />
            <AfterMain />
          </Col>
          <Col xs={12} sm={12} lg={4}>
            <PeopleSection sectionTitle="People also view" />
            <PeopleSection sectionTitle="People you may know" />
          </Col>
        </Row>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
