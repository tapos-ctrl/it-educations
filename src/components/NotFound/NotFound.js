import React from 'react';
import {Link} from 'react-router-dom';
const NotFound = () => {
    return (
        <div style={{height: '60vh'}}>
            <h1 style={{marginTop:'30vh'}}>This is page not found</h1>
            <h1 className="mb-5">404</h1>
            <Link to="/home"  class="enrollBtn">Go home</Link>
        </div>
    );
};

export default NotFound;