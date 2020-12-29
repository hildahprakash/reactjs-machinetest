import React from 'react';
import './Header.css';


const Header = () => {
    return(
        <header>
            <div className="header">
                <div className="header-firstpart">
                    <div className="arrow"><img src="/assets/images/Back.png"/></div>
                        <h5 className="hed">Romantic Comedy</h5>
                    </div>
                <div>
                <div className="search"><img src="/assets/images/search.png"/></div>
                </div>
            </div>
        </header>
    );
}
export default Header;