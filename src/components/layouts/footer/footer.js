import React from 'react';

import './footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="copyright">
                            <p>all right reserved by</p> <a href="#" className="author">tamal h</a>
                        </div>
                    </div>

                    <div className="offset-sm-4 col-sm-4 text-right">
                        <div className="follow-me">
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                            <a href="#"><i className="fab fa-github-square"></i></a>
                            <a href="#"><i className="fab fa-stack-overflow"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;