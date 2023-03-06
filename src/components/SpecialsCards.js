import React from "react";

let specials = [
  {
    dishImage: "icons_assets/bruchetta.svg",
    dishName: "Bruchetta",
    dishPrice: "$19.99",
    dishDescription:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    dishImage: "icons_assets/lemon dessert.jpg",
    dishName: "Lemon Cake",
    dishPrice: "$17.99",
    dishDescription:
      "This comes straight from grandma’s recipe book, every lst last ingredient has been sourced and is authentic as can be imagined.",
  },
  {
    dishImage: "icons_assets/greek salad.jpg",
    dishName: "Greek Salad",
    dishPrice: "$13.99",
    dishDescription:
      "The famous greek salad of lettuce, peppers, olives, and our Chicago style feta cheese with crunchy garlic and rosemary croutons. ",
  },
];

function SpecialsCards() {
  return <div className="special-card-container"></div>;
}

export default SpecialsCards;
