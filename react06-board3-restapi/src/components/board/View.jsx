import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

function View(props) {
  console.log(props);
  //중첩라우터로 처리된 경로에서 idx(일련번호)를 얻어오기 위해 Hook생성 
  let params = useParams();
  console.log("idx", params.idx);

  const navigate = useNavigate();

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
      <Link to={"/edit/" + params.idx}>수정</Link>&nbsp; 
      <Link onClick={()=>{
        console.log('삭제 idx', params.idx);
        //삭제는 post방식으로 요청.
        fetch("http://nakja.co.kr/APIs/php7/boardDeleteJSON.php",{
          method: 'POST',
          headers: {
            /* <form> 태그의 디폴트 인코딩방식과 케릭셋 지정 */
            'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
          },
          /* 파라미터를 조립해서 쿼리스트링 형식으로 변환한 후 전송  */
          body: new URLSearchParams({
            apikey: '7ff3fbde0a75dbf1bf77796fc652997d',
            tname: 'nboard_news',
            idx: params.idx,
          }),
        })
        .then((result) => result.json())
        .then((json) => {
          console.log(json);
          if(json.result==='success'){
            //삭제 성공시 목록으로 이동 
            alert('삭제되었습니다.');
            navigate("/list");
          } else {
            alert('삭제에 실패했습니다.');          }
        });
      }}>삭제</Link>&nbsp;
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