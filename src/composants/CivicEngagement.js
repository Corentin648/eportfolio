import React, {Component} from 'react';
import ReactPlayer from "react-player";


class CivicEngagement extends Component{

    render() {
        return(
            <div>
                <h1 className={"mt-5"}><u>Civic Engagement</u></h1>
                <h3
                    className={"mt-5 d-flex justify-content-left"}
                    style={{marginLeft:'20rem'}}
                > Project 1 -- Video presenting my choice for my second year field at ENSEEIHT</h3>

                <ReactPlayer
                    className={"mt-5"}
                    style={{marginLeft:'20rem'}}
                    url={" https://youtu.be/K_phshsuixc"}>
                </ReactPlayer>
            </div>
        )
    }

}

export default CivicEngagement;