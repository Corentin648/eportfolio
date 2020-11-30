import React, {Component} from 'react';
import './PPP.css';
import Pdf from '../Resume_Corentin_Dominguez.pdf';

class PPP extends Component{

    render() {
        return(

            <div>
                <h1 style={{marginTop: "50px", textAlign: "center"}}>Welcome to my PPP page</h1><br/>
                <h3 style={{marginTop: "50px", textAlign: "left"}}>Here is the job ad I have chosen</h3>
                <h3 id={"pdf_resume"} style={{width: "100%", marginTop: "50px", textAlign: "left"}}>
                    <a href = {Pdf} target = "_blank">You can download my resume here</a>
                </h3>
                <h3 style={{marginTop: "50px", textAlign: "left"}}>Here is my presentation's PPT</h3><br/>

            </div>

        )
    }

}



export default PPP;