import React from 'react';
import {Link} from "react-router-dom";

const NoMatch = () => {
    return ( 
        <div className="nomatch-slide margin-top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="display-4 text-dark">404 route not found</h2>
                        <p className="text-secondary">may be you looking for something else</p>
                        <Link to="/" className="text-primary">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NoMatch;