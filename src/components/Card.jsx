import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const {id, original_name, poster_path, overview} = props.tvShow;
  
  return (
    <div className="col-md-3 mb-5">
      <div className="card bg-dark text-light">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{original_name}</h5>
          <p className="card-text">{overview.substring(0, 50)}...</p>
          <Link to={`tvShow/${id}`} className="btn btn-danger">Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;