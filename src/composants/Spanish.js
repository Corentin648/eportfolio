import React, {Component} from 'react';
import ReactPlayer from "react-player";

class Spanish extends Component{

    render() {
        return(
            <div>
                <h1 className={"mt-5"}><u>Spanish</u></h1>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
                    <p style={{border: "1px solid black"}}>Project 1 -- Video presenting myself</p>
                    <ReactPlayer style={{border: "10px solid black"}} url={"https://youtu.be/dVFWuxUV7UE "} ></ReactPlayer>
                </div>
            </div>
        )
    }

}

export default Spanish;