import React from "react";
import { Link } from "react-router-dom";

function Http404() {
  return (
    <div className="text-center">
      <img
        src="https://media.istockphoto.com/vectors/error-page-vector-id697562932?k=6&m=697562932&s=612x612&w=0&h=piP4K3o2vv8-MNABdEqb1sbmVHP-Q3PrkGaVDo427c8="
        className="img-fluid"
        alt=""
      />
      <h1>Shit... Nothing in here</h1>
      <h2>
        <Link to="/" className="btn btn-danger">
          Go back to home page
        </Link>
      </h2>
    </div>
  );
}

export default Http404;
