import React, { Component, useState } from "react";


/**
 * LangIcon
 * This is a reusable React component that displays a programming language's icon.
 *
 * @module LangIcon
 * @param {Props} props
 * @returns {JSX.Element}
 * 
 */
/**
 * Props for the component.
 * 
 * @typedef {Object} Props 
 * @property {string} techName - The name of the tech that will appear in the attributes data-tech (static) and data-is-colored (dynamic based on user hovering mouse over). If data-is-colored matches value to data-tech which will on mouseenter, then the active css will render from the data-is-colored attribute
 * @property {string} text - The name of the programing language that shows up in text next to the icon.
 * @property {string} iconClassName - The className that shows the icon
 * @property {string} globalTechName - The global state of what is hovering over. Must be from the parent component as this.state.techName
 * @property {string} techColorOn - Event handler for turning on the class for active styling. It affects the this.state.techName to equal the static data-tech. Event handler must come from parent component.
 * @property {string} techColorOff - Event handler for turning off the class for active styling. It clears this.state.techName of the static data-tech value. Event handler must come from parent component.
 * @property {string} toggleTechName - Event handler for turning on/off the class for active styling using the static data-tech value. Event handler must come from parent component.
*/
export default class LangIcon extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const { techName, text, iconClassName, globalTechName, techColorOn, techColorOff, toggleTechName } = this.props;
        // console.log(this.props)

        let styles = {
            display: "inline-block"
        }
        if(typeof iconClassName!=="string") {
            let {importedIcon} = iconClassName;
            styles.background = `url("${importedIcon}")`;
            styles.backgroundSize = 'cover';
            styles.backgroundRepeat = "no-repeat";
            styles.paddingLeft = "22px";
            styles.maxHeight = "27px";
            styles.backgroundPosition = "2px 5px";
            styles.letterSpacing = "-0.7px";
            styles.marginBottom = 0;
            // styles.marginBottom = -"2.5px";
        }

        return (
            <div className={typeof iconClassName==="string" && iconClassName} 
                data-tech={techName} 
                data-is-colored={globalTechName === techName && techName} 
                onClick={toggleTechName} 
                onMouseEnter={techColorOn} 
                onMouseOut={techColorOff} 
                style={styles}> 
            &nbsp;{text}
            </div>
        )
    }
} // LangIcon
