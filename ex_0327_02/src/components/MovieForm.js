import React from 'react';
import '../App.css';
import { useState } from 'react';
import InputField from './InputField.js'

const MovieForm = (props) => {
    console.log(props.titleError);
    console.log(props.yearError);

    return (
        <form onSubmit={props.add}>
            <InputField value={props.movieTitle}
                onChange={(e) => { props.setTitle(e.target.value) }}
                errorMessage={props.titleError}
                placeholder='영화 제목' 
                type='text'/>
            <InputField value={props.movieYear}
                onChange={(e) => { props.setYear(e.target.value) }}
                errorMessage={props.yearError}
                placeholder='개봉 연도'
                type='number'/>
            <button type='submit'>영화 추가</button>
        </form>
    );
}

export default MovieForm;