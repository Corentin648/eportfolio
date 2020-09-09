import React, {Component} from 'react';
import {Card, CardDeck} from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import './Home.css';


class Home extends Component{

    render() {
        return(
            <div className={""}>

                <h1 style={{marginTop: "70px"}}>Presentation of my computing experience and my skills</h1>

                <CardDeck className={"cardDeck"}>

                    <div id = {"card1"}>
                    <Card className={"bg-dark text-white"}>
                        <Card.Body>
                            <Card.Header>
                                <h3>Personal projects (github.com/Corentin648)</h3>
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

                    <div id={"card2"}>
                    <Card className={"bg-dark text-white"}>
                        <Card.Body>
                            <Card.Header>
                                <h3>Computer Skills</h3>
                            </Card.Header>
                            <Card.Text>
                                <div align={"justify"}>
                                    <ul>
                                        <li className={"my-4"}>Web Front-End : Javascript (React.js), HTML, CSS</li>
                                        <li className={"my-4"}>Game development : Godot Engine (GDScript & C#), LibGDX (Java)</li>
                                        <li className={"my-4"}>Android applications : Java/XML, Firebase (Data Base)</li>
                                        <li className={"my-4"}>Programming in general : Java, C, Python, Ada</li>
                                    </ul>
                                </div>
                            </Card.Text>
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
                                    </ul>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </CardDeck>

                <Jumbotron className={"mt-5"} style={{display: "flex", justifyContent: "center", flexDirection: "column", paddingTop: "5px"}}>
                        <h1 style={{marginBottom: "30px"}}>Education</h1>
                        <h5><u>ENSEEIHT, Toulouse (France)</u> -- <i>Digital sciences</i></h5>
                        <p>Engineering school specialised in computer science and telecommunications</p>
                </Jumbotron>

            </div>

        )
    }

}

export default Home;