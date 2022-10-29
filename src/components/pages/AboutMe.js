import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
    return(
        <div id={"about-section"} className={"w-full flex flex-col items-center"}>
            <div className={"w-3/5 mt-24 mb-32"}>
                <h1 className={"mb-8 text-2xl underline underline-offset-4"}>About me</h1>
                <div className={""}>
                   <div className={"image-wrapper hidden lg:block mr-16 rounded-3xl lg:float-left"}>
                       <img
                       className={"image rounded-3xl"}
                       src={require("../../assets/big_photo_corentin.webp")}
                       alt={""}/>
                   </div>
                    <div className={"w-full text-lg lg:text-xl leading-7 text-justify"}>
                        Hi ! I'm Corentin Dominguez, I'm currently <b>last year student</b> at ENSEEIHT in Toulouse and and I hope, I will be soon <b>a software engineer</b> !<br/>

                        <br/>

                        <br/><b>I really like developing softwares and in particular web sites</b>. I started in my room learning
                        by myself. My studies also help me to understand many underlying concepts of web development.<br/>

                        <br/>As a professional experience, I had the chance to <b>freelance</b> at Phenix Digital as <b>fullstack developer</b>.<br/>

                        <br/>

                        <br/>Beyond this part of my life, <b>sport is very important</b>. I run several times per week and I always like
                        to learn and practice any kind of sport. I'm also a fanatic of <b>hiking and mountain trekking</b>.<br/>

                        <br/>
                        <br/>Aside from physical sport, I'm a <b>chess player</b> from many years, you can by the way challenge me
                        on chess.com (mettre le lien) ! And when I want to put my brain down, I love to <b>watch and discover new movies</b>.

                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutMe;