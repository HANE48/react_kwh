import React from "react";

export default function Inputfield(props){
    return (
        <div>
            <input placeholder={props.placeholder} value={props.value} 
            onChange={props.onChange} type={props.type}/><br/>
            <div style={{color:'red'}}>{props.errorMessage}</div>
        </div>
    );
}