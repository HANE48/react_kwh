import React from 'react';

// function MyFrom() {
//     return (<table border='1'>
    //     <thead>
    //       <tr>
    //         <th>순번</th>
    //         <th>할 일</th>
    //         <th>마감일</th>
    //         <th>작업</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {
    //         props.list.map((list, index)=>(
    //           <tr>
    //             <th>{index+1}</th>
    //             <td>{list.task}</td>
    //             <td>{list.date}</td>
    //             <td><input type='button' value='삭제' onClick={()=>{props.del(index)}}/></td>
    //           </tr>
    //         ))
    //       }
    //     </tbody>
    //   </table>);
// }//MyForm

// export default MyFrom;

export default function MyForm({list, del}){
    return(
        <table border='1'>
        <thead>
          <tr>
            <th>순번</th>
            <th>할 일</th>
            <th>마감일</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((list, index)=>(
              <tr>
                <th>{index+1}</th>
                <td>{list.task}</td>
                <td>{list.date}</td>
                <td><input type='button' value='삭제' onClick={()=>{del(index)}}/></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
}

