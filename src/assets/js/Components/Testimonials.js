
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
                    <a href="https://www.linkedin.com/in/weng-fung/#recommendations" target="_blank"><img className="clients-1" src="./src/assets/img/testimonials.png"></img></a>
                </div>

                <hr style={{border: "1px solid black", marginTop:"40px"}}/>
                <Students/>
            </>
        )
    }
}