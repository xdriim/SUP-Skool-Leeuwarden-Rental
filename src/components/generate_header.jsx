import React, { Fragment } from 'react';
import logo from '../images/SUP.png';

export function GenerateHeader() {
    return(
        <Fragment>

            {/* Here goes the header code vvvvvvvvvvv */}
            <div className="flitem">
                <img src={ logo } alt="SUP logo" width="140px" height="auto"/>
            </div>
            <div className="flitem">
                {/* <h1>&lt;Search bar here&gt;</h1> */}
                <form action="">
                    <input type="search" placeholder='Search...' name='search' id='search' />
                </form>
                
            </div>
            <div className="flitem">
                <button className="btn"><i className="fa fa-home"></i> My profile</button>
            </div>
            <div className="flitem">
                <button className="btn"><i className="fa fa-shopping-cart"></i> Cart</button>
            </div>
        </Fragment>
    )
}

export default GenerateHeader;