import React, {useState} from 'react';
import '../styles/Menu.css';
import {Link, withRouter} from "react-router-dom";
import {faBars, faCaretDown, faTimes,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Theme} from '../../theme';

const Menu = () => {

    let [toggleClick, setToggleClick] = useState('');

    let [dropButtonClick, setDropButtonClick] = useState('');

    const handleOpenCloseSidebar = () => {
        if (window.screen.width < 768) {
            let x = document.getElementById("topnav");
            const expandTabs = x.className.includes("expand-tabs");

            setToggleClick(expandTabs ? "" : "expand-tabs");
        }

    }

    const handleOnClickDropButton = () => {
        if (window.screen.width >= 768) {
            let x = document.getElementById("dropdown");
            const expandContent = x.className.includes("expand-content");

            setDropButtonClick(expandContent ? "" : "expand-content");
        }
    }

    const handleOnBlurDropdownContent = () => {
        if (window.screen.width >= 768) {
            setDropButtonClick("");
        }
    }

    return (
        <section id={"topbar-section"} className={`${toggleClick}`}>
            <button
                id={"little-screens-toggle"}
                className={"md:hidden block fixed top-0 right-0 p-4"}
                onClick={() => handleOpenCloseSidebar()}>
                <FontAwesomeIcon className={"h-5 w-5"} icon={faBars}/>
            </button>
            <div
                className={`${toggleClick} ${Theme.bgColor} ${Theme.textPrimaryColor}`}
                id="topnav">

                <div id={"topnav-header"} className={"md:hidden flex w-full justify-end"}>
                    <button id={"toggle"} className={"p-4"} onClick={() => handleOpenCloseSidebar()}>
                        <FontAwesomeIcon className={"h-5 w-5"} icon={faTimes}/>
                    </button>
                </div>

                <Link to="/" className="topnav-item rounded-md" onClick={() => handleOpenCloseSidebar()}>Home<hr className={"md:hidden"}/></Link>
                <Link to="/aboutme" className="topnav-item rounded-md" onClick={() => handleOpenCloseSidebar()}>About me<hr className={"md:hidden"}/></Link>
                <Link to="/mobility" className={"topnav-item rounded-md"} onClick={() => handleOpenCloseSidebar()}>Mobility<hr className={"md:hidden"}/></Link>
                <Link to="/personalprojects" className={"topnav-item rounded-md"} onClick={() => handleOpenCloseSidebar()}>My Projects<hr className={"md:hidden"}/></Link>
                <div
                    id={"dropdown"}
                    className={`${dropButtonClick}`}
                    onClick={() => handleOnClickDropButton()}
                >
                    <button id={"dropbutton"} className="topnav-item rounded-md">ENSEEIHT
                        <FontAwesomeIcon id={"caret-down"} className={"pl-4"} icon={faCaretDown}/>
                        <hr className={"md:hidden"}/>

                    </button>
                    <div
                        id={"dropdown-content"}
                        className="md:rounded-md  md:mt-2"
                        onMouseLeave={() => handleOnBlurDropdownContent()}>
                        <Link to="/leadership" className={"md:rounded-t-md"} onClick={() => handleOpenCloseSidebar()}>Leadership & Management</Link>
                        <Link to="/civicengagement" className={"md:rounded-b-md"} onClick={() => handleOpenCloseSidebar()}>Civic Engagement</Link>
                        <Link to="/spanish" className={"md:rounded-t-md"} onClick={() => handleOpenCloseSidebar()}>Spanish</Link>
                        <Link to="/ppp" className={"md:rounded-b-md"} onClick={() => handleOpenCloseSidebar()}>PPP</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Menu);