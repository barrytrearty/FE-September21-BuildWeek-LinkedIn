import React from 'react';
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import StriveLogo from "../data/logo.png";



const Experiences = () => {
    return (
              <section className="px-5 py-2">
          {/* <section> */}
          <Row>
            <h3>Experience</h3>
          </Row>
          <Row className="border-bottom">
            {/* <Card> */}
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p className="p-heading">Student</p>
              <p className="p-secondary">Strive Student- Full-time</p>
              <p className="p-muted">May 2021-Present 3 years</p>
              <p className="p-secondary">Learning Frontend Web Development</p>
            </Col>
            {/* </Card> */}
          </Row>
          <Row className="border-bottom">
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p className="p-heading">Student</p>
              <p className="p-secondary">Strive Student- Full-time</p>
              <p className="p-muted">May 2021-Present 3 years</p>
            </Col>
          </Row>

          <Row className="border-bottom">
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p className="p-heading">Student</p>
              <p className="p-secondary">Strive Student- Full-time</p>
              <p className="p-muted">May 2021-Present 3 years</p>
            </Col>
          </Row>
          <Row className="border-bottom">
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p className="p-heading">Student</p>
              <p className="p-secondary">Strive Student- Full-time</p>
              <p className="p-muted">May 2021-Present 3 years</p>
            </Col>
          </Row>
          <Row className="border-bottom">
            <Col xs={2}>
              {" "}
              <img src={StriveLogo} alt="" className="mt-3" />
            </Col>
            <Col className="my-3">
              <p className="p-heading">Student</p>
              <p className="p-secondary">Strive Student- Full-time</p>
              <p className="p-muted">May 2021-Present 3 years</p>
            </Col>
          </Row>
        </section>
    );
};

export default Experiences;