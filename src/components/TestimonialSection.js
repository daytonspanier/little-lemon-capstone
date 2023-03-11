import React from "react";
import "../Styles/TestimonialSection.css";
import TestimonialsCards from "./TestimonialsCards";

function TestimonialSection() {
    return(
        <div className="testimonialsSection">
            <div className="TestimonialTitle">
                <h2>Testimonials</h2>
            </div>
            <TestimonialsCards />
        </div>

    )
}

export default TestimonialSection;