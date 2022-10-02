import React, {Component} from 'react';
import '../styles/PersonalProjects.css';
import {Theme} from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import home_site_campus from "../../assets/home_site_camp_us.png";
import home_eportfolio from "../../assets/home_eportfolio.png";

class PersonalProjects extends Component{

    render() {
        return(

            <section className={"flex w-full justify-center"}>
{/*                <div className={"w-3/5 mt-8 flex justify-between items-center"}>
                    <div className={"flex flex-col items-left"}>
                        <h1 className={`${Theme.textPrimaryColor} text-3xl md:text-5xl md:leading-normal text-left`}>
                            You can look at my github here
                        </h1>
                    </div>
                </div>*/}
                <div className={"w-full lg:w-4/5 flex flex-col md:flex-row justify-center items-center"}>
                    <div className={`w-full lg:w-[450px] flex flex-col items-center rounded-md text-white ${Theme.bgPrimaryColor} shadow-2xl shadow-black`}>
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
                        <div className={"w-full mt-4 flex"}>
                            <a
                                  className={"bg-[#444] border-r border-[#333] rounded-bl-md p-3 w-1/2 text-center text-2xl"}
                                  href={"https://camp-us-casson44.fr/#/"}
                                  target={"_blank"} rel={"noopener noreferrer"}
                            >
                                Try it
                            </a>
                            <Link
                                  className={"bg-[#444] border-l border-[#333] rounded-br-md p-3 w-1/2 text-center text-3xl"}
                                  to={"/personalprojects"}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                        </div>
                    </div>
                    <div className={`w-full lg:w-[450px] flex flex-col items-center rounded-md text-white ${Theme.bgPrimaryColor} shadow-2xl shadow-black`}>
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
                        <div className={"w-full mt-4 flex"}>
                            <a
                                className={"bg-[#444] border-r border-[#333] rounded-bl-md p-3 w-1/2 text-center text-2xl"}
                                href={"https://corentin648.github.io/"}
                                target={"_blank"} rel={"noopener noreferrer"}
                            >
                                Try it
                            </a>
                            <Link
                                className={"bg-[#444] border-l border-[#333] rounded-br-md p-3 w-1/2 text-center text-3xl"}
                                to={"/personalprojects"}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

}



export default PersonalProjects;