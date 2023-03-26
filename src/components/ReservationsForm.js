import React, {useState} from "react";
import "../Styles/ReservationsForm.css";



function ReservationForm() {

        const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            occasion: "",
            guests: "",
        })

        const [formError, setFormError] = useState({})

        const validateForm = () => {
            let err = {}
            if (formData.firstName === "") {
                err.firstName = "* Full first name required!"
            }
            if (formData.lastName === "") {
                err.lastName = "* Full last name required!"
            }
            if (formData.email === "") {
                err.email = "* Email required!"
            }else{
                let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if(!regex.test(formData.email)) {
                    err.email = "Email not valid!"
                }
            }

            if (formData.phone === "") {
                err.phone = "* Phone number required!"
            }else{
                let phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
                if(!phoneRegex.test(formData.telephone)) {
                    err.telephone = "Telephone number not valid!"
                }
            }


            if (formData.guests === "") {
                err.guests = "* Please specify number of guests!"
            }
            if (formData.date === "") {
                err.date = "* Please specify date and time!"
            }

            setFormError({...err})
            return Object.keys(err).length < 1;
        }

        const handleChange = (e) => {
            const {name, value} =e.target;
            setFormData((prev) => {
                return {...prev, [name]: value}
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            console.table(formData);
            console.log(formData);

            let isValid = validateForm()
            if(isValid) {
                alert("Submitted")
            }

        }




        return (
        <form onSubmit={handleSubmit}>
            <fieldset>
            <div className="form-title">
                <h2>Book your table</h2>
            </div>
            <div className="form-container">
                <div className="field">
                <label htmlFor="first-name">First Name</label>
                <input name="firstName" type="text" id="first-name" onChange={handleChange} />
                <span className="non-valid">{formError.firstName}</span>
                </div>

                <div className="field date">
                <label htmlFor="res-date">Choose date</label>
                <input name="date" type="date" id="res-date" onChange={handleChange}  />
                <span className="non-valid">{formError.date}</span>
                </div>

                <div className="field">
                <label htmlFor="last-name">Last Name</label>
                <input name="lastName" type="text" id="last-name" onChange={handleChange}  />
                <span className="non-valid">{formError.lastName}</span>
                </div>

                <div className="field">
                <label htmlFor="res-time">Choose time</label>
                <select name="time" id="res-time" onChange={handleChange} >
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                </div>

                <div className="field">
                <label htmlFor="email">Email</label>
                <input name="email" type="email" id="email" onChange={handleChange} />
                <span className="non-valid">{formError.email}</span>
                </div>

                <div className="field">
                <label htmlFor="occasion">Occasion</label>
                <select name="occasion" id="occasion" onChange={handleChange} >
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                </select>
                </div>

                <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input name="phone" type="tel" id="phone" onChange={handleChange}  />
                <span className="non-valid">{formError.phone}</span>
                </div>

                <div className="field guests">
                <label htmlFor="guests">Number of guests</label>
                <input name="guests" type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChange} />
                <span className="non-valid">{formError.guests}</span>
                </div>

                <div></div>

                <div className="submit-button">
                <input type="submit" value="Submit" />
                </div>
            </div>
            </fieldset>
        </form>
        );
}

export default ReservationForm;