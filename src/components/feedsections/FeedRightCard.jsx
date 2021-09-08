import { Card, Button} from "react-bootstrap";
import { CgMathPlus } from "react-icons/cg";

const FeedRightCard = ({ peopleInfo }) => {
  return (
    <Card className="PeopleCard d-flex flex-row no-gutters">
      <Card.Img
        className="PeopleCardImage m-2"
        variant="top"
        src={peopleInfo.image}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          {peopleInfo.name} {peopleInfo.surname}
        </Card.Title>
        <Card.Text>{peopleInfo.title}</Card.Text>
        <Card.Text>
          <Button type="button" variant="outline-secondary" className="MessageButton"> <CgMathPlus size={18} />Follow</Button>{" "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeedRightCard;
