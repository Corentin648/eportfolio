import React, {Component} from 'react';
import '../styles/AboutMe.css';
import {Theme} from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngular,
    faCss3, faDocker,
    faGithub,
    faJava,
    faPhoenixFramework, faPython,
    faReact,
    faSass
} from "@fortawesome/free-brands-svg-icons";
import {faC, faChess, faDatabase, faFilm, faMountain, faPersonRunning} from "@fortawesome/free-solid-svg-icons";

class AboutMe extends Component{

    render() {
        return(
            <div id={"about-section"} className={"w-full mt-24 flex flex-col items-center"}>
                <div className={"w-3/5"}>
                    <h1 className={"text-2xl underline underline-offset-4"}>About me</h1>
                    <div className={"flex flex-col lg:flex-row"}>
                       <div className={"w-1/2"}>
                           <img
                           className={"h-[600px] rounded-md shadow-black/50"}
                           src={require("../../assets/big_photo_corentin.jpeg")}
                           alt={""}/>
                       </div>
                        <div className={"w-1/2"}>Hi ! I'm Corentin Dominguez, I will be soon (I hope) a software engineer. I currently study
                            at ENSEEIHT in Toulouse and yes, this is my last year ! I started programming no that long ago,
                            when I started school actually, but I loved it immediately. At high school, I was a maths lover,
                            but during my prep's school I became a little bit to theoretical for me and that's why I strongly believe
                            that computing is for me the best alternative between theory and practice.<br/>

                            <br/>Now I really like developing softwares and in particular web sites. I started from scratch in my room
                            by myself I have the feeling I always acquire new competences. My studies also helped me a lot
                            to understand many theoretical and underlying concepts of web development. In parallel, I had the
                            chance to freelance at Phenix Digital as fullstack developer. I learned there professionalism.<br/>

                            <br/>

                        </div>
                    </div>
                    <div>La partie des skills</div>
                </div>



                <div className={"w-4/5 lg:w-4/5 flex flex-col lg:flex-row lg:justify-center"}>
                    <div className={"w-full lg:w-[500px] mb-[30px] lg:mb-0 lg:mr-[50px] flex flex-col items-center"}>
                        <div className={Theme.cardHeaderClass}>
                            Some of my programming skills
                            <a href="https://github.com/Corentin648"
                               target={"_blank"}
                               rel={"noopener noreferrer"}>
                                <FontAwesomeIcon className={`ml-2 ${Theme.textPrimaryColor}`} icon={faGithub}/>
                            </a>
                        </div>

                        <div className={`w-full flex flex-col rounded-md text-white ${Theme.bgPrimaryColor} shadow-2xl shadow-black`}>
                            <div className={"my-2"}>
                                <h5 className={"p-2"}>Frontend</h5>
                                <div className={"p-2 flex justify-center"}>
                                    <div className={"py-1 px-2 border rounded-l-xl"}><FontAwesomeIcon className={"pr-2"} icon={faReact} />React.js</div>
                                    <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faAngular} />Angular</div>
                                    <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faCss3} />TailwindCSS</div>
                                    <div className={"py-1 px-2 border rounded-r-xl"}><FontAwesomeIcon className={"pr-2"} icon={faSass} />Sass</div>
                                </div>
                            </div>
                            <div className={"my-2"}>
                                <h5 className={"p-2"}>Backend</h5>
                                <div className={"p-2 flex justify-center"}>
                                    <div className={"py-1 px-2 border rounded-l-xl"}><FontAwesomeIcon className={"pr-2"} icon={faPhoenixFramework} />Elixir (Phoenix)</div>
                                    <div className={"py-1 px-2 border rounded-r-xl"}><FontAwesomeIcon className={"pr-2"} icon={faDatabase} />PostgreSQL</div>
                                </div>
                            </div>
                            <div className={"my-2"}>
                                <h5 className={"p-2"}>Other programming languages</h5>
                                <div className={"p-2 flex"}>
                                    <div className={"py-1 px-2 border rounded-l-xl"}><FontAwesomeIcon className={"pr-2"} icon={faJava} />Java</div>
                                    <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faC} /></div>
                                    <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faPython} />Python</div>
                                    <div className={"py-1 px-2 border rounded-r-xl"}>Ada</div>
                                </div>
                            </div>
                            <div className={"my-2"}>
                                <h5 className={"p-2"}>Tools</h5>
                                <div className={"p-2 flex"}>
                                    <div className={"py-1 px-2 border rounded-l-xl"}><FontAwesomeIcon className={"pr-2"} icon={faGithub} />Github</div>
                                    <div className={"py-1 px-2 border"}>Semaphore CI</div>
                                    <div className={"py-1 px-2 border rounded-r-xl"}><FontAwesomeIcon className={"pr-2"} icon={faDocker} />Docker</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full lg:w-[500px] mb-[30px] lg:mb-0 lg:ml-[50px] flex flex-col items-center"}>
                        <div className={Theme.cardHeaderClass}>
                            My personality and hobbies
                        </div>

                        <div className={`w-full flex flex-col rounded-md text-white ${Theme.bgPrimaryColor} shadow-2xl shadow-black`}>
                            <div className={"my-2"}>
                                <h5 className={"p-2"}>My personality</h5>
                                <div className={"p-2 flex"}>
                                    <div className={"py-1 px-2 border rounded-l-xl"}>Communicating</div>
                                    <div className={"py-1 px-2 border"}>Autonomous</div>
                                    <div className={"py-1 px-2 border"}>Flexible</div>
                                    <div className={"py-1 px-2 border rounded-r-xl"}>Enterprising</div>
                                </div>
                            </div>
                            <div className={"my-2"}>
                                <h5 className={"p-2"}>My hobbies</h5>
                                <div className={"p-2 flex"}>
                                    <div className={"py-1 px-2 border rounded-l-xl"}><FontAwesomeIcon className={"pr-2"} icon={faPersonRunning} />Running</div>
                                    <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faMountain} />Trekking</div>
                                    <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faChess} />Playing chess</div>
                                    <div className={"py-1 px-2 border rounded-r-xl"}><FontAwesomeIcon className={"pr-2"} icon={faFilm} />Watching movies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        )
    }

}

export default AboutMe;