
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimeSheet from './components/TimeSheet/TimeSheet';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";

function App() {

  return (
    <Router>
       <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/timesheet" component={TimeSheet} />
  </Switch>
  
    </Router>
  );
}

export default App;
