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
import {faC, faDatabase} from "@fortawesome/free-solid-svg-icons";


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
                            <Link
                                className={`${Theme.bgSecondaryColor} ${Theme.bgHoverSecondaryColor} mt-4 rounded-sm p-3 w-min whitespace-nowrap hover:no-underline ${Theme.textPrimaryColor}`}
                                to={"/personalprojects"}>
                                Browse my projects
                            </Link>
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
                            Go and look at <Link
                                className={`underline ${Theme.textSecondaryColor} ${Theme.textHoverSecondaryColor}`}
                                to={"/mobility"}>my international mobility project</Link> page
                        </h2>
                    </div>
                </div>


               <div id={"cards-section"} className={"w-full mt-24 flex justify-center"}>
                    <div className={"w-4/5 lg:w-4/5 flex flex-col lg:flex-row lg:justify-center"}>
                       <div className={"w-full lg:w-[500px] h-max lg:h-[400px] overflow-scroll mb-[30px] lg:mb-0 lg:mr-[50px] " + Theme.cardClass}>
                          <div className={Theme.cardHeaderClass}>
                              Some of my programming skills
                              <a href="https://github.com/Corentin648"
                                 target={"_blank"}
                                 rel={"noopener noreferrer"}>
                                  <FontAwesomeIcon className={`ml-2 ${Theme.textPrimaryColor}`} icon={faGithub}/>
                              </a>
                          </div>

                           <div className={"text-white text-justify px-3 pb-8"}>
                               <div className={"flex flex-col outline outline-2 rounded-md"}>
                                   <div className={"my-2"}>
                                       <h5 className={"p-2"}>Frontend</h5>
                                       <div className={"p-2 flex"}>
                                           <div className={`py-1 px-2 bg-white ${Theme.textPrimaryColor}`}><FontAwesomeIcon className={"pr-2"} icon={faReact} />React.js</div>
                                           <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faAngular} />Angular</div>
                                           <div className={`py-1 px-2 bg-white ${Theme.textPrimaryColor}`}><FontAwesomeIcon className={"pr-2"} icon={faCss3} />TailwindCSS</div>
                                           <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faSass} />Sass</div>
                                       </div>
                                   </div>
                                   <div className={"my-2"}>
                                       <h5 className={"p-2"}>Backend</h5>
                                       <div className={"p-2 flex"}>
                                           <div className={`py-1 px-2 bg-white ${Theme.textPrimaryColor}`}><FontAwesomeIcon className={"pr-2"} icon={faPhoenixFramework} />Elixir (Phoenix)</div>
                                           <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faDatabase} />PostgreSQL</div>
                                       </div>
                                   </div>
                                   <div className={"my-2"}>
                                       <h5 className={"p-2"}>Other programming languages</h5>
                                       <div className={"p-2 flex"}>
                                           <div className={`py-1 px-2 bg-white ${Theme.textPrimaryColor}`}><FontAwesomeIcon className={"pr-2"} icon={faJava} />Java</div>
                                           <div className={"py-1 px-2 border"}><FontAwesomeIcon className={"pr-2"} icon={faC} /></div>
                                           <div className={`py-1 px-2 bg-white ${Theme.textPrimaryColor}`}><FontAwesomeIcon className={"pr-2"} icon={faPython} />Python</div>
                                           <div className={"py-1 px-2 border"}>Ada</div>
                                       </div>
                                   </div>
                                   <div className={"my-2"}>
                                       <h5 className={"p-2"}>Tools</h5>
                                       <div className={"p-2 flex"}>
                                           <div className={`py-1 px-2 bg-white ${Theme.textPrimaryColor}`}><FontAwesomeIcon className={"pr-2"} icon={faGithub} />Github</div>
                                           <div className={"py-1 px-2 border"}>Semaphore CI</div>
                                           <div className={`py-1 px-2 bg-white ${Theme.textPrimaryColor}`}><FontAwesomeIcon className={"pr-2"} icon={faDocker} />Docker</div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                        <div className={"w-full lg:w-[500px] h-max lg:h-[400px] overflow-scroll mt-[30px] lg:mt-0 lg:ml-[50px] " + Theme.cardClass}>
                            <div className={Theme.cardHeaderClass}>My personality and hobbies</div>
                            <div className={"text-white text-justify px-3 pb-8"}>
                                <ul>
                                    <li className={"my-4"}>Communication</li>
                                    <li className={"my-4"}>Autonomous</li>
                                    <li className={"mt-4"}>Flexible</li>
                                    <li className={"mt-4"}>Enterprising</li>
                                </ul>
                            </div>

                        </div>
                    </div>
               </div>
            </section>

        )
    }

}

export default Home;