//컴포넌트 모듈화를 위해 제일 먼저 필요한 React임포트 구문 
import React from "react";

/** 함수형 컴포넌트는 일반적인 JS함수와 같이 정의한다.  */
function ListComponent(props) {
  /** 컴포넌트에서 실제 표현해야할 UI를 return문 내부에 기술한다. 
  클래스형 컴포넌트의 render() 함수와 동일한 역할을 한다. */
  return (
    <>
    {/* JSX를 표현할때는 최상위 엘리먼트가 반드시 하나여야 하므로 
    <></>와 같은 빈 꺽쇄괄호를 사용한다. 이것을 '프레그먼트'라고 한다. 
    */}

      {/** public/skin_board.html 파일에 목록부분 복사해서 붙여 넣기 */}
      <header>
        <h2>게시판 - 목록</h2>
      </header>
      <nav>{/** 수정 **/}
        <a href="/" onClick={(event) =>{
          //이벤트 객체를 통해  click이벤트를 차단한다. 
          event.preventDefault();
          /* 부모가 전달한 Props를 통해 자식쪽의 데이터를 전달한다. 
          즉 부모에서 전달해준 함수를 호출함으로써 자식은 부모쪽으로 데이터를
          전달할 수 있다. */
          props.changeMode('write');
        }}>글쓰기</a>
      </nav>
      <article>
        <table id="boardTable">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Writer</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                {/* 부모에서 전달된 props를 아래와 같이 호출해서 mode를
                  view로 변경한다. */}
                <a href="/" onClick={(event) => {
                  event.preventDefault();
                  props.changeMode('view');
                }}>오늘은 React공부하는날</a>
              </td>
              <td>홍길동</td>
              <td>2025-05-20</td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

export default ListComponent;