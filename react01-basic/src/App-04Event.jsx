import './App.css'

/**  
이벤트처리
: HTML에서는 이벤트 핸들러를 작성할때 대소문자를 구분하지 않는다. 
하지만 React에서는 이벤트명의 첫글자를 반드시 대문자로 기술해야한다. 
또한 이벤트는 자식 컴포넌트가 부모 컴포넌트로 데이터를 전달하는 용도로
사용된다. 
 */
function MyBody(props) {
  const liTag1 = [], liTag2 = []; 

  //첫번째 Props는 일반for문을 통해 인덱스로 요소에 접근한다.
  for (let i = 0; i < props.propData1.length; i++) {
    console.log("프론트엔드Data", props.propData1[i]);
    liTag1.push(
      <li key={i}>{props.propData1[i]}</li>
    );
  }  

  /**
  React에서는 게시판의 목록과 같이 반복적으로 출력되는 항목에 
  중복되지 않는 key prop를 쓰도록 권고하고있다. 
  주로 배열의 인덱스나 일련번호를 통해 부여하면된다. 
  그렇지 않으면 경고(Warning)이 발생된다. 
  */

  //두번째 데이터는 for~of를 사용해서 인덱스없이 요소를 활용한다. 
  let keyCnt = 0;
  for(let row of props.propData2){
    liTag2.push(
      <li key={keyCnt++}>{row}</li>
    );
  }
  
  return(
    <ol>
      {/* 첫번째 경고창은 고정된 메세지를 알림창으로 띄워준다. 
      Props로 전달된 기능을 자식 컴포넌트에서 그대로 사용하는 형식이다. 
      아래 링크를 클릭하는 경우 알림창이 뜨고, 닫으면 화면이 새로고침된다.  */}
      <li><a href='/' onClick={()=>{props.onMyAlert1();}}>프로트엔드</a></li>
        <ul>
          {liTag1}
        </ul>
      {/* 이벤트 객체를 통해 화면이 새로고침 되지 않도록 요청을 중단시킨다. 
      React는 비동기 방식으로 화면을 전환하므로 화면이 새로고침되면 안된다. */}
      <li><a href='/' onClick={(event)=>{
        //click이벤트를 차단한다. 
        event.preventDefault(); // 기본적인 동작을 금지시킨다라는 명령어.
        //props로 전달된 함수를 호출한다. 
        props.onMyAlert1('백엔드');}
      }>백엔드</a></li>
        <ul>
          {liTag2}
        </ul>
    </ol>
  )
}

function App() {
  const myData1 = ['HTML5', 'CSS3', 'Javascript', 'jQuery']
  const myData2 = ['Java', 'Oracle', 'JSP', 'Spring Boot']

  return (
    <div className='App'>
      <h1>React-Event 처리</h1>
      <MyBody propData1={myData1} propData2={myData2}
        onMyAlert1={function(){
          alert('알림창을 뛰웁니다.');
        }}
        onMyAlert2={function (msg) {
          alert(msg);
        }}
      ></MyBody>
    </div>
  );
}

export default App