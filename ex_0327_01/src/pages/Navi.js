import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navi(){

    const navigate = useNavigate();

    const checkNavi = ()=>{
        alert('네비게이션 테스트');
        navigate('/');
    }

    return(
        <div>
            <button onClick={checkNavi}>화긴</button>
        </div>
    );
}