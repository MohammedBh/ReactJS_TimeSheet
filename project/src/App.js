import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    )
  }
}