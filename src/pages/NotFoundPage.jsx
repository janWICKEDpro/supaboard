import React from 'react';
import '../NotFound.css';
import { Link } from 'react-router';

function NotFoundPage(){
    return <div className='not_found_page'>
        404 Not Found | 
        <p className='link-wrapper'><Link className='link' to="/"> Home</Link></p>
    </div>;
}

export default NotFoundPage;