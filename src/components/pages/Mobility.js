import React, {Component} from 'react';
import '../styles/Mobility.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBook,
    faBriefcase,
    faEarthEurope,
    faMoneyBill,
    faNetworkWired,
    faScroll,
    faUserCheck
} from "@fortawesome/free-solid-svg-icons";
import compte_workaway from "../../assets/compte_workaway.pdf";

class Mobility extends Component{

    static sectionClass  = "w-4/5 lg:w-3/5 text-justify leading-8";
    static titleClass = "w-4/5 lg:w-3/5 mt-12 mb-16 text-center text-3xl";
    static subTitleClass = "mb-4 text-left text-2xl";

    render() {
        return(
            <section className={"w-full flex flex-col justify-center items-center"}>
                <h1 className={Mobility.titleClass}>
                    <FontAwesomeIcon className={"pr-2"} icon={faEarthEurope}/> Mobilité internationale N7</h1>
                <div id={"trip-introduction"} className={Mobility.sectionClass}>
                    <div className={"mb-16"}>
                        Je présente ici mon projet de mobilité internationale dans le cadre de mes études à l'N7.
                        J'ai eu la chance de réaliser au cours une IVE, un tour d'Europe en voiture avec ma copine, voyage durant lequel j'ai à la fois travaillé à l'aide de la plateforme Workaway mais aussi visité de nombreux pays !
                        Ainsi, je vais pouvoir ici parler plus en détail des expériences de Workaway que j'ai pu avoir. Si vous
                        voulez consulter la partie plus roadtrip de mon voyage, vous pouvez aller jeter un oeil à <a href={"https://www.polarsteps.com/Caradin/4635804-roadtrip-en-europe"} target={"_blank"} rel={"noopener noreferrer"} className={"text-[#008b8b]"}>mon Polarsteps</a>
                        , que j'ai commencé à partir de la Grèce.
                    </div>
                    <div className={"mb-16"}>
                        <h2 className={Mobility.subTitleClass}>
                            <FontAwesomeIcon className={"pr-2"} icon={faNetworkWired}/> Workaway, qu'est ce que c'est ?</h2>
                        <div>
                            Workaway est une plateforme web qui met en relation des "hosts" et des "travelers".
                            Les hosts proposent aux travelers un travail, souvent agricole, non rémunéré mais en l'échange d'un lit et de nourriture.
                        </div>
                    </div>

                    <div className={"mb-16"}>
                        <h2 className={Mobility.subTitleClass}>
                            <FontAwesomeIcon className={"pr-2"} icon={faMoneyBill}/> Financement du voyage</h2>
                        <div>
                            Voyager c’est très bien, mais il faut des fonds. J’ai donc travaillé en tant que freelance de Septembre à Novembre, avant de partir, dans l’entreprise <a href={"https://www.phenixgroupe.com/"} target={"_blank"} rel={"noopener noreferrer"} className={"text-[#008b8b]"}>Phenix Groupe</a>,
                            pour laquelle j’avait déjà fait mon stage de 2A, merci à eux de m’avoir repris ! En revenant, j’ai encore travaillé chez eux en Mai et Juin pour compléter le financement.
                        </div>
                    </div>

                    <div className={"mb-16"}>
                        <h2 className={Mobility.subTitleClass}>
                            <FontAwesomeIcon className={"pr-2"} icon={faScroll}/> Quelles expériences ai-je pu avoir ?</h2>
                        <div>
                            Durant mon voyage, j’ai d’abord eu l’occasion de faire un workaway d’1 mois chez Eliana, une italienne vivant à Turin. J’ai ensuite passé deux semaines dans workaway près de Naples chez Marta et  Michele.
                            Après cela, direction la Grèce où j’ai eu une autre expérience chez Pavlos dans le Péloponnèse.
                            J’ai fini mon voyage en Autriche en passant un mois chez Gabriele près de Graz.
                        </div>
                    </div>
                </div>
                <h1 className={Mobility.titleClass}>
                    <FontAwesomeIcon className={"pr-2"} icon={faBriefcase}/> Mes différents workaway</h1>
                <div id={"trip-experiences"} className={Mobility.sectionClass}>
                    <div className={"mb-16"}>
                        <h2 className={Mobility.subTitleClass}>Turin, Italie : 22/11/2021 - 20/12/2021</h2>
                        <div>
                            Chez Eliana, le projet consistait en la rénovation d’une partie de sa maison. En effet, nous avions pour objectif de remettre à neuf la chambre de sa fille qui étudie à l’étranger et qui devait rentrer pour Noël. Eliana venait de revenir habiter dans cette maison qu’elle avait déserté pendant la période du Covid.
                            Tout avait été laissé en bazar, nous avons donc passé presque les deux premières semaines à tout remettre en ordre et à déplacer de nombreux meubles.<br/>
                            Ensuite, nous avons pu entrer dans le vif du sujet, rénover la chambre. La chambre étant petite, Eliana voulait construire une estrade sous laquelle il y aurait du rangement.
                            Nous avons donc construit cela et en parallèle nous avons installé sur les murs des plaques isolantes (il fait froid à Turin) et nous avons tout repeint.
                            Le projet fut terminé à temps, sa fille était très contente de son cadeau de Noël !
                        </div>
                    </div>
                    <div className={"mb-16"}>
                        <h2 className={Mobility.subTitleClass}>Piano di Sorrento, Italie : 26/12/2021 - 10/01/2022</h2>
                        <div>
                            Cette fois, un projet de workaway un peu plus classique. Nos hôtes, Marta et Michele, venaient de commencer il y a quelques semaines un projet de permaculture dans leur immense domaine.
                            Étant des novices, ils voulaient expérimenter de nombreuses nouvelles méthodes afin de trouver celles qui correspondaient le mieux à leur terre.
                            En effet, l'expérimentation constitue l’essence même de la permaculture, on cherche de manière empirique comment fonctionne notre sol afin d’y créer un écosystème. <br/>
                            Ainsi, nous avons testé entre autres la mise en place de ce qu’ils appelaient “un jardin élémentaire”, c’est une portion de terrain sur laquelle on dépose une couche de foin sur toute la zone avant de planter des légumes (pour nous c’était des oignons.)
                            Ils essayaient aussi des <a href={"https://fr.wikipedia.org/wiki/Greffe_(botanique)"} target={"_blank"} rel={"noopener noreferrer"} className={"text-[#008b8b]"}>méthodes de greffage</a> de branche d’arbre sur un autre arbre, ce qui fonctionnait particulièrement bien.
                            Parmi les moins fun, nous avons aussi placé du fumier comme engrais organique au pied des jeunes arbres. <br/>
                            Nous devions aussi, tous les matins, nous occuper des animaux et aller nourrir les cochons et les poules.<br/>
                            <br/>Ce workaway fut très enrichissant d'un point de vue technique, j’ai pu apprendre quelques notions de permaculture. C’était de plus très agréable de découvrir tout cela en même temps de Marta et Michele.
                            Un autre point très important que je dois mentionner est l’importance qu’accordent Marta et Michele aux questions écologiques et en particulier à la gestion des déchets.
                            D’une part, de par leur mode de vie, ils essaient de produire 0 déchet non recyclable et réduire au maximum ceux qui le sont. Ils ont aussi plusieurs composts qui ont chacun un usage en particulier.
                            Je tiens à soulever tout ça car cela m’a fait beaucoup réfléchir au sujet, entre autres, de la surconsommation et j’ai pu en discuter de nombreuses fois avec eux.
                        </div>
                    </div>

                    <div className={"mb-16"}>
                        <h2 className={Mobility.subTitleClass}>Agio Nikolaos, Grèce : 30/01/2022 - 14/02/2022</h2>
                        <div>
                            Direction le sud de la Grèce pour ce qui était de loin l'expérience la plus difficile.<br/>
                            J’ai passé deux semaines chez mon hôte Pavlos pour la récolte manuelle des olives.
                            Professionnellement, il n'y a pas beaucoup plus à redire de cette expérience, si ce n’est que c’est un travail physiquement très fatiguant de part la longueur et l’intensité des journées.
                            Pavlos nous laissait tout de même autant de jours de pause que l'on voulait si nous étions trop épuisés, cela reste du volontariat !<br/>
                            Mais malgré la difficulté, c’était par de nombreux aspects une très belle expérience durant laquelle j’ai pu rencontrer d’autres workawayers avec qui nous avons passé de très bons moments.
                        </div>
                    </div>

                    <div className={"mb-16"}>
                        <h2 className={Mobility.subTitleClass}>Königsdorf, Autriche : 04/03/2022 - 30/03/2022</h2>
                        <div>
                            Pour la fin du voyage, j’ai passé un mois chez Gabriele dans une ferme dont l’objectif est l’auto-suffisance. En effet, Gabriele possède à la fois des animaux (vaches, moutons, chèvres, poules) mais aussi de nombreuses cultures de légumes, ce qui lui permet pendant une partie de l’année d’être auto-suffisante en termes de nourriture.<br/>
                            Je suis resté durant la fin de la période hivernale, ainsi, une grosse partie du travail consistait en le  nettoyage de ses nombreux hectares de terre.
                            De plus, chaque jour nous devions passer au moins une heure à nous occuper du bois, en particulier à le couper. Effectivement, la ferme possédait une cheminée qui permettait à la fois d’alimenter toute l’eau chaude de la maison mais aussi de faire fonctionner le four et les plaques de cuisson.<br/>
                            Pour la fin de la période, nous avons pu commencer à replanter les premiers légumes et quand nous sommes partis, Gabriele a pu lâcher les moutons dans leur champ pour la période estivale !
                        </div>
                    </div>
                </div>
                <h1 className={Mobility.titleClass}>
                    <FontAwesomeIcon className={"pr-2"} icon={faUserCheck}/> Ce que j'ai retenu</h1>
                <div id={"trip-conclusion"} className={Mobility.sectionClass + " mb-16"}>
                    De manière globale, les workaway ont été des expériences très enrichissantes. J’ai pu, à la fois d’un point de vue humain, y faire de nombreuses rencontres mais aussi d’un point de vue technique, y apprendre beaucoup de choses dans de nombreux domaines manuels en un lapse de temps réduit, ce qui était l’un des objectifs du voyage.<br/>
                    Au-delà de tout ça, j’ai pu évidemment améliorer grandement mon anglais, et en particulier mon parlé du quotidien ainsi que ma compréhension des différents accents. Je suis pleinement satisfait de cela car c’était pour moi la première fois que je restais aussi longtemps à l'étranger.<br/>
                    <br/><h5 className={"text-xl"}>En bref, ce voyage m'a surtout donné envie d'en faire d'autres de ce genre et sans doute au delà de l'Europe pour y découvrir de nouvelles cultures !</h5>
                </div>
                <h1 className={Mobility.titleClass}>
                    <FontAwesomeIcon className={"pr-2"} icon={faBook}/>Annexes</h1>
                <div id={"trip-conclusion"} className={Mobility.sectionClass + " mb-16"}>
                    Le lien de mon Polarsteps, pour la partie roadtrip de mon voyage : <a href={"https://www.polarsteps.com/Caradin/4635804-roadtrip-en-europe"} target={"_blank"} rel={"noopener noreferrer"} className={"text-[#008b8b] break-words"}>https://www.polarsteps.com/Caradin/4635804-roadtrip-en-europe</a><br/>

                    <br/>Je n'ai pas renouvelé mon abonnement à Workaway (60 euros), il est donc impossible de le voir depuis l'extérieur.<br/>
                    Voici donc <a href={compte_workaway} target={"_blank"} rel={"noopener noreferrer"} className={"text-[#008b8b]"} download>la page web de mon compte</a> imprimée en pdf, je fais au mieux, preuve de son existence !<br/>

                    <br/>Quelques preuves papier de mon voyage

                </div>
            </section>
        )
    }

}

export default Mobility;