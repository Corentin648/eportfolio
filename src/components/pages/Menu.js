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

    handleOpenCloseSidebar = () => {
        if (window.screen.width < 768) {
            let x = document.getElementById("topnav");
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
                        onClick={() => this.handleOpenCloseSidebar()}>
                        <FontAwesomeIcon className={"h-5 w-5"} icon={faBars}/>
                    </button>
                    <div
                        className={`${this.state.toggleClick} ${Theme.bgColor} ${Theme.textPrimaryColor}`}
                        id="topnav">

                        <div id={"topnav-header"} className={"md:hidden flex w-full justify-end"}>
                            <button id={"toggle"} className={"p-4"} onClick={() => this.handleOpenCloseSidebar()}>
                                <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes}/>
                            </button>
                        </div>

                        <Link to="/" className="topnav-item rounded-md" onClick={() => this.handleOpenCloseSidebar()}>Home<hr className={"md:hidden"}/></Link>
                        <Link to="/spanish" className={"topnav-item rounded-md"} onClick={() => this.handleOpenCloseSidebar()}>Spanish<hr className={"md:hidden"}/></Link>
                        <Link to="/mobility" className={"topnav-item rounded-md"} onClick={() => this.handleOpenCloseSidebar()}>Mobility<hr className={"md:hidden"}/></Link>
                        <div
                            id={"dropdown"}
                            className={`${this.state.dropButtonClick}`}
                            onClick={() => this.handleOnClickDropButton()}
                        >
                            <button id={"dropbutton"} className="topnav-item rounded-md">Soft & Human Skills
                                <FontAwesomeIcon id={"caret-down"} className={"pl-4"} icon={faCaretDown}/>
                                <hr className={"md:hidden"}/>

                            </button>
                            <div
                                id={"dropdown-content"}
                                className="md:rounded-md  md:mt-2"
                                onMouseLeave={() => this.handleOnBlurDropdownContent()}>
                                <Link to="/leadership" className={"md:rounded-t-md"} onClick={() => this.handleOpenCloseSidebar()}>Leadership & Management</Link>
                                <Link to="/civicengagement" className={"md:rounded-b-md"} onClick={() => this.handleOpenCloseSidebar()}>Civic Engagement</Link>
                            </div>
                        </div>
                        <Link to="/ppp" className={"topnav-item rounded-md"} onClick={() => this.handleOpenCloseSidebar()}>PPP<hr className={"md:hidden"}/></Link>
                        <Link to="/personalprojects" className={"topnav-item rounded-md"} onClick={() => this.handleOpenCloseSidebar()}>My Projects<hr className={"md:hidden"}/></Link>
                    </div>
                </section>
        );
    }



}

export default withRouter(Menu);