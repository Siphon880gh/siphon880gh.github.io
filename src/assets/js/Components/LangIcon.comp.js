
import React, { Component, useState } from "react";

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
            {text}
            </div>
        )
    }
} // LangIcon
