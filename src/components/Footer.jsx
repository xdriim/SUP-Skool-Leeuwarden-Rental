import React, { Fragment } from 'react';
import styles from "../css/style.css";

export function GenerateFooter() {
    return(
        <footer>

            {/* Here goes the footer code vvvvvvvvvvv */}
            <div className={styles.flitem}>
                Terms and Conditions and Privacy Statement<br/>
                SUP Skool Leeuwarden 2023
            </div>
            <div className={styles.flitem}>
                T: <a href="tel:+310582038399">058 203 83 99</a> | T: <a href="tel:+310582038183">058 203 81 83</a> (rental)<br/>
                M: <a href="mailto:info@supskoolleuwarden.nl">info@supskoolleuwarden.nl</a>
            </div>
        </footer>
    )
}

export default GenerateFooter;