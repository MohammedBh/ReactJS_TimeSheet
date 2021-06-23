import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../img/timesheet.png';
import { Link } from 'react-router-dom'
class Header extends React.Component {

    render() {

        return (
            <header>
                <nav class='navbar navbar-light bg-ligjht justify-content-center justify-content-evenly'>
                    <a class='navbar-brand' href="http://localhost:3000/timesheet">
                        <img src={Logo} width="260" height="100" class="d-inline-block align-top" alt=""></img>
                    </a>
                    <Link key={1} className="link" to="/">
                        <button class="buttonFinish">FINISH JOURNEY</button>
                    </Link>
                </nav>
            </header>
        )
    }
}

export default Header;