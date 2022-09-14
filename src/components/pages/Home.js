import React, {Component} from 'react';
import '../styles/Home.css';
import {Link} from "react-router-dom";
import {Theme} from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faUser
} from "@fortawesome/free-solid-svg-icons";


class Home extends Component {

    render() {
        return (
            <section id={"home-page"} className={"mb-16"}>

                <div id={"intro-section"} className={"w-full flex flex-col justify-center items-center"}>
                    <div className={"w-3/5 mt-8 flex justify-between items-center"}>
                       <div className={"flex flex-col items-left"}>
                            <h1 className={`${Theme.textPrimaryColor} text-3xl md:text-5xl md:leading-normal text-left`}>
                                Hi there, I'm Corentin Dominguez, a software programming student
                            </h1>
                           <h3 className={`mt-3 mb-4 ${Theme.textSoftPrimaryColor} text-xl text-left`}>
                               Currently studying at ENSEEIHT, an engineering school in Toulouse
                           </h3>
                           <div className={"mt-4 flex"}>
                               <Link
                                   className={`${Theme.bgHoverSecondaryColor} mr-2 border-2 border-[#008b8b] rounded-md p-3 w-min whitespace-nowrap hover:no-underline ${Theme.textPrimaryColor}`}
                                   to={"/aboutme"}>
                                   <FontAwesomeIcon className={"pr-2"} icon={faUser}/>More about me
                               </Link>
                               <Link
                                    className={`ml-2 ${Theme.bgSecondaryColor} ${Theme.bgHoverSecondaryColor} rounded-md p-3 w-min whitespace-nowrap hover:no-underline text-white`}
                                    to={"/personalprojects"}>
                                    Browse my projects<FontAwesomeIcon className={"pl-2"} icon={faArrowUpRightFromSquare}/>
                               </Link>
                           </div>
                       </div>

                        <img
                            className={"w-52 h-52 hidden lg:flex rounded-full shadow-black/50"}
                            src={require("../../assets/photo_corentin_carree.jpg")}
                            alt={""}/>
                    </div>
                    <div className={"w-3/5 mt-16 flex flex-col md:flex-row items-center"}>
                        <img
                            className={"md:hidden lg:block  md:w-1/3 w-4/5 md:mr-4"}
                            src={require("../../assets/workaway_logo.png")}
                            alt={""}/>
                        <h2
                            className={`md:ml-4 text-2xl md:text-4xl md:leading-normal text-center lg:text-left ${Theme.textPrimaryColor}`}>
                            Have a look at <Link
                                className={`underline ${Theme.textSecondaryColor} ${Theme.textHoverSecondaryColor}`}
                                to={"/mobility"}>my international mobility project</Link>
                        </h2>
                    </div>
                </div>
            </section>

        )
    }

}

export default Home;