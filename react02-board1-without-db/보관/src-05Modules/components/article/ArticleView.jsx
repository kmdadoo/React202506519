import React from "react";

//읽기
function ArticleView(props) {
  return(
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
  ); 
}

export default ArticleView;