import React from 'react';

const HeaderComponent = props => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <a href="#!" className="brand-logo center">{props.title}</a>
            </div>
        </nav>
    )
}

export default HeaderComponent;
