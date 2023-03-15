import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationsForm from "../components/ReservationsForm";
import ReservationsBanner from "../components/ReservationsBanner";


function Reservations() {
    return(
        <>
            <Header />
            <ReservationsBanner />
            <ReservationsForm />
            <Footer />
        </>
    )
}

export default Reservations;