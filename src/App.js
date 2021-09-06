import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeopleSection from './components/PeopleAlsoView';

function App() {
  return (
    <div>
      <PeopleSection sectionTitle="People also view"/>
      <PeopleSection sectionTitle="People you may know"/>
    </div>
  );
}

export default App;
