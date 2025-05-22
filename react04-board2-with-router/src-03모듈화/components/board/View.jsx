import { Link } from "react-router-dom";

function View(props) {
  return(<>
    <header>
      <h2>게시판-읽기</h2>
    </header> 
    <nav>
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

export default View;