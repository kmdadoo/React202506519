import React from "react";
import {useState} from 'react';

function ComEdit(props){
  const [writer, setWriter] = useState(props.writer); // 수정
  const [comment, setComment] = useState(props.comment);

  return (<>
    <form onSubmit={(event)=>{
      event.preventDefault();
      // 폼값 검증
      if (event.target.writer.value === '') {
        alert('작성자를 입력하세요.');
        event.target.writer.focus();
        return;
      }
      if (event.target.comment.value === '') {
        alert('댓글 내용을 입력하세요.');
        event.target.comment.focus();
        return;
      }
      // 수정
      let writer = event.target.writer.value;
      let comment = event.target.comment.value;
      props.onEditComment(props.no, writer, comment);
      event.target.writer.value = '';
      event.target.comment.value = '';
      // 수정 State 수정
      props.setShowEdit(false);
      props.setEditNo(null);
    }}>
      <table id="boardTable">
        <tbody>
          <tr>
            <td id="writer">Writer : 
              <input type="text" name="writer" value={writer} onChange={(event)=>{
              setWriter(event.target.value);
              }} />
              <button onClick={(event)=>{
                event.preventDefault();
                props.setShowEdit(false);
                props.setEditNo(null);
              }}>수정취소</button>
            </td>
            <td rowSpan="2"><input type="submit" value="댓글수정" id="btn"/></td>
          </tr>
          <tr>
            <td><textarea name="comment" value={comment} onChange={(event)=>{
              setComment(event.target.value);
            }}></textarea></td>
          </tr>
        </tbody>
      </table>        
    </form>
  </>);
}

export default ComEdit;  
