import React, {Component} from 'react';
import {Card, CardDeck} from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import './Home.css';
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";


class Home extends Component{

    render() {
        return(
            <div className={""}>

                <h1 style={{width: "100%", alignSelf: "center", marginTop: "70px"}}>Computing and personal skills</h1>


                <div style={{display: "flex", marginTop: "50px"}}>

                    <img className={"photocorentin"} style={{marginTop: "30px", marginLeft: "30px"}} src={require("../photo_corentin.jpg")} width={"200px"} height={"268px"}/>

                    <div style={{width: "100%"}}>
                        <CardDeck className={"cardDeck"}>

                            <div id={"card1"}>
                                <Card className={"bg-dark text-white"}>
                                    <Card.Body>
                                        <Card.Header>
                                            <h3>Computer Skills
                                                <a href="https://github.com/Corentin648" target={"_blank"} rel={"noopener noreferrer"}><i style={{marginLeft: "15px", color: "#333"}} className="fa fa-github"/></a>
                                            </h3>
                                        </Card.Header>
                                        <Card.Text>
                                            <div align={"justify"}>
                                                <ul>
                                                    <li className={"my-4"}><Link to={"/personalprojects"}>Presentation of my personal projects</Link></li>
                                                    <li className={"my-4"}>Web Front-End : Javascript (React.js), HTML, CSS</li>
                                                    <li className={"my-4"}>Game development : Godot Engine (GDScript & C#), LibGDX (Java)</li>
                                                    <li className={"my-4"}>Android applications : Java/XML, Firebase (Data Base)</li>
                                                    <li className={"my-4"}>Programming in general : Java, C, Python, Ada</li>
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
                </div>

                {/*
                <div id = {"card3"}>
                    <Card className={"bg-dark text-white"}>
                        <Card.Body>
                            <Card.Header>
                                <h3>Personal projects (<a style={{color: "#333"}} href={"https://github.com/Corentin648"} target={"_blank"} rel={"noopener noreferrer"}> github.com/Corentin648)</a></h3>
                            </Card.Header>
                            <Card.Text>
                                <h5 className={"mt-5"} align={"justify"}>Game of life Web</h5>
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

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                */}

                <div className={"educationFooter"}>
                    <h1 style={{marginBottom: "50px", marginTop: "10px"}}>Education</h1>
                    <h5><u>ENSEEIHT, Toulouse (France)</u> -- <i>Digital sciences</i></h5>
                    <p>Engineering school specialised in computer science and telecommunications</p>
                </div>

            </div>

        )
    }

}

export default Home;