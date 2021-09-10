import { Card, Button} from "react-bootstrap";
import "./PeopleCard.css";
import "./feedsections/FeedRightCard.css";

const PeopleCard = ({ peopleInfo }) => {
  return (
    <Card className="PeopleCard d-flex flex-row no-gutters">
      <Card.Img
        className="RightFeedImage ml-1 mt-3"
        variant="top"
        src={peopleInfo.image}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="RightFeedTitle">
          {peopleInfo.name} {peopleInfo.surname}
        </Card.Title>
        <Card.Text className="RightFeedSubtitle text-muted">{peopleInfo.title}</Card.Text>
        <Card.Text>
          <Button type="button" variant="outline-secondary" className="RightFeedButton">Message</Button>{" "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PeopleCard;
