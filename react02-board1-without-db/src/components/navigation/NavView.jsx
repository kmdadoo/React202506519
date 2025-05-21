import React from "react";

//읽기의 네비게이션 
function NavView(props) {
  // 띄어쓰기를 할때는 &nbsp; 혹은 {" "}를 사용할 수 있다. 
  return(
    <nav>
      <a href="/" onClick={function(event){
        // <a>태그는 화면의 깜빡임이 있으므로 이벤트를 차단한다.
        event.preventDefault();
        // 부모가 전달해준 함수를 호출한다. 
        props.onChangeMode('list');
      }}>목록</a>&nbsp;
      <a href="/" onClick={function(event){
        event.preventDefault();
        props.onChangeMode('edit');
      }}>수정</a>{" "}
      <a href="/" onClick={function(event){
        event.preventDefault();
        /** HTML에서는 confirm함수 앞에 window객체를 생략하지만 JSX에서는
        반드시 추가해야한다. */
        if (window.confirm('삭제할까요?')) {
          props.onChangeMode('delete');
        }
      }}>삭제</a>
    </nav>
  );
}

export default NavView;