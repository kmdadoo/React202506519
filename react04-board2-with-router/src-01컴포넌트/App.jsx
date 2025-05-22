import './App.css'

function List(props) {
  return(<>
    <header>
      <h2>게시판 - 목록</h2>
    </header>
    <nav>
      <a href="/">글쓰기</a>
    </nav>
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
            <td className="cen">1</td>
            <td><a href='/view/1'>오늘은 React 공부하는 날</a></td>
            <td className="cen">홍길동</td>
            <td className="cen">2025-05-20</td>
          </tr>
        </tbody>
      </table>
    </article>
  </>);
}

function View(props) {
  return(<>
    <header>
      <h2>게시판-읽기</h2>
    </header> 
    <nav>
      <a href="/list">목록</a>&nbsp;
      <a href="/edit">수정</a>&nbsp;
      <a href="/delete">삭제</a>
    </nav>
    <article>
      <table id="boardTable">
        <colgroup>
          <col width="30%" /><col width="*" />
        </colgroup>
        <tbody>
          <tr>
            <td>작성자</td>
            <td>성유겸</td>
          </tr>
          <tr>
            <td>제목</td>
            <td>오늘은 React 공부하는 날</td>
          </tr>
          <tr>
            <td>날짜</td>
            <td>2025-05-20</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>열심히 해봅시당<br/>열공 합시다.</td>
          </tr>
        </tbody>
      </table>
    </article>
  </>);
}

function Write(props) {
  return(<>
    <header>
      <h2>게시판-작성</h2>
    </header> 
    <nav>
      <a href="/list">목록</a>
    </nav>
    <article>
      <table id="boardTable">
        <tbody>
          <tr>
            <td>작성자</td>
            <td><input type="text" name="writer" /></td>
          </tr>
          <tr>
            <td>제목</td>
            <td><input type="text" name="title" /></td>
          </tr>
          <tr>
            <td>내용</td>
            <td><textarea name="contents" cols="22" rows="3"></textarea></td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="전송" />
    </article>
  </>);
}

function NotFound() {
  return(
    <div>
      <h2>Nor Found</h2>
      <p>
        페이지를 찾을수 없습니다. TT <br/>
        <a href='/'>Home</a>
      </p>
    </div>
  );
}

function App() {

  return (
    <div className='App'>
      <List></List>
      <View></View>
      <Write></Write>
    </div>
  )
}

export default App