import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
  let [mode, setMode] = useState('WELCOME') //usestate : mode 라는 변수에 변수의 값을 바꾸고 싶을 때 setMode를 호출하는 메서드 이름
  let [id, setId] = useState(null)// id의 값을 바꾸려면 setId 함수를 사용해 변경
  let [nextId, setNextId] = useState(4);

  // useState를  빈 베열로 생성하면 '[]'을 사용
  // []안에 배열에 들어갈 값을 지정
  let [m_topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'my html' },
    { id: 2, title: 'css', body: 'your css' },
    { id: 3, title: 'java script', body: 'our js' },]
  )

  let content = null;

  // let m_topics = [ //m_topics를 Nav한테 보내기
  //   { id: 1, title: 'html', body: 'my html' },
  //   { id: 2, title: 'css', body: 'your css' },
  //   { id: 3, title: 'java script', body: 'our js' }
  // ]

  if (mode === 'WELCOME') {
    // (JS는) content는 변수 타입이 컴포넌트가 될 수 있음
    content = <Article title='Welcome state' body='STATE WEB' />
  } else if (mode === 'READ') {
    let title, body = null
    for (let i = 0; i < m_topics.length; i++) {
      if (m_topics[i].id === id) {
        title = m_topics[i].title
        body = m_topics[i].body
      }
    }//for
    content = <Article title={title} body={body} />
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body)=>{
      let newTopic = {id:nextId, title:title, body:body};
      // '...m_topics'로 기존의 배열을 newTopics로 복사
      // 기존 배열에 복사해서 추가해주는것이 아닌 
      // 새로운 배열에 기존 배열의 값을 복사해서 새로운 배열을 set해줌
      let newTopics = [...m_topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      // m_topics.push(newTopic);
      // setTopics(m_topics);
      setMode('READ');
      setNextId(nextId+1);
    }}/>
  }else if(mode === 'DELETE'){

  }

  return (
    <div>
      {/* 나눠놓은 3개의 컴포넌트 가져오기 */}
      {/* Header한테 title 파라미터 보내기 */}
      <Header title='React' onChangeMode={() => { setMode('WELCOME') }} />

      <Nav topics={m_topics}
        onChangeMode={(id) => {
          setMode('READ')
          setId(id)
        }} />

      {/* Article한테 title 파라미터 보내기 */}
      <Article title='Welcome' body='hello, web' />

      {content}
      <a href='/' onClick={(e) => {
        e.preventDefault();
        setMode('CREATE');
      }}>Create</a>
      <p><input type='button' value='삭제' onClick={()=>{
        let newTopics = [];
        for(let i=0 ; i<m_topics.length ; i++){
          // m_topic의 id와 삭제하고 싶은 id가 다른경우만 newTopics배열에 추가
          if(m_topics[i].id !== id){
            newTopics.push(m_topics[i]);
          }
        }//for
        //삭제하고자 하는 ID를 제외한 나머지 내용을 갱신
        setTopics(newTopics);

      }}></input></p>
    </div>
  );
}//app()

function Create(props) {
  return (
    <article>
      <h2>create component</h2>
      {/* 
        * 리액트에서는 form으로 전달하는거보다 pass라는 방식을 많이 사용함
        * form 태그 안의 submit이벤트를 실행하면 onSubmit을 실행
        * form 태그도 모든 입력값을 서버로 보냄으로 preventDefault로 막아준다.
        */}
      
      <form onSubmit={(e)=>{
        e.preventDefault();
        // 아래의 '제목입력'의 name
        let title = e.target.title.value;
        // '내용 입력'의 name값
        let body = e.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='제목 입력'></input></p>
        <p><textarea name='body' placeholder='내용 입력'></textarea></p>
        <p><input type='submit' value='생성'></input></p>
      </form>
    </article>
  );
}



//★ 태그들은 꼭 '소문자'로 작성하기!!
//나눠놓은 3개의 컴포넌트
function Header(props) { //Header쪽에 props로 묶어서 받음
  return (
    <header>
      {/* Header title 파라미터 받기 */}
      <h1>
        <a href='/' onClick={
          //클릭 이벤트 연결처리할 때 (=> 화살표 함수 씀)
          (event) => {
            event.preventDefault()  //event.preventDefault() : a태그 기능 무력화 시킴, 새로고침을 막음
            props.onChangeMode()  //활성화
          }
        }>
          {props.title}
        </a>
      </h1>
    </header>

  )
}

function Nav(props) {

  let lis = [] //배열 담을 빈 바구니 만들기
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]
    // 리스트 값을 태그값으로도 줄 수 있음
    // 배열을 담을 때 push로 받는거임
    lis.push(<li>
      <a id={t.id} href={'/read/' + t.id}
        onClick={(event) => {
          event.preventDefault()
          props.onChangeMode(Number(event.target.id))
        }
        }>

        {t.title} / {t.body}
      </a>
    </li>)
  }

  return (
    <nav>
      <ul>
        {lis}
      </ul>
    </nav>
  )
}

function Article(props) {//title과 body를 props가 묶어서 받음
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

export default App;
