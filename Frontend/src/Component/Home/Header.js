import React from "react";

import './Home.css';

import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home_Header_Desktop =() => {
    return (
            <header className="container-fluid navbar navbar-default navbar-expand-md shadow p-0 mb-0 align-items-center topMenu">
          <Navbar collapseOnSelect expand="lg" variant="dark" className="w-100 px-5">
              <Nav>
                <Navbar.Brand>
                  <Link to="/" className="link">
                  <img 
                    src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" 
                    alt="logo" className="gmailLogo"
                    />
                    <span class="gmail">Gmail</span>
                  </Link>
                </Navbar.Brand>
                </Nav>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <Link to="/" className="link"><li className="py-2 links navHover">For Work</li></Link>
                    <Link to="/SignIn" className="link"><li className="px-4 links py-2 navHover">Sign In</li></Link>
                    <Link>
                        <Button className="px-3 py-2">
                            Create an Account
                        </Button>
                    </Link>
                  </Nav>
                </Navbar.Collapse>
          </Navbar>
        </header>
        
    );
}

export default Home_Header_Desktop;


export const Home_Header_Mobile =() => {
    return (
            <header className="container-fluid navbar navbar-default p-0 mb-0 align-items-center topMenu">
          <Navbar className="w-100 px-5 shadow">
              <Nav>
                <Navbar.Brand>
                  <Link to="/" className="link">
                  <img 
                    src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" 
                    alt="logo" className="gmailLogo"
                    />
                    <span class="gmail">Gmail</span>
                  </Link>
                  
                  <Link>
                        <Button className="px-3 py-2">
                            Get Gmail
                        </Button>
                    </Link>
                </Navbar.Brand>
                </Nav>
            </Navbar>
                  <Nav>
                    <Link to="/" className="link px-4"><li className="py-2 links">For Work</li></Link>
                    <div className="col-5 col-sm-8"></div>
                    <Link to="/" className="link signIn me-auto"><li className="px-4 links py-2 me-auto">Sign In</li></Link>
                  </Nav>
                <Navbar/>
          
        </header>
    );
}