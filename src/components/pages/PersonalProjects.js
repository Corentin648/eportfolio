import React, {Component} from 'react';
import '../styles/PersonalProjects.css';
import {Theme} from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

class PersonalProjects extends Component{

    render() {
        return(

            <section className={"flex w-full justify-center"}>
                <div className={"w-full lg:w-4/5 h-max mt-[50px] mb-[30px] lg:mb-0 " + Theme.cardClass}>
                    <div className={Theme.cardHeaderClass}>
                        Personal projects
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