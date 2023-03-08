import React from "react";

const SpecialsCards = () => {
    const specialMenu = [
        {
            image: "icons_assets/greek salad.jpg",
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
        },
        {
            image: "icons_assets/bruchetta.svg",
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
        },
        {
            image: "icons_assets/lemon dessert.jpg",
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined. A perfect end to your meal.",
        }
    ]

    const specialMenuItems = specialMenu.map(menu => {
        const image = menu.image;
        const title = menu.title;
        const price = menu.price;
        const description = menu.description;

        return (
            <div>
                <div className="special-card-container">
                    <div className="image-card-container">
                        <img src={image} alt="Menu special" />
                    </div>
                    <div className="special-card-text">
                        <div className="special-card-title">
                            <h4>{title}</h4>
                            <h4 className="price-tag">{price}</h4>
                        </div>
                        <p>{description}</p>
                    </div>
                    <a href="#">Order online</a>
                </div>
            </div>
        )
    })


  return (
    <div>
        <div className="special-card">
            {specialMenuItems}
        </div>
    </div>
  )
}

export default SpecialsCards;

