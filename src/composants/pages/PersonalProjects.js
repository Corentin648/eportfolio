import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import '../styles/PersonalProjects.css';

class PersonalProjects extends Component{

    render() {
        return(

            <div id = {"card1"} style={{width: "100%", marginTop: "50px", display: "flex", justifyContent: "center"}}>
                <Card className={"bg-dark text-white"} style={{width: "80vw", overflow: "auto"}}>
                    <Card.Body>
                        <Card.Header>
                            <h3>Personal projects
                                <a href="https://github.com/Corentin648" target={"_blank"} rel={"noopener noreferrer"}><i style={{marginLeft: "15px", color: "#333"}} className="fa fa-github"/></a>
                            </h3>
                        </Card.Header>
                        <Card.Text>
                            <h5 className={"mt-5"} align={"justify"}>Game of life Web <a href="src/composants/pages/PersonalProjects" style={{color: "white"}} target={"_blank"} rel={"noopener noreferrer"}>(here)</a>
                            </h5>
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

        )
    }

}



export default PersonalProjects;