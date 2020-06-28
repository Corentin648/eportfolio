import React, {Component} from 'react';
import ReactPlayer from "react-player";


class Spanish extends Component{

    render() {
        return(
            <div>
                <h1 className={"mt-5"}><u>Spanish</u></h1>
                <h3
                    className={"mt-5 d-flex justify-content-left"}
                    style={{marginLeft:'20rem'}}
                > Project 1 -- Video presenting myself</h3>

                <ReactPlayer
                    className={"mt-5"}
                    style={{marginLeft:'20rem'}}
                    url={"https://youtu.be/dVFWuxUV7UE "}>
                </ReactPlayer>
            </div>
        )
    }

}

export default Spanish;