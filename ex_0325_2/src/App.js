import logo from './logo.svg';
import './App.css';

function App() {

  // JSON( JavaScript Object Notation )
  //서로 다른 플랫폼에서 데이터를 교환하기 편리하도록 규격을 맞춘 표기 형식

  let p = { name: '일길동', age: '30', tel: '010-1234-5678' };
  let p_arr = [
    { name: '이길동', age: '25' },
    { name: '삼길동', age: '32' }
  ];

  let course = {
    name: '개발자 과정', 
    start: '2026-01-01',
    end:'2026-07-01',
    sub:['java', 'android', 'jsp'],
    student:[{name:'홍길순', age:22}, {name:'임길동', age:19}]
  }

  return (
    <div className="App">
      <div>
        {p.name} / {p.age} / {p.tel}<br/>
      </div>
      <div>
        {p_arr[0].name} / {p_arr[0].age} / 
        {p_arr[1].name} / {p_arr[1].age}
      </div>
      <div>
        {course.name}<br/>
        시작 날짜: {course.start} / 종료일: {course.end} <br/>
        과목: &nbsp;{course.sub[0]} / {course.sub[1]} / {course.sub[2]} / <br/>
        이름: &nbsp;{course.student[0].name} / 나이: {course.student[0].age} <br/>
        이름: &nbsp;{course.student[1].name} / 나이: {course.student[1].age}
      </div>
    </div>
  );
}//app()

export default App;
