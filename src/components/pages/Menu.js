import React, {Component} from 'react';
import '../styles/Menu.css';
import {Link, withRouter} from "react-router-dom";
import {faBars, faCaretDown, faTimes,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Theme} from '../../theme';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleClick: "",
            dropButtonClick: ""
        }
    }

    handleOnClickToggle = () => {
        if (window.screen.width < 768) {
            let x = document.getElementById("myTopNav");
            const expandTabs = x.className.includes("expand-tabs");

            this.setState({
                toggleClick: expandTabs ? "" : "expand-tabs"
            });
        }

    }

    handleOnClickDropButton = () => {
        if (window.screen.width >= 768) {
            let x = document.getElementById("dropdown");
            const expandContent = x.className.includes("expand-content");

            this.setState({
                dropButtonClick: expandContent ? "" : "expand-content"
            });
        }
    }

    handleOnBlurDropdownContent = () => {
        if (window.screen.width >= 768) {
            this.setState({
                dropButtonClick: ""
            });
        }
    }

    render() {
        return (
                <section id={"topbar-section"} className={`${this.state.toggleClick}`}>
                    <button
                        id={"little-screens-toggle"}
                        className={"md:hidden block fixed top-0 right-0 p-4"}
                        onClick={() => this.handleOnClickToggle()}>
                        <FontAwesomeIcon className={"h-5 w-5"} icon={faBars}/>
                    </button>
                    <div
                        className={`topnav ${this.state.toggleClick} ${Theme.bgColor} ${Theme.textPrimaryColor}`}
                        id="myTopNav">
                        <img
                            id={"brand-n7"}
                            className={"hidden absolute left-0 top-0"}
                            style={{marginLeft: "5vw"}}
                            src={require("../../assets/logo_n7_v3.png")}
                            width={"200px"}
                            height={"104px"}
                            alt=""/>

                        <div id={"topnav-header"} className={"md:hidden flex w-full justify-end"}>
                            <button id={"toggle"} className={"p-4"} onClick={() => this.handleOnClickToggle()}>
                                <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes}/>
                            </button>
                        </div>

                        <Link to="/" className="topnav-item rounded-md">Home<hr className={"md:hidden"}/></Link>
                        <Link to="/spanish" className={"topnav-item rounded-md"}>Spanish<hr className={"md:hidden"}/></Link>
                        <Link to="/mobility" className={"topnav-item rounded-md"}>Mobility<hr className={"md:hidden"}/></Link>
                        <div
                            id="dropdown"
                            className={`${this.state.dropButtonClick}`}
                            onClick={() => this.handleOnClickDropButton()}
                        >
                            <button className="topnav-item dropbtn rounded-md">Soft & Human Skills
                                <FontAwesomeIcon className={"caret-down pl-4"} icon={faCaretDown}/>
                                <hr className={"md:hidden"}/>

                            </button>
                            <div
                                id={"dropdown-content"}
                                className="dropdown-content md:rounded-md  md:mt-2"
                                onMouseLeave={() => this.handleOnBlurDropdownContent()}>
                                <Link to="/leadership" className={"md:rounded-t-md"}>Leadership & Management</Link>
                                <Link to="/civicengagement" className={"md:rounded-b-md"}>Civic Engagement</Link>
                            </div>
                        </div>
                        <Link to="/ppp" className={"topnav-item rounded-md"}>PPP<hr className={"md:hidden"}/></Link>
                        <Link to="/personalprojects" className={"topnav-item rounded-md"}>Personal Projects<hr className={"md:hidden"}/></Link>
                    </div>
                </section>
        );
    }



}

export default withRouter(Menu);