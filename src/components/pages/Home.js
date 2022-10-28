import React, {Component} from 'react';
import '../styles/Home.css';
import {Link} from "react-router-dom";
import {Theme} from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cv_francais from "../../assets/CV_français.pdf";
import {
    faArrowUpRightFromSquare,
    faUser
} from "@fortawesome/free-solid-svg-icons";


class Home extends Component {

    render() {
        return (
            <section id={"home-page"} className={"mb-16 w-full flex justify-center"}>
                    <div className={"w-4/5 lg:w-3/5 mt-16 lg:mt-32 flex flex-col lg:flex-row justify-between items-start"}>
                       <div className={"flex flex-col items-left"}>
                            <h1 className={`${Theme.textPrimaryColor} text-3xl xl:text-5xl md:leading-normal text-left`}>
                                Hi there ! I'm Corentin Dominguez, a software programming student
                            </h1>
                           <h3 className={`mt-8 mb-4 ${Theme.textSoftPrimaryColor} text-xl text-left`}>
                               Currently studying at ENSEEIHT, an engineering school in Toulouse
                           </h3>
                           <div className={"mt-16 flex flex-col sm:flex-row"}>
                               <Link id={"aboutme-button"}
                                   className={`slide-button mb-4 sm:mb-0 sm:mr-2 border-2 border-[#333] rounded-md p-3 w-min whitespace-nowrap hover:no-underline ${Theme.textPrimaryColor}`}
                                   to={"/aboutme"}>
                                   <FontAwesomeIcon className={"pr-2"} icon={faUser}/>More about me
                               </Link>
                               <Link id={"projects-button"}
                                    className={`slide-button sm:ml-2 rounded-md p-3 w-min whitespace-nowrap hover:no-underline text-white`}
                                    to={"/personalprojects"}>
                                    Browse my projects<FontAwesomeIcon className={"pl-2"} icon={faArrowUpRightFromSquare}/>
                               </Link>
                           </div>
                           <div className={"my-16 flex flex-col md:flex-row items-center"}>
                               <img
                                   className={"hidden lg:block md:w-1/3 w-4/5 md:mr-4"}
                                   src={require("../../assets/workaway_logo.webp")}
                                   alt={""}/>
                               <h2
                                   className={`lg:ml-4 text-lg xl:text-2xl md:leading-normal text-center lg:text-left ${Theme.textPrimaryColor}`}>
                                   I just wrote an article about my international mobility at ENSEEIHT, <Link
                                   className={`underline ${Theme.textSecondaryColor} ${Theme.textHoverSecondaryColor}`}
                                   to={"/mobility"}>look at it !</Link>
                               </h2>
                           </div>
                       </div>
                        <div className={"w-max h-max flex flex-col items-center"}>
                            <img
                                className={"w-60 h-60 max-w-none hidden lg:flex rounded-full"}
                                src={require("../../assets/photo_corentin_carree.webp")}
                                alt={""}/>
                            <a id={"inscription-form-button"}
                               className={`py-4 text-sm ${Theme.textSoftPrimaryColor} font-medium hover:underline`}
                               href={cv_francais}
                               target="_blank"
                               rel="noreferrer" download>
                                Download my resume
                            </a>
                        </div>
                    </div>
            </section>

        )
    }

}

export default Home;