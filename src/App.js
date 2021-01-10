import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Card from "./components/Card";
import CardDetail from "./components/CardDetail";
import Http404 from "./components/error/HTTP404";
import "./style.css";

const API_TVSHOW_KEY = `9da0ad57724ee81d80fabbd879d91268`;

function App() {
  const [query, setQuery] = useState("");
  const [tvShows, setTvShows] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    const URL_TV_SHOW = `https://api.themoviedb.org/3/search/tv?api_key=${API_TVSHOW_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
    fetch(URL_TV_SHOW).then(getResults => getResults.json()).then(data => setTvShows(data.results))
  }
  
  return (
    <Router>
      <div className="container mt-5">
        <div className="row">
          <Switch>
            <Route exact path="/">
              <nav className="navbar bg-dark text-light fixed-top m-auto">
                <div className="col-md-8 offset-md-1">
                  <h1>Search for a TV Show</h1>
                </div>
                <div className="col-md-3">
                  <Link to="/" className="btn btn-success">Home</Link>
                </div>
              </nav>
              <div className="col-md-12 my-5">
                <form>
                  <div className="row">
                    <div className="col-md-6 offset-md-2">
                      <input 
                      type="text"
                      className="form-control"
                      placeholder="Type here to search"
                      name="query"
                      onChange={e => setQuery(e.target.value)}
                      />
                    </div>
                    <div className="col-md-4">
                      <button onClick={searchHandler} type="sumit" className="btn btn-success">Search</button>
                    </div>
                  </div>
                </form>
              </div>
              {
                tvShows.filter(item => item.poster_path).map(item => <Card key={item.id} tvShow={item} />)
              }
            </Route>
            <Route path="/tvShow/:tvShowID">
              <CardDetail tvShows={tvShows} />
            </Route>
            <Route path="/404">
              <Http404 />
            </Route>
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      </div>
      <footer className="contianer text-center text-light">
        <div className="fixed-bottom bg-dark">
          <h2 className="">Made by Karim Chammout</h2>
          <span className="">Kodluyoruz</span>
        </div>
      </footer>
    </Router>
  );
}

export default App;
