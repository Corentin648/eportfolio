import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Image, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
//import './Menu.css';

class Menu extends Component {

    /* <NavLink className={"d-inline p-4 bg-dark text-white"} to={"/leadership"}><LMdropdown/></NavLink>

       <NavDropdown.Item href="/leadership">Leadership & Management</NavDropdown.Item>
    */

    render() {

        const appNavbar = (
            <Navbar bg={"dark"} expand={"lg"}>
                <Navbar.Brand className={"d-inline p-2 text-white"}>
                    E-portfolio <br/>
                    Corentin Dominguez <br/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={"justify-content-center"}/>
                <Navbar.Collapse className={"justify-content-center"}>
                    <Nav className="justify-content-center">
                        <NavLink className={"d-inline p-4 bg-dark text-white"} to={"/"}><h3>Home</h3></NavLink>
                        <NavLink className={"d-inline p-4 bg-dark text-white"} to={"/spanish"}><h3>Spanish</h3></NavLink>
                        <NavDropdown className={"d-inline p-3 bg-dark text-white"} title={<h3 className={"text-white"}>Leadership & Management</h3>} id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to={"/leadership"}>Leadership & Management</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to={"/civicengagement"}>Civic Engagement</Link></NavDropdown.Item>
                            <NavDropdown.Item>SWOT</NavDropdown.Item>
                        </NavDropdown>
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
                            <div className={"mt-2"}></div>
                            <a href="https://www.facebook.com/corentin.dmz.9" target={"_blank"}>
                                <Image src={require("../icone_fb32.png")} width={"32px"} height={"32px"}/>
                            </a>
                            <a className={"pl-2"} href="https://github.com/Corentin648" target={"_blank"}>
                                <Image src={require("../logo_github.png")} width={"32px"} height={"32px"}/>
                            </a>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );

        return(
            <div>
                {appNavbar}
            </div>
        );
    }
}

export default Menu;