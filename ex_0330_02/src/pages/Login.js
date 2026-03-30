import React from "react";
import '../App.css';
export default function Login(){
    return(
        <div className='page'>
            <div className='titleWrap'>
                이메일과 비밀번호를<br/> 입력해주세요
            </div>
            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className='inputWrap'>
                    <input type="email" className='input' placeholder="aaa@aaa.com"/>
                </div>
                <div className="errorMessageWrap">올바른 이메일을 입력하세요</div>
                <div className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input type="password" className="input" placeholder="비밀번호 느으라" />
                </div>
                <div className="errorMessageWrap">비밀번호 똑바로 입력 안하나</div>
            </div>
            <div>
                <button className="bottomButton">확인</button>
            </div>
        </div>
    );
}