import React from "react";  
import './App.css';


const Movie = ({movie}) => {

    return (
        <div className="movieCard">
            <img src={movie.Poster} alt = {movie.Title} />
            <div>
                <span>{movie.Title} </span>
            </div>
            <div>
                <span>{movie.Year}</span>
            </div>
            <div>
                <span>{movie.Type}</span>
            </div>
        </div>
    );
}

export default Movie;