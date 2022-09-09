import React, {Component} from 'react';
import '../styles/Menu.css';
import {Link, withRouter} from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Theme} from '../../theme';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleClick: ""
        }
    }

    /* Hide or show all content except TopBar */
    hideShowAll = (hide) => {
        const elements = document.body.querySelectorAll("#App > *");
        console.log(elements);
        const inputList = Array.prototype.slice.call(elements);
        for (let i = 0; i < inputList.length; i++) {
            if (!(inputList[i].id === "myTopNav")) {
                hide ? inputList[i].style.display = "none" : inputList[i].style.display = "block";
            }
        }
    }

    /* Allows displaying everything back if screen is resized over 750px and toggle is still open */
    handleResize = () => {
        let x = document.getElementById("myTopNav");
        const expandTabs = x.className.includes("expand-tabs");
        if (window.screen.width > 750 && expandTabs) {
            this.hideShowAll(!expandTabs);
        }
    }

    handleOnClickToggle = () => {
        if (window.screen.width < 750) {
            let x = document.getElementById("myTopNav");
            const expandTabs = x.className.includes("expand-tabs");

            this.hideShowAll(!expandTabs); // avoid unwanted background scrolling when tabs expanded

            this.setState({
                toggleClick: expandTabs ? "" : "expand-tabs"
            });
        }

    }

    toggleIcon = () => {
        return this.state.toggleClick.includes("expand-tabs") ? "fa fa-times" : "fa fa-bars";
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.handleResize());
    }

    onClickDropdown() {
        let dropdownContent = document.getElementsByClassName("dropdown-content");
        for (let element of dropdownContent) {
            element.style.display = "none"
        }
    }

    render() {
        return (
                <section
                    className={`topnav ${this.state.toggleClick} ${Theme.bgColor} ${Theme.textPrimaryColor}`}
                    id="myTopNav">
                    <img
                        id={"brand-n7"}
                        className={"invisible lg:visible absolute left-0 top-0"}
                        style={{marginLeft: "5vw"}}
                        src={require("../../assets/logo_n7_v3.png")}
                        width={"200px"}
                        height={"104px"}
                        alt=""/>

                    <Link to="/" className="active rounded-md">Home</Link>
                    <Link to="/spanish" className={"rounded-md"}>Spanish</Link>
                    <Link to="/mobility" className={"rounded-md"}>Mobility</Link>
                    <div className="dropdown">
                        <button className="dropbtn rounded-md" onClick={() => this.onClickDropdown()}>Leadership & Management
                            <FontAwesomeIcon style={{paddingLeft: "15px"}} icon={faCaretDown}/>
                        </button>
                        <div className="dropdown-content">
                            {/* TODO : ajouter des button ici pour faire disparaitre la liste quand on clique */}
                            <Link to="/leadership">Leadership & Management</Link>
                            <Link to="/civicengagement">Civic Engagement</Link>
                            <Link to="#">SWOT</Link>
                        </div>
                    </div>
                    <Link to="/ppp" className={"rounded-md"}>PPP</Link>
                    <Link to="/personalprojects" className={"rounded-md"}>Personal Projects</Link>

                    <div id={"topnav-header"} className={"absolute top-0 right-0"}>
                        <Link to={this.props.location.pathname} id={"toggle"}
                              onClick={() => this.handleOnClickToggle()}>
                            <i className={this.toggleIcon()}/>
                        </Link>
                    </div>
                </section>
        );
    }



}

export default withRouter(Menu);