import React from "react";
import {Link, Route, Routes} from 'react-router-dom';
import "../Styles/ReservationsButton.css";

function ReservationsButton() {
    return(
        <Link to="/reservations"><button className="reserveTableButton">Reserve a Table</button></Link>
    )
}

export default ReservationsButton;