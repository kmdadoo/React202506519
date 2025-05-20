import React from "react";

function WriteComponent(props) {
  return(
    <>
      {/** public/skin_board.html 파일에 쓰기부분 복사해서 붙여 넣기 **/}
      <header>
        <h2>게시판-작성</h2>
      </header> 
      <nav> {/** 수정 **/}
        <a href="/" onClick={(event) => {
          event.preventDefault();
          props.changeMode('list');
        }}>목록</a>
      </nav>
      <article>
        <form>
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
          {/* JSX는 유사 HTML문법을 사용하므로 반드시 Pair(쌍)을 이뤄야한다. 
          따라서 <input> 태그도 아래와 같이 작성하는것이 좋다.  */}
          <input type="submit" value="전송"></input>
        </form>
      </article>
    </>
  );
}

export default WriteComponent;