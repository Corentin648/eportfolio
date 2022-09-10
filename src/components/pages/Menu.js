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

    handleOnClickToggle = () => {
        if (window.screen.width < 750) {
            let x = document.getElementById("myTopNav");
            const expandTabs = x.className.includes("expand-tabs");

            this.setState({
                toggleClick: expandTabs ? "" : "expand-tabs"
            });
        }

    }

    render() {
        return (
                <section id={"topbar-section"} className={`${this.state.toggleClick}`}>
                    <button id={"little-screens-toggle"} className={"md:hidden block fixed top-0 right-0 p-4"} onClick={() => this.handleOnClickToggle()}>
                        <i className={"fa fa-bars"}/>
                    </button>
                    <div
                        className={`topnav ${this.state.toggleClick} ${Theme.bgColor} ${Theme.textPrimaryColor}`}
                        id="myTopNav">
                        <img
                            id={"brand-n7"}
                            className={"hidden lg:block absolute left-0 top-0"}
                            style={{marginLeft: "5vw"}}
                            src={require("../../assets/logo_n7_v3.png")}
                            width={"200px"}
                            height={"104px"}
                            alt=""/>

                        <div id={"topnav-header"} className={"md:hidden flex w-full justify-end"}>
                            <button id={"toggle"} className={"p-4"} onClick={() => this.handleOnClickToggle()}>
                                <i className={"fa fa-times"}/>
                            </button>
                        </div>

                        <Link to="/" className="active rounded-md">Home<hr className={"md:hidden"}/></Link>
                        <Link to="/spanish" className={"rounded-md"}>Spanish<hr className={"md:hidden"}/></Link>
                        <Link to="/mobility" className={"rounded-md"}>Mobility<hr className={"md:hidden"}/></Link>
                        <div className="dropdown">
                            <button className="dropbtn rounded-md">Soft & Human Skills
                                <FontAwesomeIcon className={"caret-down pl-4"} icon={faCaretDown}/>
                                <hr className={"md:hidden"}/>

                            </button>
                            <div className="dropdown-content">
                                <Link to="/leadership">Leadership & Management</Link>
                                <Link to="/civicengagement">Civic Engagement</Link>
                            </div>
                        </div>
                        <Link to="/ppp" className={"rounded-md"}>PPP<hr className={"md:hidden"}/></Link>
                        <Link to="/personalprojects" className={"rounded-md"}>Personal Projects<hr className={"md:hidden"}/></Link>
                    </div>
                </section>
        );
    }



}

export default withRouter(Menu);