import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Edit(props) {
  //State와 관련 데이터와 함수를 모두 받아온다. 
  const boardData = props.boardData;
  const setBoardData = props.setBoardData;
  const navigate = props.navigate;
  const nowDate = props.nowDate;

  var params = useParams();
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