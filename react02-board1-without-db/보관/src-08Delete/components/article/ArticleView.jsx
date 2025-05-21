import React from "react";

//읽기
function ArticleView(props) {
  console.log("선택한게시물:", props.selectRow);
  return(
    <article>
      <table id="boardTable">
        <colgroup>
          <col width="30%" /><col width="*" />
        </colgroup>
        <tbody>
          <tr>
            <td>작성자</td>
            <td>{props.selectRow.writer}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td>{props.selectRow.title}</td>
          </tr>
          <tr>
            <td>날짜</td>
            <td>{props.selectRow.date}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>{props.selectRow.contents}</td>
          </tr>
        </tbody>
      </table>
    </article>
  ); 
}

export default ArticleView;