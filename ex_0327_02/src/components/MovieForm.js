import React from 'react';
import '../App.css';
import { useState } from 'react';

const MovieForm = (props) => {
    console.log(props.titleError);
    console.log(props.yearError);

    return (
        <form onSubmit={props.add}>
            <input value={props.movieTitle} onChange={(e) => { props.setTitle(e.target.value) }} placeholder='영화 제목' /><br />
            <div style={{color:'red'}}>{props.titleError}</div>
            <input type='number' value={props.movieYear} onChange={(e) => { props.setYear(e.target.value) }} placeholder='개봉 연도' />
            <div style={{color:'red'}}>{props.yearError}</div>
            <button type='submit'>영화 추가</button>
        </form>
    );
}

export default MovieForm;