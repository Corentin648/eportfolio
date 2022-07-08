import React, {Component} from 'react';
import '../styles/Footer.css';

class Footer extends Component {

    render() {
        return (
            <section id={"footer"} className={"mt-24 flex justify-center bg-[#333]"} style={{width: "100%"}}>
                    <div className={"footer-item w-2/5 flex justify-between py-4"} id={"networks-item"}>
                        <a className="network-icon" id="fb-icon" href={"https://www.facebook.com/corentin.dmz.9"}
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <i style={{color: "white"}}
                               className="fa fa-facebook-square fa-3x"/>
                        </a>
                        <a className="network-icon" id="fb-icon" href={"https://www.linkedin.com/in/corentin-dominguez-545b5a1a8/"}
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <i style={{color: "white"}}
                               className="fa fa-linkedin-square fa-3x"/>
                        </a>
                        <a className="network-icon" id="fb-icon" href={"https://www.github.com/Corentin648"}
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <i style={{color: "white"}}
                               className="fa fa-github-square fa-3x"/>
                        </a>
                    </div>
            </section>
        )
            ;
    }
}

export default Footer;