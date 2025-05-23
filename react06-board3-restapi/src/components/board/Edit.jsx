import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit(props) {
  //페이지 이동
  const navigate = useNavigate();
  //파라미터 읽어오기
  let params = useParams();
  console.log("수정idx", params.idx);

  let requestUrl = "http://nakja.co.kr/APIs/php7/boardEditJSON.php"
  let parameter = "apikey=7ff3fbde0a75dbf1bf77796fc652997d&tname=nboard_news&idx="+params.idx;

  //수정을 위한 State
  /* React에서는 <input>에 value속성으로 값을 설정하는 경우 내용 수정이
  불가능하다. 따라서 State를 통해 값을 수정할 수 있도록 해야한다. 
  API를 통해 읽어온 값을 State에 저장하고 onChange 이벤트 리스너를 통해
  설정된 값을 수정한다.  */ 
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  useEffect(function(){
    fetch(requestUrl + "?" + parameter)
     .then((result)=>{
      return result.json();
     })
     .then((json)=>{
      console.log(json)
     })
  })

  console.log("파라미터", params.no);
  let pno = Number(params.no);

  let vi = boardData.reduce((prev, curr)=>{
    if(curr.no===pno){
      prev = curr;
    }
    return prev;
  }, {})

  const [title, setTitle] = useState(vi.title);
  const [writer, setWriter] = useState(vi.writer);
  const [contents, setContents] = useState(vi.contents);

  return(<>
    <header>
      <h2>게시판-작성</h2>
    </header> 
    <nav>
      <Link to="/list">목록</Link>
    </nav>
    <article>
      
      <form onSubmit={
        (event) =>{
          event.preventDefault();

          //Event객체를 통해 입력값을 얻어옴 
          let w = event.target.writer.value;
          let t = event.target.title.value;
          let c = event.target.contents.value;

          //추가할 객체 생성 
          let editBoardData = {no:pno, writer:w, title:t, contents:c, date:nowDate()};

          //복사본을 생성한 후 데이터를 추가한다. 
          let copyBoardData = [...boardData];
          for (let i = 0; i < copyBoardData.length; i++) {
            //수정할 객체를 찾아서..
            if (copyBoardData[i].no===pno) {
              //변경한다. 
              copyBoardData[i] = editBoardData;
              break;
            }
          }

          //State를 변경한다. 
          setBoardData(copyBoardData);
          //완료되면 목록으로 이동한다. 
          navigate("/list");
        }
      }>
        <table id="boardTable">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer" value={writer} onChange={(event)=>{
                setWriter(event.target.value);
              }}/></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title" value={title} onChange={(event)=>{
                setTitle(event.target.value);
              }}/></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea name="contents" cols="22" rows="3" value={contents}
                onChange={(event)=>{
                  setContents(event.target.value);
                }}></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송" />
      </form>
    </article>
  </>);
}

export default Edit;