import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="px-4 pt-0 pb-4 text-center">
            <Link to="/about">About</Link>
            <p>Copyright &copy; 2021</p>
        </div>
    )
}

export default Footer
