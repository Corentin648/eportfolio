import React, {Component} from 'react';
import './Menu.css';
import Image from "react-bootstrap/cjs/Image";
import {Link, Router} from "react-router-dom";

class Menu extends Component {

    componentDidMount() {
        window.onscroll = function () {
            onScrollDown()
        };

        let header = document.getElementById("myTopnav");
        let sticky = header.offsetTop;

        /* Permet de laisser la TopNav toujours visible en haut */
        function onScrollDown() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }


    render() {


        const appNavbar = (

            <div>
                <div style={{
                    color: "#333",
                    background: "darkcyan",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "150px"
                }}>

                    <Image id={"brand-n7"} style={{marginLeft: "150px"}} src={require("../logo_n7.jpg")} width={"128px"} height={"128px"}/>

                    <h1 style={{width: "100%", textAlign: "center"}}>Eportfolio Corentin Dominguez</h1>
                    {/*
                    <div style={{marginTop: "30px", marginBottom: "30px"}} align={"justify"}>
                        Address : 33 Rue du Rempart Matabiau<br/>
                        31000 Toulouse (France) <br/>
                        Phone : +33 6 77 65 24 94 <br/>
                        Mail : corentin.dmz@live.fr <br/>

                        <div className={"mt-2"}> Networks :
                            <a href="https://www.facebook.com/corentin.dmz.9" target={"_blank"}
                               rel={"noopener noreferrer"}>
                                <Image src={require("../icone_fb32.png")} width={"32px"} height={"32px"}/>
                            </a>
                            <a className={"pl-2"} href="https://github.com/Corentin648" target={"_blank"}
                               rel={"noopener noreferrer"}>
                                <Image src={require("../logo_github.png")} width={"32px"} height={"32px"}/>
                            </a>
                        </div>
                    */}
                    <div className="contactBar">
                        <li><i style={{paddingRight: "15px"}} className="fa fa-home"/>33 Rue Rempart Matabiau</li>
                        <li style={{paddingLeft: "40px", paddingBottom: "10px"}}>Toulouse (31000)</li>
                        <li><i style={{paddingRight: "15px"}} className="fa fa-phone"/>06 77 65 24 94</li>
                        <li><i style={{paddingRight: "15px"}} className="fa fa-envelope"/>corentin.dmz@live.fr</li>
                        <li><i style={{paddingRight: "15px"}} className="fa fa-globe"/>
                            <a style={{paddingRight: "10px"}} href="https://www.facebook.com/corentin.dmz.9" target={"_blank"} rel={"noopener noreferrer"}>Facebook</a>
                            <a href="https://github.com/Corentin648" target={"_blank"} rel={"noopener noreferrer"}>Github</a>
                        </li>
                    </div>
                </div>
                <div className="topnav" id="myTopnav">
                    <Link to="/" className="active">Home</Link>
                    <Link to={"/spanish"}>Spanish</Link>
                    <Link to="#sport">Sport</Link>
                    <div className="dropdown">
                        <button className="dropbtn">Leadership & Management
                            <i style={{paddingLeft: "15px"}} className="fa fa-caret-down"/>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/leadership">Leadership & Management</Link>
                            <Link to="/civicengagement">Civic Engagement</Link>
                            <Link to="#">SWOT</Link>
                        </div>
                    </div>

                    <a href="javascript:void(0);" className="icon" style={{fontSize: "15px"}}
                       onClick={() => onClickToggle()}>&#9776;</a>

                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </div>
            </div>


        );

        function onClickToggle() {
            let x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }

        function onClickTest(event) {
            let x = document.getElementById("spanish");
            x.className = "active";
            window.location="/spanish";
            event.preventDefault();
            event.stopPropagation();
        }

        return (
            <div>
                {appNavbar}
            </div>
        );
    }


}

export default Menu;