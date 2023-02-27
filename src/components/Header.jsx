import React from 'react';
import logo from '../images/SUP.png';
import styles from "../css/style.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./../pages/Home";
import { ProductInfo } from "../pages/ProductInfo";

export function GenerateHeader() {
    return(
        <BrowserRouter>
            <header>
                <div className={styles.flitem}>
                    <Link to='/'>
                        <img src={ logo } alt="SUP logo" width="140px" height="auto"/>
                    </Link>
                </div>
                <div className={styles.flitem}>
                    {/* <h1>&lt;Search bar here&gt;</h1> */}
                    <form action="">
                        <input type="search" placeholder='Search...' name='search' id='search' />
                    </form>
                    
                </div>
                <div className={styles.flitem}>
                    <Link to='/myProfile'>
                        <button className={styles.btn}><i className="fa fa-home"></i> My profile</button>
                    </Link>
                </div>
                <div className={styles.flitem}>
                    <Link to='/product'>
                        <button className={styles.btn}><i className="fa fa-shopping-cart"></i> Cart</button>
                    </Link>
                </div>
            </header>

            <Routes>
                <Route path='/' element={Home} />
                <Route path='/product' element={ProductInfo} />
            </Routes>
            
        </BrowserRouter>
    )
}

export default GenerateHeader;