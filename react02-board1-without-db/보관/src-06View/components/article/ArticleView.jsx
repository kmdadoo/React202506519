import React from "react";

//읽기
function ArticleView(props) {
  //선택된 객체가 콘솔에 출력 
  console.log("선택한게시물:", props.selectRow);
  //객체의 Key를 통해 적절히 출력한다. 
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