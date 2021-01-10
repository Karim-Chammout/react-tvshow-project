import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory} from "react-router-dom";

function CardDetail(props) {
  const {tvShows} = props;
  const [tvShow, setTvShow] = useState([]);
  const params = useParams();
  const history = useHistory();


  useEffect(() => {
    setTvShow(
      tvShows.filter(item => Number(item.id) === Number(params.tvShowID))[0]
    )
  }, [tvShows, params.tvShowID]);

  function goBackHandler() {
    history.goBack();
  }
  
  return (
    <div className="col-md-6 offset-md-3">
      <nav aria-label="breadcrumb" className="mb-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{tvShow.original_name}</li>
        </ol>
      </nav>
      <div className="card mb-3 bg-dark text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`} className="card-img-top m-auto" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{tvShow.original_name}</h5>
              <p className="card-text">{tvShow.overview}</p>
              <h5>Vote average: <span class="badge bg-warning">{tvShow.vote_average}</span></h5>
              {/* <h2><Link to="/" className="btn btn-danger">Go back to home page</Link></h2> */}
              <button onClick={goBackHandler} className="btn btn-danger">Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
