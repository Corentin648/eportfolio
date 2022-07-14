import React, {Component} from 'react';
import '../styles/Home.css';
import {Link} from "react-router-dom";
import {Theme} from "../../theme";


class Home extends Component {

    render() {
        return (
            <section>

                <div className={"w-full flex justify-center"}>
                    <div className={"w-3/5 mt-8 flex justify-between items-center"}>
                       <div className={"flex flex-col items-left"}>
                            <h1 className={"text-3xl md:text-5xl md:leading-normal text-left"}>
                                Hi there, I'm Corentin Dominguez, a software programming student
                            </h1>
                           <h3 className={"mt-3 mb-4 text-xl text-left text-gray-600"}>
                               Currently studying at ENSEEIHT, an engineering school in Toulouse
                           </h3>
                            <Link
                                className={"bg-[#008b8b] hover:bg-[#56c1c0] mt-4 rounded-sm p-3 w-min whitespace-nowrap hover:no-underline text-gray-800 hover:text-gray-800"}
                                to={"/personalprojects"}>
                                Browse my projects
                            </Link>
                       </div>

                        <img
                            className={"w-52 h-52 hidden lg:flex rounded-full shadow-black/50"}
                            src={require("../../assets/photo_corentin_carree.jpg")}
                            alt={""}/>
                    </div>
                </div>

               <div className={"w-full my-24 flex justify-center"}>
                    <div className={"w-4/5 lg:w-4/5 flex flex-col lg:flex-row lg:justify-center"}>
                       <div className={"w-full lg:w-[500px] h-max lg:h-[400px] overflow-scroll mb-[30px] lg:mb-0 lg:mr-[50px] " + Theme.cardClass}>
                          <div className={Theme.cardHeaderClass}>
                              Some of my programming skills
                              <a href="https://github.com/Corentin648" target={"_blank"}
                                 rel={"noopener noreferrer"}><i
                                  style={{marginLeft: "15px", color: "#333"}}
                                  className="fa fa-github"/>
                              </a>
                          </div>

                           <div className={"text-white text-justify px-3 pb-8"}>
                               <ul>
                                   <li className={"my-4"}>Web Front-End : Javascript (React.js), HTML,
                                       CSS
                                   </li>
                                   <li className={"my-4"}>Game development : Godot Engine (GDScript &
                                       C#), LibGDX (Java)
                                   </li>
                                   <li className={"my-4"}>Android applications : Java/XML, Firebase
                                       (Data Base)
                                   </li>
                                   <li className={"my-4"}>Programming in general : Java, C, Python,
                                       Ada
                                   </li>
                               </ul>
                           </div>
                       </div>
                        <div className={"w-full lg:w-[500px] h-max lg:h-[400px] overflow-scroll mt-[30px] lg:mt-0 lg:ml-[50px] " + Theme.cardClass}>
                            <div className={Theme.cardHeaderClass}>My personality and hobbies</div>
                            <div className={"text-white text-justify px-3 pb-8"}>
                                <ul>
                                    <li className={"my-4"}>Good communication skills</li>
                                    <li className={"my-4"}>Team spirit</li>
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