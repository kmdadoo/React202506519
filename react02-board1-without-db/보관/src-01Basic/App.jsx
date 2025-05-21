import './App.css'

function Header(props) {
  return(
    <header>
      <h2>게시판 - 목록</h2>
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

function Article() {
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
          <tr>
             {/* class'는 자바스크립트 예약어이기 때문에, React에서는 혼란을 
            피하기 위해 'className'을 사용한다.*/} 
            <td className="cen">1</td>
            <td>오늘은 React 공부하는 날</td>
            <td className="cen">홍길동</td>
            <td className="cen">2025-05-20</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

function App() {

  return (
    <div className='App'>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  )
}

export default App