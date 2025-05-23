import { useState } from "react";
import ComEdit from "./ComEdit";

function ComList(props){
  let lists = [];
  const [showEdit, setShowEdit] = useState(false);
  const [editNo, setEditNo] = useState(null);
  // 중복 수정버튼 클릭 여부 확인
  const checkEdit = (no) => {
    if (showEdit === true) {
      alert("현재 수정 mode 입니다. 수정 취소를 눌러 주세요.");
      setShowEdit(true);
    } else {
      setEditNo(no);
    }
  }

  // 리스트 출력
  for (let row of props.myData) { // map 함수 사용을 권장.
    lists.push(
    <div key={row.no}>   {/* for...of 루프를 사용한 key prop 추가 (권장하지 않음) */}
      {/* 수정할 댓글이 아닐 경우 list 형태로 출력 */}
      {editNo === row.no ? null :
        <table id="boardTable">
          <tbody>
            <tr>
              <td >{row.no}</td>
              <td>Writer:{row.writer}</td>
              <td>
                Date : {row.date}
                <button type="button" onClick={(event)=>{
                  event.preventDefault();
                  setShowEdit(!showEdit);
                  checkEdit(row.no);
                  console.log(showEdit);
                }}>수정</button>							
                <button type="button" onClick={()=>{
                  if (window.confirm('삭제하시겠습니까?')) {
                    props.onDeleteComment(row.no);
                  }
                }}>삭제</button>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="subject">{row.comment}</td>
            </tr>
          </tbody>
        </table>
      }
      {/* 수정할 댓글일 경우 수정폼 출력 */}
      { editNo !== row.no ? null : 
        <ComEdit no={row.no} writer ={row.writer} comment={row.comment}
          onEditComment = {props.onEditComment}
          showEdit ={showEdit} setShowEdit={setShowEdit}
          editNo={editNo} setEditNo={setEditNo} />
      }
    </div>);
  }

  return (<>
    {lists}
  </>);
}

export default ComList;  
