import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import '../styles/Footer.css';

class Footer extends Component {

    constructor(props) {
            super(props);
            this.state = {
                footerMarginTop: 0
            }
        }

    render() {
        return (
            <section id={"footer"} className={"w-full mt-[50px] flex flex-col items-center justify-center"}>
                    <div className={"w-2/5 flex justify-between py-4"} id={"networks-item"}>
                        <a className="network-icon" id="fb-icon" href={"https://www.facebook.com/corentin.dmz.9"}
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <i className="fa fa-facebook-square fa-3x text-[#333] hover:text-[#008b8b]"/>
                        </a>
                        <a className="network-icon" id="fb-icon" href={"https://www.linkedin.com/in/corentin-dominguez-545b5a1a8/"}
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <i className="fa fa-linkedin-square fa-3x text-[#333] hover:text-[#008b8b]"/>
                        </a>
                        <a className="network-icon" id="fb-icon" href={"https://www.github.com/Corentin648"}
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <i className="fa fa-github-square fa-3x text-[#333] hover:text-[#008b8b]"/>
                        </a>
                    </div>
            </section>
        )
            ;
    }
}

export default withRouter(Footer);