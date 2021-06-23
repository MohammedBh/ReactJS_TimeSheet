
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./components/Body/Body"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;