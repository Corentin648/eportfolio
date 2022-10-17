import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import '../styles/Footer.css';
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Theme} from "../../theme";

class Footer extends Component {

    static iconClass = `fa-3x ${Theme.textPrimaryColor} ${Theme.textHoverPrimaryColor} transition ease-in-out duration-300`

    constructor(props) {
            super(props);
            this.state = {
                footerMarginTop: 0
            }
        }

        getCurrentYear = () => {
            let d = new Date();
            return d.getFullYear();
        }

    render() {
        return (
            <section id={"footer"} className={"absolute bottom-0 w-full flex flex-col items-center justify-center"}>
                    <div className={"w-3/5 md:w-2/5 flex justify-between py-4"} id={"networks-item"}>
                        <a href={"https://www.facebook.com/corentin.dmz.9"}
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <FontAwesomeIcon className={Footer.iconClass} icon={faFacebook}/>
                        </a>
                        <a href={"https://www.linkedin.com/in/corentin-dominguez-545b5a1a8/"}
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <FontAwesomeIcon className={Footer.iconClass } icon={faLinkedin}/>
                        </a>
                        <a href={"https://www.github.com/Corentin648"}
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <FontAwesomeIcon className={Footer.iconClass} icon={faGithub}/>
                        </a>
                    </div>
                    <div className={"py-2 px-8 text-xs text-gray-400"}>Copyright &copy; {this.getCurrentYear()} Corentin Dominguez. All Rights Reserved</div>
            </section>
        )
            ;
    }
}

export default withRouter(Footer);