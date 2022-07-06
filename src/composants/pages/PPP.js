import React, {Component} from 'react';
import '../styles/PPP.css';
import resume from '../../assets/Resume_Corentin_Dominguez.pdf';
import job_ad from '../../assets/job_ad_PPP.png';
import ppt from '../../assets/presentation_PPP.pdf';

class PPP extends Component{

    render() {
        return(

            <div>
                <h1 style={{marginTop: "50px", textAlign: "center"}}>Welcome to my PPP page</h1><br/>

                <h3 className={"link"}>
                    <a href = {job_ad} target = "_blank" rel=" noopener noreferrer">Here is the job ad I have chosen</a>
                </h3>
                <h3 className={"link"}>
                    <a href = {resume} target = "_blank" rel="noopener noreferrer">You can download my resume here</a>
                </h3>
                <h3 className={"link"}>
                    <a href = {ppt} target = "_blank" rel="noopener noreferrer">Here is my presentation's PPT</a>
                </h3>

            </div>

        )
    }

}



export default PPP;