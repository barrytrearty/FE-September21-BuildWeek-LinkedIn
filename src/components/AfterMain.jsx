import { Row, Col, Container, Card, Button } from "react-bootstrap";
import StriveLogo from "../data/logo.png";
import Experiences from "./Experiences";

const AfterMain = () => {
  return (
    <Container>
      <div className="after-main">
        <Card
          id="activity-card"
          style={{
            width: "100%",
            marginTop: "1rem",
            paddingLeft: "15px",
            borderRadius: "8px",
          }}
          className="py-2 mb-4 activities"
        >
          <Card.Body>
            <Card.Title>Activity</Card.Title>
            <Card.Text>97 Followers</Card.Text>
          </Card.Body>
          <Row className="px-3">
            <Col xs={12} md={6}>
              <Row>
                <Col xs={3}>
                  <img src={StriveLogo} alt="" />
                </Col>
                <Col xs={9}>
                  <p className="activity">
                    I'm studying Web Development with Strive School!
                  </p>
                  <p className="text-muted"> James replied to a comment</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={3}>
                  <img src={StriveLogo} alt="" />
                </Col>
                <Col xs={9}>
                  <p className="activity">
                    I'm studying Web Development with Strive School!
                  </p>
                  <p className="text-muted"> James replied to a comment</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <a href="#somewhere">
            <Row className="text-center">
              <p className="text-muted mx-auto">See all activity</p>
            </Row>
          </a>
        </Card>

        <Experiences />

        <Card className="px-4 py-2 mb-4">
          <Row>
            <Card.Title className="px-3">Education</Card.Title>
          </Row>
          <Row>
            <Col xs={2}>
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p className="p-heading">Buckinghamshire New University</p>
              <p className="p-secondary">Independent - Game Production</p>
              <p className="p-muted">2015-2018</p>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p className="p-heading">De Montfort University</p>
              <p className="p-secondary">Film Production Technology</p>
              <p className="p-muted">2015-2016</p>
            </Col>
          </Row>

          <Row>
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p className="p-heading">Princeton University</p>
              <p className="p-secondary">Certification</p>
              <p className="p-muted">2015-2018</p>
            </Col>
          </Row>
        </Card>

        <Card className="px-4 py-2 mb-4">
          <Row>
            <Card.Title className="px-3">Licenses & Certifications</Card.Title>
          </Row>
          <Row>
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p className="p-heading">
                Module 4 - ReactJS / SPA / Components/ Routing
              </p>
              <p className="p-secondary">Strive School</p>
              <p className="p-muted">Issued Sep 2021 - No Expiration Date</p>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p p className="p-heading">
                Module 3 - Advanced JS - ES6 / Promises / AJAX
              </p>
              <p className="p-secondary">Strive School</p>
              <p className="p-muted">Issued Aug 2021 - No Expiration Date</p>
            </Col>
          </Row>

          <Row>
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p p className="p-heading">
                Module 2 - CSS / UX / UI / Bootstrap
              </p>
              <p className="p-secondary">Strive School</p>
              <p className="p-muted">Issued Jun 2021 - No Expiration Date</p>
            </Col>
          </Row>
          <Row className="text-center">
            <p className="text-muted mx-auto">Show More</p>
          </Row>
        </Card>

        <Card className="px-4 py-2 mb-4">
          <Row>
            <Card.Title className="px-3">Interests</Card.Title>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={3}>
                  <img src={StriveLogo} alt="" className="mt-3" />
                </Col>
                {/* <Col className=""> */}
                <Col xs={9} className="mt-4">
                  <p p className="p-heading">
                    Princeton University
                  </p>
                  <p className="p-muted">2456634 followers</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={3}>
                  <img src={StriveLogo} alt="" className="mt-3" />
                </Col>
                {/* <Col className=""> */}
                <Col xs={9} className="mt-4">
                  <p p className="p-heading">
                    Princeton University
                  </p>
                  <p className="p-muted">2456634 followers</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={3}>
                  <img src={StriveLogo} alt="" className="mt-3" />
                </Col>
                {/* <Col className=""> */}
                <Col xs={9} className="mt-4">
                  <p p className="p-heading">
                    Princeton University
                  </p>
                  <p className="p-muted">2456634 followers</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={3}>
                  <img src={StriveLogo} alt="" className="mt-3" />
                </Col>
                {/* <Col className=""> */}
                <Col xs={9} className="mt-4">
                  <p p className="p-heading">
                    Princeton University
                  </p>
                  <p className="p-muted">2456634 followers</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={3}>
                  <img src={StriveLogo} alt="" className="mt-3" />
                </Col>
                {/* <Col className=""> */}
                <Col xs={9} className="mt-4">
                  <p p className="p-heading">
                    Princeton University
                  </p>
                  <p className="p-muted">2456634 followers</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={3}>
                  <img src={StriveLogo} alt="" className="mt-3" />
                </Col>
                {/* <Col className=""> */}
                <Col xs={9} className="mt-4">
                  <p p className="p-heading">
                    Princeton University
                  </p>
                  <p className="p-muted">2456634 followers</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="text-center">
            <p className="text-muted mx-auto">Show More</p>
          </Row>
        </Card>
      </div>
    </Container>
  );
};

export default AfterMain;
