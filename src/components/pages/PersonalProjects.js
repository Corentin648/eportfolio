import React, {Component} from 'react';
import '../styles/PersonalProjects.css';
import {Theme} from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

class PersonalProjects extends Component{

    render() {
        return(

            <section className={"flex flex-col w-full justify-center"}>
                <div className={"w-3/5 mt-8 flex justify-between items-center"}>
                    <div className={"flex flex-col items-left"}>
                        <h1 className={`${Theme.textPrimaryColor} text-3xl md:text-5xl md:leading-normal text-left`}>
                            You can look at my github here
                        </h1>
                    </div>
                </div>
                <div className={"w-full lg:w-[500px] mb-[30px] lg:mb-0 lg:mr-[50px] flex flex-col items-center"}>
                    <div className={Theme.cardHeaderClass}>
                        Some of my programming skills
                        <a href="https://github.com/Corentin648"
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <FontAwesomeIcon className={`ml-2 ${Theme.textPrimaryColor}`} icon={faGithub}/>
                        </a>
                    </div>


                    <div className={`w-full flex flex-col items-center rounded-md text-white ${Theme.bgPrimaryColor} shadow-2xl shadow-black`}>
                        <div>                        <img
                            className={""}
                            src={"https://via.placeholder.com/300x150"}
                            alt={""}/>
                        </div>
                        <h3 className={"w-full p-4 text-left text-2xl font-medium"}>Camp US website</h3>
                        <div className={"w-full p-4 text-md text-left italic"}>React.JS, Sass</div>
                        <span className={"w-full p-4 text-lg text-justify"}>
                            A front-end website presenting my father's association, organising each year a military vehicles show
                        </span>
                        <div className={"w-full flex"}>
                            <Link
                                  className={"slide-button border-2 border-[#333] rounded-md p-3 w-1/2 text-center text-2xl"}
                                  to={"/aboutme"}>
                                Try it<FontAwesomeIcon className={"pl-4"} icon={faArrowUpRightFromSquare}/>
                            </Link>
                            <Link id={"projects-button"}
                                  className={"slide-button sm:ml-2 rounded-md p-3 w-1/2 hover:no-underline text-center text-2xl text-white"}
                                  to={"/personalprojects"}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"w-full lg:w-4/5 h-max mt-[50px] mb-[30px] lg:mb-0 " + Theme.cardClass}>
                    <div className={Theme.cardHeaderClass}>
                        My projects
                        <a href="https://github.com/Corentin648"
                           target={"_blank"}
                           rel={"noopener noreferrer"}>
                            <FontAwesomeIcon className={`ml-2 ${Theme.textPrimaryColor}`} icon={faGithub}/>
                        </a>
                    </div>

                    <div className={"text-white text-justify px-3 pb-8"}>
                        <h5 className={"mt-5"} align={"justify"}>Game of life Web <a href="src/components/pages/PersonalProjects" style={{color: "white"}} target={"_blank"} rel={"noopener noreferrer"}>(here)</a>
                        </h5>
                        <h6 className={"font-italic py-2"} align={"justify"}>September 2020</h6>
                        <div align={"justify"}>
                            Creation of a web site with Reat.js. It aims to parameter a game of life. We can choose size of the grid,
                            size of the cases but also rules of life and death that are applied in game.
                            We can also act on the grid like add a pattern, play and pause the game and make it progress step by step or step back.
                        </div>
                        <h5 className={"pt-5"} align={"justify"}>Develop a Python Game</h5>
                        <h6 className={"font-italic py-2"} align={"justify"}>March - May 2018</h6>
                        <div align={"justify"}>
                            Creation of a platform game with two players in Python language.
                            It allowed me to know how the “ object technology” works in Python.
                            Moreover, it was a team project (6 persons),
                            so I learned to work in a group and this during a few months.
                        </div>
                    </div>
                </div>
            </section>

        )
    }

}



export default PersonalProjects;