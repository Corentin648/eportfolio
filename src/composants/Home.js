import React, {Component} from 'react';
import {Card, CardDeck} from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import './Home.css';
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";


class Home extends Component {

    render() {
        return (
            <div className={""}>

                <img id={"photo-corentin"} style={{
                    position: "absolute",
                    /*float: "left",*/
                    marginTop: "-70px",
                    marginLeft: "30px"
                }}
                     src={require("../photo_corentin_carree.jpg")} width={"200px"} height={"200px"}/>

                     <h1 id={"titre-home"} style={{width: "100%", textAlign: "center"}}>Computing and
                    personal skills</h1>


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