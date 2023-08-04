
import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation.js";
import "./Testimonials.css"

// Merge in Student Ratings
import Students from "./Students"

export default class Testimonials extends React.Component {
    render() {
        return (
            <>
                <h2>Clients:</h2>
                <div class="client-testimonials">
                    <img src="./src/assets/img/testimonials.png"></img>
                </div>

                <h2>Students:</h2>
                <Students/>
            </>
        )
    }
}