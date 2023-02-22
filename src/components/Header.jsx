import React from 'react';
import logo from '../images/SUP.png';
import styles from "../css/style.css";

export function GenerateHeader() {
    return(
        <header>

            {/* Here goes the header code vvvvvvvvvvv */}
            <div className={styles.flitem}>
                <img src={ logo } alt="SUP logo" width="140px" height="auto"/>
            </div>
            <div className={styles.flitem}>
                {/* <h1>&lt;Search bar here&gt;</h1> */}
                <form action="">
                    <input type="search" placeholder='Search...' name='search' id='search' />
                </form>
                
            </div>
            <div className={styles.flitem}>
                <button className={styles.btn}><i className="fa fa-home"></i> My profile</button>
            </div>
            <div className={styles.flitem}>
                <button className={styles.btn}><i className="fa fa-shopping-cart"></i> Cart</button>
            </div>
        </header>
    )
}

export default GenerateHeader;