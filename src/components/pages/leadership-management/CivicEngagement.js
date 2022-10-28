import React, {Component} from 'react';
import '../../styles/leadership-management/CivicEngagement.css';
import spreading_sciences from "../../../assets/poster_shs.webp";
import {Theme} from "../../../theme";


class CivicEngagement extends Component{

    render() {
        return(
            <section className={"w-full flex flex-col justify-center items-center"}>
                <h1 className={"mt-[50px] text-center text-3xl"}>Civic Engagement</h1>
                <div className={"mt-16 flex flex-col items-left"}>
                    <h3 className={"mb-4 text-left text-xl"}>Spreading Sciences</h3>
                    <div className={"img-wrapper"}>
                        <img className={"img"} src={spreading_sciences} alt=""/>
                    </div>
                    <a id={"inscription-form-button"}
                       className={`mt-2 ${Theme.textHoverPrimaryColor}`}
                       href={spreading_sciences}
                       target="_blank"
                       rel="noreferrer" download>
                        Download PDF
                    </a>
                </div>
            </section>

        )
    }

}

export default CivicEngagement;