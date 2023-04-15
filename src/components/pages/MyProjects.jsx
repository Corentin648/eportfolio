import React from 'react';
import '../styles/MyProjects.css';
import {Theme} from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import home_site_campus from "../../assets/home_site_camp_us.webp";
import home_eportfolio from "../../assets/home_eportfolio.webp";
import home_jeu_de_la_vie from "../../assets/home_jeu_de_la_vie.webp"

const MyProjects = () => {

    const cardClass = `lg:relative w-full sm:w-4/5 md:w-3/5 h-max lg:w-[400px] lg:h-[450px] lg:mb-0 flex flex-col items-center rounded-md text-white ${Theme.bgPrimaryColor} shadow-md shadow-black/50`;
    const cardTitleClass = "w-full p-3 text-left text-2xl font-medium";
    const cardTagsClass = `w-full pl-4 pb-2 text-md ${Theme.textSecondaryColor} text-left italic`;
    const cardTextClass = "w-full p-4 text-lg text-justify";
    const cardFooterClass = "lg:absolute lg:bottom-0 w-full mt-4 flex";

    return(
        <section className={"w-full flex flex-col items-center"}>
            <h1 className={`w-full mt-[50px] text-3xl text-center`}>
                My projects
            </h1>
            <div id={"cards-grid"} className={"w-4/5 my-[80px] grid lg:grid-cols-2 2xl:grid-cols-3 gap-8 place-items-center"}>
                <div className={cardClass}>
                    <div className={"w-full rounded-t-md"}>
                        <img
                        className={"rounded-t-md"}
                        src={home_site_campus}
                        alt={""}/>
                    </div>
                    <h3 className={cardTitleClass}>Camp US website - 2021</h3>
                    <div className={cardTagsClass}>React.JS, Sass</div>
                    <span className={cardTextClass}>
                        A front-end website presenting my father's association, organising each year a military vehicles show
                    </span>
                    <div className={cardFooterClass}>
                        <a
                          className={"bg-[#444] border-r border-[#333] rounded-bl-md p-1 w-1/2 text-center text-2xl"}
                              href={"https://camp-us-casson44.fr/#/"}
                              target={"_blank"} rel={"noopener noreferrer"}
                        >
                            Try it
                        </a>
                        <a
                              className={"bg-[#444] border-l border-[#333] rounded-br-md p-1 w-1/2 text-center text-3xl"}
                              href={"https://github.com/Corentin648/Projet8mai"}
                              target={"_blank"} rel={"noopener noreferrer"}
                        >
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </div>
                <div className={cardClass}>
                    <div className={"w-full rounded-t-md"}>
                        <img
                            className={"rounded-t-md"}
                            src={home_eportfolio}
                            alt={""}/>
                    </div>
                    <h3 className={cardTitleClass}>Eportfolio - 2020</h3>
                    <div className={cardTagsClass}>React.JS, Tailwind CSS</div>
                    <span className={cardTextClass}>
                        The website you're currently browsing, presenting me and my projects
                    </span>
                    <div className={cardFooterClass}>
                        <Link
                            className={"bg-[#444] border-r border-[#333] rounded-bl-md p-1 w-1/2 text-center text-2xl"}
                            to={"/eportfolio"}>
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
                <div className={cardClass + " lg:col-span-2 2xl:col-span-1"}>
                    <div className={"w-full rounded-t-md"}>
                        <img
                            className={"rounded-t-md"}
                            src={home_jeu_de_la_vie}
                            alt={""}/>
                    </div>
                    <h3 className={cardTitleClass}>Jeu de la vie - 2020</h3>
                    <div className={cardTagsClass}>React.JS, JS</div>
                    <span className={cardTextClass}>
                        A simple web project to monitor a Game of Life
                    </span>
                    <div className={cardFooterClass}>
                        <a
                            className={"bg-[#444] border-l border-[#333] rounded-b-md p-1 w-full text-center text-3xl"}
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



export default MyProjects;