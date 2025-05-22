import { Link } from "react-router-dom";

function Write(props) {
  //State와 관련 데이터와 함수를 모두 받아온다. 
  const boardData = props.boardData;
  const setBoardData = props.setBoardData;
  const nextNo = props.nextNo;
  const setNextNo = props.setNextNo;
  const navigate = props.navigate;
  const nowDate = props.nowDate;

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
          let addBoardData = {no:nextNo, writer:w, title:t, contents:c, date:nowDate()};

          //복사본을 생성한 후 데이터를 추가한다. 
          let copyBoardData = [...boardData];
          copyBoardData.push(addBoardData);

          //State를 변경한다. 
          setBoardData(copyBoardData);
          //시퀀스용 번호도 1 증가시킨다. 
          setNextNo(nextNo+1);
          //완료되면 목록으로 이동한다. 
          navigate("/list");
        }
      }>
        <table id="boardTable">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer" /></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title" /></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea name="contents" cols="22" rows="3"></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송" />
      </form>
    </article>
  </>);
}

export default Write;