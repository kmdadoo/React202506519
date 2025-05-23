import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';

function View(props) {
  console.log(props);
  //중첩라우터로 처리된 경로에서 idx(일련번호)를 얻어오기 위해 Hook생성 
  let params = useParams();
  console.log("idx", params.idx);

  //빈객체를 초기값으로 한 State생성 
  let [boardData, setBoardData] = useState({});
  //요청URL과 쿼리스트링을 나눠서 정의 
  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php"
  let parameter = "apikey=7ff3fbde0a75dbf1bf77796fc652997d&tname=nboard_news&idx="+params.idx;
 
  //API요청 
  useEffect(function(){
    fetch(requestUrl + "?"+ parameter)
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        console.log(json);
        //콜백 데이터로 State 변경 
        setBoardData(json);
      });
    return () =>{
      console.log('useEffect실행==>컴포넌트 언마운트');
    }
  }, []);

  return (<>
    <header>
      <h2>게시판-읽기</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>&nbsp; 
      <Link to="/edit">수정</Link>&nbsp; 
      <Link href="/delete">삭제</Link>&nbsp;
    </nav>
    <article>
      <table id="boardTable">
        <colgroup>
          <col width="20%" />
          <col width="*" />
        </colgroup>
        <tbody>
            <tr>
              <th>작성자</th>
              <td>{boardData.name}</td>
            </tr>
            <tr>
              <th>제목</th>
              <td>{boardData.subject}</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>{boardData.regdate}</td>
            </tr>
            <tr>
              <th>내용</th>
              {/* HTML 태그가 그대로 출력됨. React는 보안적인 문제로 태그는
              화면에 그대로 출력하는것이 디폴트 설정임. */}
              {/* <td>{boardData.contents}</td> */}
              {/* 마크업이 적용된 상태로 출력됨 */}
              <td dangerouslySetInnerHTML={{__html: boardData.content}}></td>
            </tr>
          </tbody>
      </table>      
    </article>
  </>);
}

export default View;