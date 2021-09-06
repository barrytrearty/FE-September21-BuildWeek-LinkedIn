import "./App.css";
import ProfileTopCard from "./components/ProfileTopCard";
import AfterMain from "./components/AfterMain";
import "bootstrap/dist/css/bootstrap.min.css";
import PeopleSection from "./components/PeopleAlsoView";

function App() {
  return (
    <div>
      <ProfileTopCard/>
      <AfterMain />
      <PeopleSection sectionTitle="People also view" />
      <PeopleSection sectionTitle="People you may know" />
    </div>
  );
}

export default App;
