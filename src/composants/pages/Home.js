import React, {Component} from 'react';
import {Card, CardDeck} from "react-bootstrap";
import '../styles/Home.css';
import {Link} from "react-router-dom";


class Home extends Component {

    render() {
        return (
            <div>

                <div className={"w-full flex justify-center"}>
                    <div className={"w-3/5 mt-8 flex justify-between items-center"}>
                       <div className={"flex flex-column items-left"}>
                            <h1 className={"text-3xl md:text-5xl md:leading-normal text-left"}>
                                Hi there, I'm Corentin Dominguez, a software programming student
                            </h1>
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


                <div style={{width: "100%"}}>
                        <CardDeck className={"cardDeck"}>
                            <div id={"card1"}>
                                <Card className={"bg-dark text-white"}>
                                    <Card.Body>
                                        <Card.Header>
                                            <h3>Computer Skills
                                                <a href="https://github.com/Corentin648" target={"_blank"}
                                                   rel={"noopener noreferrer"}><i
                                                    style={{marginLeft: "15px", color: "#333"}}
                                                    className="fa fa-github"/></a>
                                            </h3>
                                        </Card.Header>
                                        <Card.Text>
                                            <div align={"justify"}>
                                                <ul>
                                                    <li className={"my-4"}><Link to={"/personalprojects"}>Presentation
                                                        of my personal projects</Link></li>
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
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div id={"card2"}>
                                <Card className={"bg-dark text-white"}>
                                    <Card.Body>
                                        <Card.Header>
                                            <h3>Personal Skills</h3>
                                        </Card.Header>
                                        <Card.Text>
                                            <div align={"justify"}>
                                                <ul>
                                                    <li className={"my-4"}>Good communication skills</li>
                                                    <li className={"my-4"}>Team spirit</li>
                                                    <li className={"my-4"}>Autonomous</li>
                                                    <li className={"mt-4"}>Flexible</li>
                                                    <li className={"mt-4"}>Enterprising</li>
                                                </ul>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </CardDeck>
                </div>

                <div className={"education-footer"}>
                    <h1 style={{marginBottom: "50px", marginTop: "10px"}}>Education</h1>
                    <h5><u>ENSEEIHT, Toulouse (France)</u> -- <i>Digital sciences</i></h5>
                    <p>Engineering school specialised in computer science and telecommunications</p>
                </div>
            </div>

        )
    }

}

export default Home;