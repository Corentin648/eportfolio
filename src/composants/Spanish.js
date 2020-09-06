import React, {Component} from 'react';
import ReactPlayer from "react-player";
import './Spanish.css';

class Spanish extends Component{

    render() {
        return(
            <div>
                <h1 className={"mt-5"}><u>Spanish</u></h1>
                <div style={{display: "flex", flexDirection: "column", marginTop: "50px", marginLeft:"10%"}}>
                    <h3 style={{textAlign: "left"}}>Project 1 -- Video presenting myself</h3>
                    <div className={"player-wrapper"} style={{border: "1px solid black"}} ><ReactPlayer height={"100%"} width={"100%"} className={"player"} url={"https://youtu.be/dVFWuxUV7UE "} /></div>
                </div>
            </div>
        )
    }

}

export default Spanish;