import { Row, Col, Container, Card, Button } from "react-bootstrap";
import StriveLogo from "../data/logo.png";
import Experiences from "./Experiences";

const AfterMain = () => {
  return (
    <Container>
      <div className="after-main">
        <section className="px-5 py-2 mb-4 activities">
          <Row>
            <div>
              <h3>Activity</h3>
              <h4>97 Followers</h4>
            </div>
          </Row>
          <Row>
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
        </section>
      <Experiences/>

        <section className="px-5 mb-4">
          <Row>
            <h3>Education</h3>
          </Row>
          <Row className="border-bottom">
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p className="p-heading">Buckinghamshire New University</p>
              <p className="p-secondary">Independent - Game Production</p>
              <p className="p-muted">2015-2018</p>
            </Col>
          </Row>
          <Row className="border-bottom">
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

          <Row className="border-bottom">
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
        </section>
        <section className="px-5 py-2 mb-4">
          <Row>
            <h3>Licenses & Certifications</h3>
          </Row>
          <Row className="border-bottom">
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
          <Row className="border-bottom">
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

          <Row className="border-bottom">
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
          <Row>Show more</Row>
        </section>

        <section className="px-5 mb-4">
          <Row>
            <h3>Interests</h3>
          </Row>
          <Row>
            <Col xs={6}>
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
            <Col xs={6}>
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
            <Col xs={6}>
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
            <Col xs={6}>
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
            <Col xs={6}>
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
            <Col xs={6}>
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
        </section>
      </div>
    </Container>
  );
};

export default AfterMain;
