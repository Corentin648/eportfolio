import React, {Component} from 'react';
import '../styles/Mobility.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faEarthEurope,
    faMoneyBill,
    faNetworkWired,
    faScroll,
    faUserCheck
} from "@fortawesome/free-solid-svg-icons";

class Mobility extends Component{

    render() {
        return(
            <section className={"w-full flex flex-col justify-center items-center"}>
                <h1 className={"mt-[50px] mb-16 text-center text-3xl"}>
                    <FontAwesomeIcon className={"pr-2"} icon={faEarthEurope}/> Mobilité internationnale N7</h1>
                <div id={"trip-introduction"} className={"w-3/5"}>
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
                    <FontAwesomeIcon className={"pr-2"} icon={faBriefcase}/> Mes différents Workaway</h1>
                <div id={"trip-experiences"} className={"w-3/5"}>
                    <div className={"mb-16"}>
                        <h2 className={"mb-4 text-left text-2xl"}>1ère expérience : Turin (mettre les dates exactes)</h2>
                        <div className={"text-justify"}>
                            Chez Eliana, le projet consistait en la rénovation d’une partie de sa maison. En effet, nous avions pour objectif de remettre à neuf la chambre de sa fille qui étudie à l’étranger et qui devait rentrer pour Noël. Eliana venait de revenir habiter dans cette maison qu’elle avait déserté pendant la période du Covid.
                            Tout avait été laissé en bazar, nous avons donc passé presque les deux premières semaines à tout remettre en ordre et à déplacer de nombreux meubles (rip mon dos). Ensuite, nous avons pu entrer dans le vif du sujet, rénover la chambre.
                            La chambre étant petite, Eliana voulait construire une estrade sous laquelle il y aurait du rangement.
                            Nous avons donc construit cela et en parallèle nous avons installé sur les murs des plaques isolantes (il fait froid à Turin) et nous avons tout repeint.
                            Le projet fut terminé à temps, sa fille était très contente de son cadeau de Noël !
                        </div>
                    </div>
                    <div className={"mb-16"}>
                        <h2 className={"mb-4 text-left text-2xl"}>2ème expérience : Piano di Sorrento</h2>
                        <div className={"text-justify"}>
                            Cette fois, un projet de workaway un peu plus classique. Nos hôtes, Marta et Michele, venaient de commencer il y a quelques semaines un projet de permaculture dans leur immense domaine.
                            Étant des novices, ils voulaient expérimenter de nombreuses nouvelles méthodes afin de trouver celles qui correspondaient le mieux à leur terre.
                            En effet, l'expérimentation constitue l’essence de la permaculture, on cherche de manière empirique comment fonctionne notre sol afin d’y créer un écosystème.
                            Ainsi, nous testé entre la mise en place de ce qu’ils appelaient “un jardin élémentaire”, c’est une portion de terrain sur laquelle on dépose une couche de foin sur toute la zone avant de planter des légumes (pour nous c’était des oignons.
                            Ils essayaient aussi des méthodes de greffage (mettre un lien) de branche d’arbre sur un autre arbre, ce qui fonctionnait particulièrement bien. Parmi les moins fun, nous avons aussi placé du fumier au pied des jeunes arbres comme engrais organique.
                            Nous devions aussi, tous les matins, nous occuper des animaux et aller nourrir les cochons et les poules.
                            Ce workaway fut très enrichissant d'un point de vue technique, j’ai pu apprendre quelques notions de permaculture. C’était de plus très agréable de découvrir tout cela en même temps de Marta et Michele.
                            Un autre point très important que je dois mentionner est l’importance qu’accordent Marta et Michele aux questions écologiques et en particulier à la gestion des déchets.
                            D’une part, de par leur mode de vie, ils essaient de produire 0 déchet non recyclable et réduire au maximum ceux qui le sont. Ils ont aussi plusieurs composts qui ont chacun un usage en particulier.
                            Je tiens à soulever tout ça car cela m’a fait beaucoup réfléchir au sujet, entre autres, de la surconsommation et j’ai pu en discuter de nombreuses fois avec eux.
                        </div>
                    </div>

                    <div className={"mb-16"}>
                        <h2 className={"mb-4 text-left text-2xl"}>3ème expérience : Agio Nikolaos</h2>
                        <div className={"text-justify"}>
                            Direction le sud de la Grèce  De loin la plus difficile, j’ai passé deux semaines chez mon hôte Pavlos pour la récolte manuelle des olives.
                            Il n’y a pas grand chose à raconter professionnellement de cette expérience, si ce n’est que c’est un travail physiquement très fatiguant de part la longueur et l’intensité des journées. Mais malgré tout cela, c’était par de nombreux aspects une très belle expérience durant laquelle j’ai pu rencontrer pleins d’autres workawayers !
                        </div>
                    </div>

                    <div className={"mb-16"}>
                        <h2 className={"mb-4 text-left text-2xl"}>4ème expérience : Königsdorf</h2>
                        <div className={"text-justify"}>
                            Pour la fin du voyage, j’ai passé un mois chez Gabriele qui possède une ferme dont l’objectif est l’autosuffisance. En effet, Gabriele possède à la fois des animaux (vaches, moutons, chèvres, poules) mais aussi de nombreuses cultures de légumes, ce qui lui permet pendant une partie de l’année d’être autosuffisante en termes de nourriture.
                            J’y étais pendant la fin de la période hivernale, une grosse partie du travail, pas la plus amusante, a été de nettoyer ses nombreux hectares de terre.
                            De plus, la gestion du bois était très importante et nous devions y accorder beaucoup de temps. Effectivement, il y avait une cheminée dans la ferme, qui permettait à la fois d’alimenter toute l’eau chaude de la maison mais aussi de faire fonctionner le four et les plaques de cuisson.
                            Durant la fin de la période, nous avons pu commencer à replanter les premiers légumes et quand nous sommes partis, Gabriele a pu lâcher les moutons dans leur champ pour la période estivale.
                        </div>
                    </div>
                </div>
                <h1 className={"mt-[50px] mb-16 text-center text-3xl"}>
                    <FontAwesomeIcon className={"pr-2"} icon={faUserCheck}/> Ce que j'ai retenu</h1>
                <div id={"trip-conclusion"} className={"w-3/5 mb-16 text-justify"}>
                    De manière globale, les workaway ont été des expériences très enrichissantes. J’ai pu, à la fois d’un point de vue humain, y faire de nombreuses rencontres mais aussi d’un point de vue technique, y apprendre beaucoup choses dans de nombreux domaines manuels en un lapse de temps réduit, ce qui était l’un des objectifs du voyage.
                    Au-delà de tout ça, j’ai pu évidemment améliorer grandement mon anglais, surtout mon parlé du quotidien et ma compréhension des différents accents. Je suis pleinement satisfait de cela car c’était pour moi la première fois que j’avais à me confronter sur une si longue durée à mon quotidien en anglais. J’ai le sentiment d’avoir beaucoup progressé à ce sujet.
                </div>
            </section>
        )
    }

}

export default Mobility;