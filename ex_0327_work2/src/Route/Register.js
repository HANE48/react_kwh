import React from "react";
import '../App.css';

export default function Register(props) {
    return (
        <div className="register">
            <h1>게임 등록</h1>
            <div>
            장르 &nbsp;&nbsp;&nbsp;<Select setJanr={props.setJanr} /><br />
            제목 &nbsp;&nbsp;&nbsp;<input value={props.title} placeholder='제목입력' onChange={(e) => { props.setTitle(e.target.value) }} /><br />
            출시일 <input type='date' value={props.release} placeholder='출시일입력' onChange={(e) => { props.setRelease(e.target.value) }} /><br />
            플랫폼 <input value={props.platform} placeholder='플랫폼입력' onChange={(e) => { props.setPlatform(e.target.value) }} /> &nbsp;
            <br/>
            <input type='button' value='추 가' onClick={props.add} className="button" />
            </div>
        </div>
    );
}

function Select(props) {
  return (
    <select onChange={(e) => { props.setJanr(e.target.value) }}>
      <option disabled selected>장르선택</option>
      <option value='액션'>액션</option>
      <option value='RPG'>RPG</option>
      <option value='슈팅'>슈팅</option>
      <option value='음악'>음악</option>
      <option value='공포'>공포</option>
      <option value='스포츠'>스포츠</option>
    </select>
    );
}
