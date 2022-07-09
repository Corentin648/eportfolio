import React, {Component} from 'react';
import '../styles/Menu.css';
import {Link} from "react-router-dom";
import { faPhone, faEnvelope, faEarthAmericas, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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

                    <img id={"brand-n7"} style={{marginLeft: "5vw"}} src={require("../../assets/logo_n7_v3.png")} width={"200px"} height={"104px"} alt=""/>

                    <h1 id={"home-link"} style={{width: "100%", textAlign: "center"}}><Link to={"/"}>Eportfolio Corentin Dominguez</Link></h1>

                    <div className="contactBar">
                        <li><i style={{paddingRight: "15px"}} className="fa fa-home"/>33 Rue Rempart Matabiau</li>
                        <li style={{paddingLeft: "40px", paddingBottom: "10px"}}>Toulouse (31000)</li>
                        <li><FontAwesomeIcon style={{paddingRight: "15px"}} icon={faPhone}/>06 77 65 24 94</li>
                        <li><FontAwesomeIcon style={{paddingRight: "15px"}} icon={faEnvelope}/>corentin.dmz@live.fr</li>
                        <li><FontAwesomeIcon style={{paddingRight: "15px"}} icon={faEarthAmericas}/>
                            <a style={{paddingRight: "10px"}} href="https://www.facebook.com/corentin.dmz.9" target={"_blank"} rel={"noopener noreferrer"}>Facebook</a>
                            <a href="https://github.com/Corentin648" target={"_blank"} rel={"noopener noreferrer"}>Github</a>
                        </li>
                    </div>
                </div>
                <div className="topnav" id="myTopnav">
                    <Link  activeStyle={{color : "darkcyan"}} to="/" className="active">Home</Link>
                    <Link to={"/spanish"}>Spanish</Link>
                    <Link to="#sport">Sport</Link>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => onClickDropdown()}>Leadership & Management
                            <FontAwesomeIcon style={{paddingLeft: "15px"}} icon={faCaretDown}/>
                        </button>
                        <div className="dropdown-content">
                            {/* TODO : ajouter des button ici pour faire disparaitre la liste quand on clique */}
                            <Link to="/leadership">Leadership & Management</Link>
                            <Link to="/civicengagement">Civic Engagement</Link>
                            <Link to="#">SWOT</Link>
                        </div>
                    </div>
                    <Link to="/ppp">PPP</Link>
                    <Link to="/personalprojects">Personal Projects</Link>

                    {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                    <a href="javascript:void(0);" className="icon" style={{fontSize: "15px"}}
                       onClick={() => onClickToggle()}>&#9776;</a>
                </div>
            </div>


        );

        function onClickDropdown() {
            /*let dropdown_content = document.getElementsByClassName("dropdown-content");
            for (let element of dropdown_content) {
                element.style.display = "none"
            }*/
        }

        function onClickToggle() {
            let x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }

        return (
            <div>
                {appNavbar}
            </div>
        );
    }


}

export default Menu;