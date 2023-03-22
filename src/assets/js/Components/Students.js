
import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation.js";

export default class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 1
        };
      }

    navigateLeft() {
        if(this.state.count===1) {
        } else {
            this.setState({count:this.state.count-1});
        }
    } // navigateLeft

    navigateRight() {
        if(this.state.count===3) {
        } else {
            this.setState({count:this.state.count+1});
        }
    } // navigateRight


/*

    A. Get most recent student evaluations

        1. Request for student evaluations at:
        Tutor Administrative Request Form

        2. Download attachment from email. For Example:
        https://mail.google.com/mail/u/2/#search/Topics+Covered+-%22Google+Forms%22/FMfcgzGslbFFprrWLZWKGjxksrfJCSvW
        
        3. Save CSV to computer
    
    ---
    
    B. Open CSV to remove unnecessary columns and fix format up for better viewing:
    
        1. Remove columns A, C, D, E, and N, O (Timestamp, Student Email, Your class code, Was Session Back to Back) (Are you spending minimal recommended.., Regular attendance at Office Hours..)
        ^ To double check, that's 6 columns being removed.

        2. Select Columns G to I and search for any 1 / 2 / 3, and figure out causes for continuous improvement. Make notes somewhere else for yourself.

        3. CMD+A to select all cells that have text. Then create a table by going Insert -> Table. Make sure to have first row as headers.
        4. Sort date column by Descending.
        5. Make all the cells' background color white and make sure the text color remains black at the header row. Do not remove all formatting using the Home Ribbon tab because you'd remove the date formatting.
        
        6. All cells gets Horizontal left align (Click top left diagonal icon)
        
        7. Row 1 gets Wrap Text
        8. Row 1 gets Vertical align top
        9. Row 1 gets Height 124. It may look like a lot of blank spaces underneath but this will change after you shrink the column widths.

        10. Column A gets Width 6.5 (Student Full Name gets cut off for privacy)
        11. Column B gets Width 16.5 (Your Course Type gets shown what is FSF and emphasizes Full Stack teaching)
        Replace all "FSF - Full Stack Flex Web Development(Javascript)" to "FSF - Full Stack Flex"
        12. Column C gets Width 13.17 (Who was your tutor gets long enough to emphasize my name)
        13. Column D gets Width 7 (Who was your tutor gets long enough to emphasize my name)
        14. Column E gets Width 54.5 -AND- Wrap Text (Topic(s) Covered)
        15. Columns G to I gets Width 17 AND Horizontal centering (Ratings equal column widths)
        16. Column J getes Width 84.5 -AND- Wrap Text (Please share some comments...)
        
        17. Save as a webpage "Student-Ratings":
        
        File -> Save As -> Web Page (.htm)
            With the option: "Workbook" 
            (The option Workbook will let you change the css later if columns are overlapping)

        18. Edit Student-Ratings.htm, and set number of tabs to 0 with:
            ```
            var c_lTabs = 0;
            ```

            This would make the tabs disappear so that you can continue protecting students' privacy. Otherwise the tab can be clicked and the students' full names will appear.
        
        19. Add to top of Student-Ratings.fld/stylesheet.css to lower the font sizes globally so there's no less overlapping of columns:
            ```
            td {
                font-size: 0.9rem !important;
                border: 1px solid rgba(0, 0, 0, .5) !important;
            }
            ```

        20. Move Student-Ratings.fld and Student-Ratings.htm to inside src/embeds/student-ratings/
        
    */

    
    render() {
        return (
            <>
                <div className="flushed-left">
                    <i className={"fa fa-arrow-left fs-2 " + (this.state.count===1?"text-gray":"text-white clickable")} onClick={this.navigateLeft.bind(this)}></i>
                </div>
                <div className="flushed-right">
                    <i className={"fa fa-arrow-right fs-2 " +(this.state.count===3?"text-gray":"text-white clickable")} onClick={this.navigateRight.bind(this)}></i>
                </div>
                <div className="spacer-20px">&nbsp;</div>

                <div className={"rotation rotation-1 " + (this.state.count!==1?"d-none":"")}>
                    <p className="tag-description-line">Coding students giving me excellant testimonials.</p>

                    <img src="./src/assets/img/students/testimonials-tutor/a.png"></img>
                    <iframe src="./src/embeds/student-ratings/Student-Ratings.htm" style={{width:"100%", height:"800px", backgroundColor:"white"}}></iframe>
                </div>

                <div className={"rotation rotation-2 " + (this.state.count!==2?"d-none":"")}>
                    <p className="tag-description-line">My supervisors giving me a shout out on the Slack platform which we use for students to reach us.</p>
                    <img src="./src/assets/img/students/testimonials-la/a.png"></img>
                    <img src="./src/assets/img/students/testimonials-la/d.png"></img>
                    <img src="./src/assets/img/students/testimonials-la/c.png"></img>
                    <img src="./src/assets/img/students/testimonials-la/b.png"></img>
                </div>

                <div className={"rotation rotation-3 " + (this.state.count!==3?"d-none":"")}>
                    <p className="tag-description-line">Excellant ratings. Rating Percentage is how many students actually gave a score which is optional after tutoring. But all the students who rated gave me the max 5 stars, therefore my Average Rating is 5</p>
                    <div className="subgroup">
                        <img src="./src/assets/img/students/scores-la/a.png"></img>
                        <img src="./src/assets/img/students/scores-la/b.png"></img>
                        <img src="./src/assets/img/students/scores-la/c.png"></img>
                        <img src="./src/assets/img/students/scores-la/d.png"></img>
                    </div>

                    <div className="spacer-20px">&nbsp;</div>
                    <p className="tag-description-line">I consistently outperform the team at the Team vs You comparison metric.</p>
                    <div className="subgroup">
                        <img src="./src/assets/img/students/scores-la/a2.png"></img>
                        <img src="./src/assets/img/students/scores-la/b2.png"></img>
                        <img src="./src/assets/img/students/scores-la/c2~.png"></img>
                        <img src="./src/assets/img/students/scores-la/d2.png"></img>
                    </div>
                </div>

            </>
        )
    }
}