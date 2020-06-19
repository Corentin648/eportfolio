import React, {Component} from 'react';
import {Card, CardDeck} from "react-bootstrap";


class Home extends Component{

    render() {
        return(
            <div className={"d-block"}>

                <h3>Welcome to my E-portfolio website !</h3>

                <div className={"mt-5"}></div>

                <CardDeck style={{marginTop: '15rem'}}>

                    <Card className={"bg-dark text-white"} style={{ width: '18rem' , marginLeft: '10rem', marginRight:'7rem'}}>
                        <Card.Body>
                            <Card.Header>
                                <h3>Work Experience</h3>
                            </Card.Header>
                                <Card.Text>

                                    <h5 className={"mt-5"} align={"justify"}>Projet Declick 4'Teens</h5>
                                    <h6 className={"font-italic py-2"} align={"justify"}>Collège Lautrec, Toulouse</h6>
                                    <div align={"justify"}>
                                        Creation of a video game with middle school pupils on a platform created for it.
                                        We are three students for fifteen pupils.
                                        I learn, weeks after weeks, to lead a team of young people and among others to fix some conflicts.
                                    </div>

                                    <h5 className={"pt-5"} align={"justify"}>Develop a Python Game</h5>
                                    <h6 className={"font-italic py-2"} align={"justify"}>Personal project</h6>
                                    <div align={"justify"}>
                                        Creation of a platform game with two players in Python language.
                                        It allowed me to know how the “ object technology” works in Python.
                                        Moreover, it was a team project (6 persons),
                                        so I learned to work in a group and this during a few months.
                                    </div>

                                </Card.Text>
                        </Card.Body>
                    </Card>

                    <div className={"ml-5"}></div>

                    <Card className={"bg-dark text-white"} style={{ width: '18rem' , marginLeft: '7rem', marginRight: '10rem'}}>
                        <Card.Body>
                            <Card.Header>
                                <h3>Computer Skills</h3>
                            </Card.Header>
                            <Card.Text>
                                <div align={"justify"}>
                                    <ul>
                                        <li className={"my-4"}>Java +++</li>
                                        <li className={"my-4"}>C +++</li>
                                        <li className={"my-4"}>Ada ++</li>
                                        <li className={"my-4"}>Python ++</li>
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

                </CardDeck>
            </div>

        )
    }

}

export default Home;