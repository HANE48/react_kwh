import React from "react";
import '../App.css';

export default function List(props) {
    return (
        <div>
            <h1>게임 목록</h1>
            <table border='1'>
                <colgroup>
                    <col width={'20%'}></col>
                    <col width={'30%'}></col>
                    <col width={'20%'}></col>
                    <col width={'20%'}></col>
                    <col width={'10%'}></col>
                </colgroup>
                <thead>
                    <th>장르</th>
                    <th>제목</th>
                    <th>출시일</th>
                    <th>플랫폼</th>
                    <th>삭제</th>
                </thead>
                <tbody>
                    {
                        props.list.map((list, index) => (
                            <tr>
                                <td>{list.janr}</td>
                                <td>{list.title}</td>
                                <td>{list.release}</td>
                                <td style={{ textAlign: 'center' }}>{list.platform}</td>
                                <td><input type='button' value='삭제' onClick={() => { props.del(index) }} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}