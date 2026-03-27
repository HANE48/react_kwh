import React from "react";
import { Link, useParams } from "react-router-dom";

export default function About(){
    // app()에서 :name으로 넘긴 파라미터를 가져옴
    // 파라미터의 이름은 동일해야함
    const {name} = useParams();
    const {age} = useParams();

    return(
        <div>
            <h2>파라미터 처리</h2>
            <p>{name}/{age}님 반가워죠</p>
            <p className='nav'> 
                <Link to='/'>홈으로</Link>
            </p>
        </div>
    );

}