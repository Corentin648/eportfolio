import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import '../styles/Footer.css';

class Footer extends Component {

    constructor(props) {
            super(props);
            this.state = {
                appHeightMemory: 0,
                footerMarginTop: 0
            }
        }

    handleResize = () => {
        this.setFooterMarginTop();
    }

    componentDidMount() {
        this.props.history.listen(() => {
            this.setFooterMarginTop();
        });

        this.setState({
            appHeightMemory: document.getElementById("App").offsetHeight
        })
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
    }

    setFooterMarginTop = () => {
        console.log(this.state.appHeightMemory);
        if (this.state.appHeightMemory < window.visualViewport.height){
            this.setState({
                appHeightMemory: document.getElementById("App").offsetHeight,
                footerMarginTop: window.visualViewport.height - document.getElementById("App").offsetHeight
            })
        } else {
            this.setState({
                footerMarginTop: 100
            })
        }
    }

    render() {
        return (
            <section id={"footer"} className={"w-full flex justify-center bg-[#333]"} style={{marginTop: this.state.footerMarginTop}}>
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

export default withRouter(Footer);