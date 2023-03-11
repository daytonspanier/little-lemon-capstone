import React from "react";
import "../Styles/About.css";

function About() {
    return(
        <section className="about-us">
            <div className="about-us-text">
                <h2>About us</h2>
                <p>Little Lemon is a charming Mediterranean restaurant that offers a warm and inviting dining experience. With a menu that features a range of delicious and authentic Mediterranean dishes, Little Lemon is sure to satisfy any craving. From the classic Greek salad to the flavorful shawarma wrap, each dish is made using fresh and seasonal ingredients that are locally sourced whenever possible. The restaurant's cozy atmosphere, with its colorful decor and comfortable seating, creates the perfect setting for a relaxed meal with friends and family. Whether you're a fan of Mediterranean cuisine or just looking for a new and exciting dining experience, Little Lemon is the perfect spot to enjoy flavorful and delicious food in a vibrant and welcoming environment.</p>
            </div>
            <div className="image-container">
                <div className="img-top">
                    <img src="icons_assets/Mario and Adrian b.jpg" alt="Owners of Little Lemon"/>
                </div>
                <div className="img-bottom">
                    <img src="icons_assets/Mario and Adrian A.jpg" alt="Owners of Little Lemon"/>
                </div>
            </div>
        </section>

    )
}

export default About;