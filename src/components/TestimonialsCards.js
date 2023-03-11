import React from "react";
import "../Styles/TestimonialsCards.css";

const TestimonialsCards = () => {
    const Testimonial = [
        {
            profileImage: "icons_assets/profile1.jpeg",
            name: "Tom Beardless",
            review: "Little Lemon exceeded my expectations! The food was delicious and the atmosphere was cozy and inviting. I highly recommend it for anyone looking for a great Mediterranean dining experience.",
        },
        {
            profileImage: "icons_assets/profile3.jpeg",
            name: "James Davidsdaughter",
            review: "I had a fantastic dining experience at Little Lemon! The food was delicious and the staff was friendly and attentive. I highly recommend it for anyone looking for fresh and flavorful Mediterranean cuisine.",
        },
        {
            profileImage: "icons_assets/profile2.jpeg",
            name: "Cole Aluminium",
            review: "I highly recommend Little Lemon for anyone who loves fresh and flavorful Mediterranean cuisine. The food and service were excellent, and the atmosphere was cozy and inviting. I can't wait to come back and try more dishes!",
        },
        {
            profileImage: "icons_assets/profile4.jpeg",
            name: "Shayla Nicebum",
            review: "Little Lemon is the best Mediterranean restaurant around! The food is amazing, the staff is friendly, and the atmosphere is cozy. I highly recommend it for anyone looking for a great dining experience.",
        }
    ]

    const TestimonialItems = Testimonial.map(item => {
        const profileImage = item.profileImage;
        const name = item.name;
        const review = item.review;

        return (
            <div>
                <div className="testimonial-card-container">
                    <div className="testimonial-info">
                        <img src={profileImage} alt="Customer Profile Picture"/>
                        <div className="testimonialTitle">
                            <h4>{name}</h4>
                            <div className="ratingStarContainer">
                                <img src="icons_assets/star-icon.png"  className="ratingStar"></img>
                                <img src="icons_assets/star-icon.png"  className="ratingStar"></img>
                                <img src="icons_assets/star-icon.png"  className="ratingStar"></img>
                                <img src="icons_assets/star-icon.png"  className="ratingStar"></img>
                                <img src="icons_assets/star-icon.png"  className="ratingStar"></img>
                            </div>
                        </div>
                    </div>
                    <p>{review}</p>
                </div>
            </div>
        )
    })


  return (
    <div>
        <div className="testimonial-card">
            {TestimonialItems}
        </div>
    </div>
  )
}


export default TestimonialsCards;