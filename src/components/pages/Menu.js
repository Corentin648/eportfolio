import React, {Component} from 'react';
import '../styles/Menu.css';
import {Link, withRouter} from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
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
                <div className="topnav relative h-[104px] flex justify-center items-center bg-zinc-200 text-[#333]" id="myTopnav">
                    <img
                        id={"brand-n7"}
                        className={"absolute left-0 top-0"}
                        style={{marginLeft: "5vw"}}
                        src={require("../../assets/logo_n7_v3.png")}
                        width={"200px"}
                        height={"104px"}
                        alt=""/>

                    <Link to="/" className="active">Home</Link>
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
                    <Link to={this.props.location.pathname} className="icon" style={{fontSize: "15px"}}
                       onClick={() => onClickToggle()}>&#9776;</Link>
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

export default withRouter(Menu);