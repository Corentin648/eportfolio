import React, {Component} from 'react';
import '../styles/PersonalProjects.css';
import {Theme} from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import home_site_campus from "../../assets/home_site_camp_us.png";
import home_eportfolio from "../../assets/home_eportfolio.png";
import home_jeu_de_la_vie from "../../assets/home_jeu_de_la_vie.png"

class PersonalProjects extends Component{

    render() {
        return(

            <section className={"w-full flex flex-col items-center"}>
                <h1 className={`w-full mt-[50px] text-3xl text-center`}>
                    My projects
                </h1>
                <div className={"w-4/5 my-[80px] grid lg:grid-cols-2 2xl:grid-cols-3 gap-8 place-items-center"}>
                    <div className={`lg:relative w-full sm:w-4/5 md:w-3/5 h-max lg:w-[400px] lg:h-[450px] lg:mb-0 flex flex-col items-center rounded-md text-white ${Theme.bgPrimaryColor} shadow-2xl shadow-black`}>
                        <div className={"w-full rounded-t-md"}>
                            <img
                            className={"rounded-t-md"}
                            src={home_site_campus}
                            alt={""}/>
                        </div>
                        <h3 className={"w-full p-3 text-left text-2xl font-medium"}>Camp US website - 2021</h3>
                        <div className={"w-full pl-4 pb-2 text-md text-[#008b8b] text-left italic"}>React.JS, Sass</div>
                        <span className={"w-full p-4 text-lg text-justify"}>
                            A front-end website presenting my father's association, organising each year a military vehicles show
                        </span>
                        <div className={"lg:absolute lg:bottom-0 w-full mt-4 flex"}>
                            <a
                              className={"bg-[#444] border-r border-[#333] rounded-bl-md p-1 w-1/2 text-center text-2xl"}
                                  href={"https://camp-us-casson44.fr/#/"}
                                  target={"_blank"} rel={"noopener noreferrer"}
                            >
                                Try it
                            </a>
                            <Link
                                  className={"bg-[#444] border-l border-[#333] rounded-br-md p-1 w-1/2 text-center text-3xl"}
                                  to={"/personalprojects"}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                        </div>
                    </div>
                    <div className={`lg:relative w-full sm:w-4/5 md:w-3/5 lg:w-[400px] lg:h-[450px] flex flex-col items-center rounded-md text-white ${Theme.bgPrimaryColor} shadow-2xl shadow-black`}>
                        <div className={"w-full rounded-t-md"}>
                            <img
                                className={"rounded-t-md"}
                                src={home_eportfolio}
                                alt={""}/>
                        </div>
                        <h3 className={"w-full p-3 text-left text-2xl font-medium"}>Eportfolio - 2020</h3>
                        <div className={"w-full pl-4 pb-2 text-md text-[#008b8b] text-left italic"}>React.JS, Tailwind CSS</div>
                        <span className={"w-full p-4 text-lg text-justify"}>
                            The website you're currently browsing, presenting me and my projects
                        </span>
                        <div className={"lg:absolute lg:bottom-0 w-full mt-4 flex"}>
                            <Link
                                className={"bg-[#444] border-r border-[#333] rounded-bl-md p-1 w-1/2 text-center text-2xl"}
                                to={"/"}>
                                Try it
                            </Link>
                            <a
                                className={"bg-[#444] border-l border-[#333] rounded-br-md p-1 w-1/2 text-center text-3xl"}
                                href={"https://github.com/Corentin648/eportfolio"}
                                target={"_blank"} rel={"noopener noreferrer"}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                    <div className={`lg:relative w-full sm:w-4/5 md:w-3/5 lg:w-[400px] lg:h-[450px] lg:col-span-2 2xl:col-span-1 flex flex-col items-center rounded-md text-white ${Theme.bgPrimaryColor} shadow-2xl shadow-black`}>
                        <div className={"w-full rounded-t-md"}>
                            <img
                                className={"rounded-t-md"}
                                src={home_jeu_de_la_vie}
                                alt={""}/>
                        </div>
                        <h3 className={"w-full p-3 text-left text-2xl font-medium"}>Jeu de la vie - 2020</h3>
                        <div className={"w-full pl-4 pb-2 text-md text-[#008b8b] text-left italic"}>React.JS, JS</div>
                        <span className={"w-full p-4 text-lg text-justify"}>
                            A simple web project to monitor a Game of Life
                        </span>
                        <div className={"lg:absolute lg:bottom-0 w-full mt-4 flex"}>
                            <a
                                className={"bg-[#444] border-r border-[#333] rounded-bl-md p-1 w-1/2 text-center text-2xl"}
                                href={"https://github.com/Corentin648"}
                                target={"_blank"} rel={"noopener noreferrer"}>
                                Try it
                            </a>
                            <a
                                className={"bg-[#444] border-l border-[#333] rounded-br-md p-1 w-1/2 text-center text-3xl"}
                                href={"https://github.com/Corentin648/GameOfLifeWeb"}
                                target={"_blank"} rel={"noopener noreferrer"}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

}



export default PersonalProjects;