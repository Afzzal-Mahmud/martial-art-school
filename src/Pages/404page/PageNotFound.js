import React from "react";
import './PageNotFound.css';

function PageNotFound() {
    return (
       <div className='error-page-body'>
        <div className="error-page-main">
        <div className="error-page-content">
           <h2 className="header">
              404
           </h2>
           <h4>
              Opps! Page not found
           </h4>
           <p>
              Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
           </p>
           <div className="buttons">
              <a href="#">return home</a>
              <a href="#">return home</a>
           </div>
        </div>
     </div>
     </div>
    )
}
export default PageNotFound
