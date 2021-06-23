import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../img/timesh.jpeg';
class Header extends React.Component {

    render() {

        return(
            <header>
                <nav class = 'navbar navbar-light bg-ligjht justify-content-center'>
                    <a class= 'navbar-brand' href ="#">
                        <img src={Logo} width="260" height="100" class="d-inline-block align-top" alt=""></img>
                    </a>
                </nav>
            </header>
        )
    }
}

export default Header;