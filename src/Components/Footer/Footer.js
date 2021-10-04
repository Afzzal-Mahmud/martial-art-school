import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-center text-lg-start text-white">
   {/* Grid container  */}
  <Container className="p-4 pb-0">
    <form action="">
      {/* Grid row */}
      <div className="row justify-content-center">
        {/* Grid column */}
        <div className="col-auto mt-4 mb-md-0">
          <p className="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-5 col-12 mb-4 mb-md-0">
           {/* Email input  */}
          <div className="form-outline form-white mb-4">
              <input placeholder="enter your email" type="email" className="form-control mt-4" />
            </div>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-auto mt-4 mb-md-0">
           {/* Submit button  */}
          <button style={{background:'#2f9be2'}} className="btn mb-2">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  </Container>
   {/* Grid container  */}

   {/* Copyright  */}
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <NavLink to='#'>@2021 copyright AfzalMahmud </NavLink>
  </div>
   {/* Copyright  */}
</footer>
    )
}
export default Footer;