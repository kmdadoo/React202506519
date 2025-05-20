import './App.css'

/**
컴포넌트는 일반적인 Javascript 함수와 같이 생성하면된다. 
단 return문에 있는 내용이 렌더링되는 UI이므로 필수적으로 작성되어야 한다.
컴퍼넌트에서는 하나의 최상위 태그로 시작 해야한다.
컴포넌트는 정리정돈의 도구로 보면됨. 대문자로 시작한다.
 */
function MyBody() {
  return(
    <ol>
      <li>프론트엔드</li>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>jQuery</li>
      </ul>
      <li>백엔드</li>
      <ul>
        <li>Java</li>
        <li>Oracle</li>
        <li>JSP</li>
        <li>Spring Boot</li>
      </ul>
    </ol>
  )
}

/*
아래와 같이 사용하는 것이 자바스크립터는 아니다. 유사자바스크립터인데 저것을 바로 메타에서 만든 JSX 라고 한다. vite가 알아서 자바스크립트 코드로 컨버팅을 해주는 것이다.
JSX(JavaScript XML)는 자바스크립트의 확장 문법으로, React에서 UI를 표현하기 위해 사용된다.
이 JSX는 이름에 걸맞게 XML과 매우 비슷하게 생겼는데, 브라우저에서는 JSX를 직접 실행할 수 
없기 때문에 JSX 코드를 자바스크립트 코드로 변환해주는 도구가 필요한 친구이다.
*/
function App() {
  return (
    <div className='App'>
      <h2>React 기본형</h2>
      {/* 컴포넌트는 HTML태그와 같이 기술하면된다. 대문자로 시작한다. */}
      <MyBody></MyBody>
    </div>
  )
}

export default App
