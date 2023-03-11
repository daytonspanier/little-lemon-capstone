import React from "react";
import SpecialsCards from "./SpecialsCards";

function HighlightSection() {
    return(
        <section className="highlightsSection">
               <div className="specialsTitle">
                    <h2>This Weeks Specials</h2>
                    <button className="reserveTableButton">Reserve a Table</button>
               </div>
               <div>
                <SpecialsCards/>
               </div>
        </section>
    )
}


export default HighlightSection;