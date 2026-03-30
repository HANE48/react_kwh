import React from 'react';
import Dummy from '../movieDummy.js';
import { useParams } from 'react-router-dom';

export default function Movie(){
    const IMG_BASE_PATH = 'https://image.tmdb.org/t/p/w500';
    const id = useParams();
    let img_url;
    let name;
    
    for(let i=0 ; i<Dummy.results.length ; i++){
        if(Dummy.results[i].id === Number(id.id)){
            img_url = IMG_BASE_PATH + Dummy.results[i].poster_path;
            name = Dummy.results[i].title;
            break;
        }
    }

    return(
        <div>
            <h1>{name}</h1>
            <img src={img_url}/>
        </div>
    );
}