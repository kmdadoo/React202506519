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
            <td>내용1</td>
            {/* JS의 고차함수인 map()을 이용해서 줄바꿈이 된 횟수만큼
            반복해서 <br>태그로 변경한다.  */}
            <td>{
              props.selectRow.contents.split('\n').map((currVal)=>{
                console.log(currVal);
                return(<>
                  {currVal} <br key={Math.random()} />
                </>);
              })
            }</td>
          </tr>
          {/* CSS의 white-space속성을 적용해서 줄바꿈 처리한다. */}
          <tr>
            <td>내용2</td>
            <td style={{'whiteSpace':'pre-wrap'}}>
              {props.selectRow.contents}
            </td>
          </tr>
           {/* App.css에 적용해서 줄바꿈 처리한다. */}
          <tr>
            <td>내용3</td>
            <td className="contWrap">
              {props.selectRow.contents}
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  ); 
}

export default ArticleView;