import React, {Component} from 'react';
import '../styles/Home.css';
import {Link} from "react-router-dom";
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
import {
    faArrowUpRightFromSquare,
    faC,
    faChess,
    faDatabase,
    faFilm,
    faMountain,
    faPersonRunning,
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
                                   to={"/personalprojects"}>
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


               <div id={"cards-section"} className={"w-full mt-24 flex justify-center"}>
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
                                   <div className={"p-2 flex"}>
                                       <div className={"py-1 px-2 border rounded-l-xl"}><FontAwesomeIcon className={"pr-2"} icon={faReact} />React.js</div>
                                       <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faAngular} />Angular</div>
                                       <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faCss3} />TailwindCSS</div>
                                       <div className={"py-1 px-2 border rounded-r-xl"}><FontAwesomeIcon className={"pr-2"} icon={faSass} />Sass</div>
                                   </div>
                               </div>
                               <div className={"my-2"}>
                                   <h5 className={"p-2"}>Backend</h5>
                                   <div className={"p-2 flex"}>
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
               </div>
            </section>

        )
    }

}

export default Home;