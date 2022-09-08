import React, {Component} from 'react';
import ReactPlayer from "react-player";
import "../../styles/leadership-management/LeadershipManagement.css";


class LeadershipManagement extends Component{

    render() {
        return(
        <section className={"w-full flex flex-col justify-center items-center"}>
            <h1 className={"mt-[50px] text-center text-3xl"}>Leadership & Management</h1>
            <div className={"mt-16 flex flex-col items-left"}>
                <h3 className={"mb-4 text-left text-xl"}>Video presenting my choice for my second year field at ENSEEIHT</h3>
                <div className={"player-wrapper"}>
                    <ReactPlayer height={"100%"} width={"100%"} className={"player"} url={"https://youtu.be/K_phshsuixc"} />
                </div>
            </div>
        </section>
        )
    }

}

export default LeadershipManagement;