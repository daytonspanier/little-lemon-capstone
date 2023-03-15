import React from "react";
import "../Styles/ReservationsForm.css";

function ReservationsForm() {
    return(
            <form>
                <fieldset>
                <legend>Book your table</legend>
                    <div className="form-container">
                        <div className="field">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name"/>
                        </div>

                        <div className="field">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name"/>
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email"/>
                        </div>

                        <div className="field">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone"/>
                        </div>

                        <div className="field">
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" id="res-date"/>
                        </div>

                        <div className="field">
                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time ">
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" placeholder="1" min="1" max="10" id="guests"/>
                        </div>

                        <div className="field">
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                                <option>None</option>
                            </select>
                        </div>

                        <div className="field">
                            <input type="submit" value="Make Your reservation"/>
                        </div>
                    </div>

                </fieldset>
            </form>

    );
};

export default ReservationsForm;