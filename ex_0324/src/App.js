import logo from './logo.svg';
import './App.css';

// 현재 구조가 기본으로 사용하는 구조
// 리액트는 자바스크립트를 자바처럼 사용함
function App() {
  let m_topics = [
    {id: 1, title: 'HTML', body: 'My html' },
    {id: 2, title: 'CSS', body: 'Your css'},
    {id: 3, title: 'JS', body:'We are JS'}
  ];

  return (
    // 화면에 보여줘야 할 정보를 return으로 넘겨줄 수 있음
    // return 안에 부모는 하나만 있어야 함
    <div className="App">
      {/* 아까 만든 Header함수를 가져다 사용함 
        * 원하는 이름으로 인자를 전달 할 수 있음 
        * Ex) title='React'
        */}
      <Header title='React' 
        onChangeMode={
          ()=>{alert('I am Header')}
        }>

      </Header>
      {/* 함수로 만들어 재사용이 용이함 */}
      <Nav topics={m_topics} onChangeMode={(id)=>{alert("id:" + id)}} />
      <Article title='welcome' body='hello, web'/>
      <Article title='I am title' body='I am body'/>
    </div>
  );
}

function Header( props ) {
  return (
    <header>
      {/* header 태그 자체가 인자로 넘어와서 그 안에 필요한 값을 꺼내서 사용해야 함 */}
      <h1>
        <a href='/' 
        onClick={
          ()=>{ alert('클릭됨')}
        }>{ props.title }</a>
      </h1>
      <h1>
        {/* react에서는 임시링크로 '/'를 사용함 
          * event.preventDefault()로 a태그의 기본기능을 막음(하이퍼링크 이동)
          * event.preventDefault()로 하이퍼링크로 이동하는걸 막고 인자로 받은 함수를 실행함
          */}
        <a href='/' 
          onClick={
            (event)=>{event.preventDefault(); props.onChangeMode();}
        }>
          {props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  // 변수를 만들어 참조하는것 또한 가능하다.
  // 배열은 [] 로 만듬
  // let lis = [ 
  //       <li><a href='/read/1'>HTML</a></li>,
  //       <li><a href='/read/2'>CSS</a></li>,
  //       <li><a href='/read/3'>JS</a></li>
  //  ]
  // JS에서 배열은 ArrayList 또는 LinkedList 형태임

  let lis = [];

  for(let i=0 ; i<props.topics.length ; i++){
    let t = props.topics[i];
    // lis.push( <li>{t.id} / {t.title} / {t.body}</li> )
    lis.push(
      <li>
        {/* event 인자의 target으로 가야 태그의 정보에 접근할 수 있음 
          * Ex) props.onChangeMode(event.target.id)
          */}
        <a id={t.id} href={'/read/' + t.id} 
        onClick={(event)=>{event.preventDefault(); props.onChangeMode(event.target.id)}}>
          {t.title} / {t.body}
        </a>
      </li>
    )
  }
  
  return (
    <nav>
      <ul>
        {lis}
      </ul>
    </nav>
  );
}

function Article(args){
  return (
    <article>
        <h2>{args.title}</h2>
        {args.body}
    </article>
  );
}

export default App;