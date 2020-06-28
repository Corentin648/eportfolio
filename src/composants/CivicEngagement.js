import React, {Component} from 'react';
import ReactPlayer from "react-player";
import {Image} from "react-bootstrap";


class CivicEngagement extends Component{

    render() {
        return(
            <div>
                <h1 className={"mt-5"}><u>Civic Engagement</u></h1>
                <h3
                    className={"mt-5 d-flex justify-content-left"}
                    style={{marginLeft:'20rem'}}
                > Project 1 -- Spreading Sciences</h3>

                <div className={"mt-4"}></div>
                    <Image src={require("../poster_shs.png")} width={"743rem"} height={"529rem"}/>
                </div>
        )
    }

}

export default CivicEngagement;