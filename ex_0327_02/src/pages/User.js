import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';

export default function User(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); 

    // HTMl의  window.onload와 같이
    // 현재 컴포넌트가 호출되면 가장 먼저 실행되는 영역
    useEffect(() => {
        // 웹에 준비된 유저 정보를 가져옴
        axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(response => {
            setUser(response.data);
            setLoading(false);
        });
    })

    const userDetail = loading ? <Spinner /> : (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    );

    return (
        <div>
            <h1>User page</h1>
                {userDetail}
            
        </div>
    );
}