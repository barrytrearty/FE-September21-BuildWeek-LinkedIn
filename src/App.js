import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileTopCard from "./components/ProfileTopCard";
import AfterMain from "./components/AfterMain";
import PeopleSection from "./components/PeopleAlsoView";
import Profile from './pages/Profile';
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div>
    <Navbar/>
      <ProfileTopCard/>
      <AfterMain />
      <PeopleSection sectionTitle="People also view" />
      <PeopleSection sectionTitle="People you may know" />
    <Footer/>
    </div>
  );
}

export default App

