import React, {Component} from 'react';
import '../styles/Mobility.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEarthEurope, faMoneyBill, faNetworkWired, faScroll} from "@fortawesome/free-solid-svg-icons";

class Mobility extends Component{

    render() {
        return(
            <section className={"w-full flex flex-col justify-center items-center"}>
                <h1 className={"mt-[50px] mb-16 text-center text-3xl"}>
                    <FontAwesomeIcon className={"pr-2"} icon={faEarthEurope}/> Mobilité internationnale N7</h1>
                <div id={"intro-trip"} className={"w-3/5"}>
                    <div className={"mb-16 text-justify"}>
                        Je présente ici mon projet de mobilité internationale dans le cadre de mes études à l'N7.
                        J'ai eu la chance de réaliser durant une IVE, un tour d'Europe en voiture, voyage durant lequel j'ai à la fois travaillé à l'aide de la plateforme Workaway mais aussi visité de nombreux pays !
                        Ainsi, je vais pouvoir ici parler plus en détail des expériences de Workaway que j'ai pu avoir. Si vous
                        voulez consulter la partie roadtrip de mon voyage, vous pouvez aller jeter un oeil à mon Polarsteps.
                    </div>
                    <div className={"mb-16"}>
                        <h2 className={"mb-4 text-left text-2xl"}>
                            <FontAwesomeIcon className={"pr-2"} icon={faNetworkWired}/> Workaway, qu'est ce que c'est ?</h2>
                        <div className={"text-justify"}>
                            Workaway est une plateforme web mondiale qui met en relation des "hosts" et des "travelers" (moi).
                            Les hosts proposent aux travelers un travail, souvent agricole, non rémunéré mais en l'échange d'un lit et de nourriture.
                        </div>
                    </div>

                    <div className={"mb-16"}>
                        <h2 className={"mb-4 text-left text-2xl"}>
                            <FontAwesomeIcon className={"pr-2"} icon={faMoneyBill}/> Financement du voyage</h2>
                        <div className={"text-justify"}>
                            Voyager c’est très bien mais il faut des fonds. J’ai donc travaillé de Septembre à Novembre, avant de partir, dans l’entreprise, PhoenixDigital,
                            dans laquelle j’ai fait mon stage de 2A, en tant que freelance (merci à eux de m’avoir repris ;) ) En revenant, j’ai encore travaillé chez eux durant les mois de Mai et Juin pour compléter le financement .
                        </div>
                    </div>

                    <div className={"mb-16"}>
                        <h2 className={"mb-4 text-left text-2xl"}>
                            <FontAwesomeIcon className={"pr-2"} icon={faScroll}/> Quelles expériences ai-je pu avoir ?</h2>
                        <div className={"text-justify"}>
                            Durant mon voyage, j’ai d’abord eu l’occasion de passer un workaway d’1 mois chez Eliana, une italienne vivant à Turin.J’ai ensuite passé deux semaines dans workaway près de Naples chez Marta et  Michele.
                            Après cela, direction la Grèce où j’ai eu une autre expérience chez Pavlos dans le Péloponnèse.
                            J’ai fini mon voyage en Autriche en passant un mois chez Gabriele près de Graz.
                        </div>
                    </div>
                </div>
                <h1 className={"mt-[50px] mb-16 text-center text-3xl"}>
                    <FontAwesomeIcon className={"pr-2"} icon={faEarthEurope}/> Mes différents Workaway</h1>
            </section>
        )
    }

}

export default Mobility;