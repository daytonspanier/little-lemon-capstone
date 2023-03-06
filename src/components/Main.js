import React from "react";
// import SpecialsCards from "./SpecialsCards";

function Main() {
    return(
        <div>
            {/* Hero Section */}
            <section className="heroSection">
            <div>
                    <h1>Little Lemon</h1>
                    <h2>Victoria</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern modern twist. It's the perfect spot for a romantic date night, family dinner, or a relaxing lunch with friends.</p>
                    <button className="reserveTableButton">Reserve a Table</button>
                </div>
                <div className="heroImage">
                    <img src="icons_assets/restaurant chef B.jpg" />
                </div>
            </section>
            {/*Highlight section (Specials)  */}
            <section className="highlightsSection">
               <div className="specialsTitle">
                    <h2>This Weeks Specials</h2>
                    <button className="reserveTableButton">Reserve a Table</button>
               </div>
               <div>
                {/* Special cards go here */}
               </div>
            </section>
        </div>

    );
};

export default Main;