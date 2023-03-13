import React from "react";
import ReservationsButton from "./ReservationsButton";
import SpecialsCards from "./SpecialsCards";

function HighlightSection() {
    return(
        <section className="highlightsSection">
               <div className="specialsTitle">
                    <h2>This Weeks Specials</h2>
                    <ReservationsButton />
               </div>
               <div>
                <SpecialsCards/>
               </div>
        </section>
    )
}


export default HighlightSection;