import './App.css'

//매개변수 props를 통해 전달된값을 받아 사용할 수 있다. 
function Header(props) {
  console.log('props', props.title);
  return(
    <header>
      <h2>{props.title}</h2>
    </header>
  );
}

function Nav() {
  return(
    <nav>
      <a href="/">글쓰기</a>
    </nav>
  );
}

function Article(props) {
  const lists = [];
  //props로 전달된 객체형 배열의 크기만큼 반복
  for (let i = 0; i < props.boardData.length; i++) {
    //각 루프에 해당하는 객체를 꺼낸후 lists에 추가한다.
    let row = props.boardData[i];
    lists.push(
      <tr key={row.no}>
        <td className="cen">{row.no}</td>
        <td><a href={'/read/' + row.no}>{row.title}</a></td>
        <td className="cen">{row.writer}</td>
        <td className="cen">{row.date}</td>
      </tr>
    );
  }
  return(
    <article>
      <table id="boardTable">
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {/* 배열에 추가한 데이터를 출력 */}
          {lists}
        </tbody>
      </table>
    </article>
  );
}

function App() {
   //게시판의 데이터로 사용할 객체형 배열 
  const boardData = [
    {no:1, title:'오늘은 React 공부하는 날', writer:'홍길동', date:'2025-03-31', contents:'React를 뽀개봅시다.'},
    {no:2, title:'어제는 Javascript 공부했슴', writer:'임꺽정', date:'2025-05-21', contents:'Javascript는 할께 너무 많아요'},
    {no:3, title:'내일은 Project 해야함.', writer:'손오공', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?'},
    {no:4, title:'추가 내일은 Project 해야함.', writer:'손오공', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?'},
  ];

  return (
    <div className='App'>
      {/* 문자열은 "을 통해 props를 전달할 수 있다. */}
      <Header title="게시판-목록(props)"></Header>
      <Nav></Nav>
      <Article boardData={boardData}></Article>
    </div>
  )
}

export default App