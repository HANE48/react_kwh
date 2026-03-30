import React from 'react';
import { useState } from 'react';
import Movie from '../components/Movie';
import MovieForm from '../components/MovieForm';

// 무비 리스트를 관리하는 JS
export default function Movies() {
    const [movies, setMovie] = useState([]);
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetError = () => {
        setTitleError('');
        setYearError('');
    }

    const validate = () => {
        resetError();
        let validated = true;

        if (!movieTitle) {
            setTitleError('영화 제목을 입력하세요');
            validated = false;
        }

        if (!movieYear) {
            setYearError('개봉연도를 입력하세요');
            validated = false;
        }
        console.log(validated);
        return validated;
    }

    const add = (e) => {
        e.preventDefault();
        if (validate()) {
            setMovie([...movies, { id: Date.now(), title: movieTitle, year: movieYear }]);
        }
        setMovieTitle('');
        setMovieYear('');
    }

    const removeMovie = (id) => {
        if (movies.length !== 0) {
            setMovie(movies.filter(movie => movie.id !== id));
        }
    }

    // map을 통해 리스트를 반복
    const renderMovies = movies.length > 0 ? movies.map(movie => {
        return (
            <Movie movie={movie} removeMovie={removeMovie} />
        );
    }) : '추가된 영화가 없습니다.';

    return (
        <div>
            <h1>Movie List</h1>
            <MovieForm add={add} titleError={titleError} yearError={yearError}
                setTitle={setMovieTitle} setYear={setMovieYear} movieTitle={movieTitle}
                movieYear={movieYear} />
            <br />
            {renderMovies}
        </div>
    );
}