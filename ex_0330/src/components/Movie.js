import React from "react";

export default function Movie({ title, poster_path, vote_average }) {
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

    return (
        <div className='movie-container'>

            <img src={IMG_BASE_URL + poster_path}></img>

            <div className='movie-info'>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
        </div>
    );
}