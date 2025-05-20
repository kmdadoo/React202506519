import React from "react";

function ViewComponent(props){
  return(
    <>
      {/** public/skin_board.html 파일에 읽기부분 복사해서 붙여 넣기 **/}
      <header>
        <h2>게시판-읽기</h2>
      </header> 
      <nav> {/** 수정 **/}
        <a href="/" onClick={(event) => {
          event.preventDefault();
          props.changeMode('list');
        }}>목록</a>&nbsp;&nbsp;
        <a href="/" onClick={(e) => {
          alert('수정');
          e.preventDefault();
        }}>수정</a>&nbsp;&nbsp;
        <a href="/" onClick={(e) => {
          alert('삭제');
          e.preventDefault();
        }}>삭제</a>
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
    </>
  );
}

export default ViewComponent;