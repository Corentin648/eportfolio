import React, {Component} from 'react';
import '../styles/PPP.css';
import resume from '../../assets/Resume_Corentin_Dominguez.pdf';
import job_ad from '../../assets/job_ad_PPP.png';
import ppt from '../../assets/presentation_PPP.pdf';

class PPP extends Component{

    render() {
        return(

            <section className={"w-full flex flex-col justify-center items-center"}>

                <h1 className={"mt-[50px] text-center text-3xl"}>Welcome to my PPP page</h1>

                <div className={"w-min mt-16 flex flex-col items-left"}>
                    <h3 className={"link py-4 w-min whitespace-nowrap"}>
                        <a href = {job_ad} target = "_blank" rel=" noopener noreferrer">Here is the job ad I have chosen</a>
                    </h3>
                    <h3 className={"link py-4 w-min whitespace-nowrap"}>
                        <a href = {resume} target = "_blank" rel="noopener noreferrer">You can download my resume here</a>
                    </h3>
                    <h3 className={"link py-4 w-min whitespace-nowrap"}>
                        <a href = {ppt} target = "_blank" rel="noopener noreferrer">Here is my presentation's PPT</a>
                    </h3>
                </div>

            </section>

        )
    }

}



export default PPP;