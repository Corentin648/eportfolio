import React, {Component} from 'react';
import {Image} from "react-bootstrap";
import '../../styles/leadership-management/CivicEngagement.css';


class CivicEngagement extends Component{

    render() {
        return(
            <div>
                <h1 className={"mt-5"}><u>Civic Engagement</u></h1>
                <div style={{display: "flex", flexDirection: "column", marginTop: "50px", marginLeft: "10%"}}>
                    <h3 style={{textAlign: "left"}}> Project 1 -- Spreading Sciences</h3>
                    <Image className={"imgPoster"} style={{paddingTop: "20px"}} src={require("../../../assets/poster_shs.png")}></Image>
                    {/*width={"50%"} height={"35.6%"}/>*/}
                </div>
            </div>
        )
    }

}

export default CivicEngagement;