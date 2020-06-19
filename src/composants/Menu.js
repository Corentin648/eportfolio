import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";

class Menu extends Component {

    /*
    <Navbar bg={"dark"} expand={"lg"}>
    <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
    <Navbar.Collapse id={"basic-navbar-nav"}>
     */

    render() {
        return(
            <Navbar bg={"dark"} expand={"lg"}>
                <Navbar.Brand className={"d-inline p-2 bg-dark text-white"}>
                    E-portfolio <br/>
                    Corentin Dominguez
                    <img
                        alt={""}
                        src="public/icone_fb32.png"
                        width="32"
                        height="32"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={"justify-content-center"}/>
                <Navbar.Collapse className={"justify-content-center"}>
                    <Nav className="justify-content-center">
                        <NavLink className={"d-inline p-4 bg-dark text-white"} to={"/"}><h3>Home</h3></NavLink>
                        <NavLink className={"d-inline p-4 bg-dark text-white"} to={"/spanish"}><h3>Spanish</h3></NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className={"d-inline p-2 bg-dark text-white"}>
                        <h3 align={"justify"}>Contact :</h3>
                        <div align={"justify"}>
                            8 Place du Pont Neuf <br/>
                            31000 Toulouse (France) <br/>
                            +33 6 77 65 24 94 <br/>
                            corentin.dmz@live.fr <br/>
                        </div>
                        <img
                            src="public/icone_fb.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;