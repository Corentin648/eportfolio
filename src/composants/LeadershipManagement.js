import React, {Component} from 'react';
import ReactPlayer from "react-player";
import "./LeadershipManagement.css";


class LeadershipManagement extends Component{

    render() {
        return(
            <div>
                <h1 className={"mt-5"}><u>Leadership & Management</u></h1>
                <div style={{display: "flex", flexDirection: "column", marginTop: "50px", marginLeft:"10%"}}>
                    <h3 style={{textAlign: "left"}}>Project 1 -- Video presenting my choice for my second year field at ENSEEIHT</h3>
                    <div className={"player-wrapper"}><ReactPlayer height={"100%"} width={"100%"} className={"player"} url={" https://youtu.be/K_phshsuixc"} /></div>
                </div>
            </div>
        )
    }

}

export default LeadershipManagement;