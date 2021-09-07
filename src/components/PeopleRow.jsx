import { Row, Col } from "react-bootstrap";
import PeopleCard from "./PeopleCard";

const PeopleRow = ({ peopleInfos, show }) => {
  return (
    <>
      <Row>
        {show && peopleInfos.slice(0, 4).map((peopleInfo) => (
          <Col sm={12} md={12} lg={12} key={peopleInfo._id} className="PeopleCol">
            <PeopleCard peopleInfo={peopleInfo} />
          </Col>
        ))}
          {!show && peopleInfos.slice(0, 8).map((peopleInfo) => (
          <Col sm={12} md={12} lg={12} key={peopleInfo._id} className="PeopleCol">
            <PeopleCard peopleInfo={peopleInfo} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PeopleRow;

