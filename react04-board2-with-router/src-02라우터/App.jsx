import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

function List(props) {
  return(<>
    <header>
      <h2>게시판 - 목록</h2>
    </header>
    <nav>
      {/* <a href="/">글쓰기</a> */}
      <Link to="/write">글쓰기</Link>
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
            <td><Link to="/view">오늘은 React 공부하는 날</Link></td>
            <td className="cen">홍길동</td>
            <td className="cen">2025-05-20</td>
          </tr>
          <tr>
            <td className="cen">2</td>
            <td><Link to="/view">오늘은 Javascript 공부하는 날</Link></td>
            <td className="cen">임꺽정</td>
            <td className="cen">2025-05-22</td>
          </tr>
          <tr>
            <td className="cen">3</td>
            <td><Link to="/view">오늘은 JSP 공부하는 날</Link></td>
            <td className="cen">전우치</td>
            <td className="cen">2025-05-24</td>
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
    {/* <Link>는 <a> 태그처럼 링크를 연결해주지만 URL 개념 하고는 다른 path 개념이다.
      리액트 라우터에서 페이지 이동할 때는 Link 컴포넌트를 사용하면 내가 이동하고자 
      하는 경로(URL)로 이동할 수 있다.
      Link 컴포넌트를 사용하면 브라우저의 주소만 바꿀뿐, 페이지를 새로 불러오지는 
      않는다.(NavLink 컴포넌트는 Link의 special version )
    */}
    <nav>
      {/* <a href="/list">목록</a>&nbsp;
      <a href="/edit">수정</a>&nbsp;
      <a href="/delete">삭제</a> */}
      <Link to="/list">목록</Link>&nbsp;
      <Link to="/edit">수정</Link>&nbsp;
      <Link to="/delete">삭제</Link>
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
      {/* <a href="/list">목록</a> */}
      <Link to="/list">목록</Link>
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
        <Link to="/list">Home</Link>
      </p>
    </div>
  );
}

/** 라우터 처리를 위한 BrowserRouter 컴포넌트는 App.js에서 최상위
엘리먼트를 감싸는 형식으로 사용할 수 있다.  */ 
function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* 첫 진입시에는 게시판의 목록을 렌더링한다. */}
          <Route path='/' element={<List></List>} />
          <Route path='/list' element={<List></List>} />
          <Route path='/view' element={<View></View>} />
          <Route path='/write' element={<Write></Write>} />
          {/* 앞에서 설정한 경로외에는 모두 404처리 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App