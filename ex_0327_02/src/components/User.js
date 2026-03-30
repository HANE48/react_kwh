import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './UserList.js';
import Spinner from './Spinner.js';

export default function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // HTMl의  window.onload와 같이
    // 현재 컴포넌트가 호출되면 가장 먼저 실행되는 영역
    useEffect(() => {
        // 웹에 준비된 유저 정보를 가져옴
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            setUsers(response.data);
            
            setLoading(false);
        });
    })

    return (
        <div>
            <h1>User page</h1>{
                loading ? <Spinner /> : 
                <UserList users={users} />
            }
        </div>
    );
}