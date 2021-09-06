import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Profile from './pages/Profile';
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path='/' component={Profile} />
      <Route path='/' component={Navbar} />
      <Route path='/' component={Footer} />
    </Router>
  )
}

export default App

