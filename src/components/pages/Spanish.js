import React from 'react';
import ReactPlayer from "react-player";
import '../styles/Spanish.css';

const Spanish = () => {
    return(
        <section className={"w-full flex flex-col justify-center items-center"}>
            <h1 className={"mt-[50px] text-center text-3xl"}>Spanish Projects</h1>
            <div className={"mt-16 flex flex-col items-left"}>
                <h3 className={"mb-4 text-left text-xl"}>Video presenting myself</h3>
                <div className={"player-wrapper"}><ReactPlayer height={"100%"} width={"100%"} className={"player"} url={"https://youtu.be/dVFWuxUV7UE "} /></div>
            </div>
        </section>
    )
}

export default Spanish;