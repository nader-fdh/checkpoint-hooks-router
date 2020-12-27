import React from "react";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";





const MovieCard = (props) => {

  return (
    <div className="container"> 
    <div className="card">
      <div className="imgBox">
      
        <img src={props.el.posterurl} />
      </div>
      <div className="content">
        <h2>{props.el.title}</h2>
        <h2>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={props.el.rate}
          />
        </h2>
      
        <Link to={`/movies/${props.el.id}`}>
        <button>Watch Trailer</button>
        </Link>
      </div>
    </div>
  </div>

)
};



export default MovieCard;

