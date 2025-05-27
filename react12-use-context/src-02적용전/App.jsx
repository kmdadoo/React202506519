import { useState } from 'react';
import './App.css'

// Page 컴포넌트: 전체 페이지 레이아웃을 담당하며, Header, Content, Footer 컴포넌트를 포함합니다.
// App 컴포넌트로부터 isDark (다크 모드 여부) 상태와 setIsDark (상태 변경 함수)를 props로 받아서 자식 컴포넌트들에게 전달합니다.
const Page = ({ isDark, setIsDark}) =>{
  return(
    <div className='page'>
      <Header isDark={isDark}></Header>
      <Content isDark={isDark}></Content>
      <Footer isDark={isDark} setIsDark={setIsDark}></Footer>
    </div>
  );
}

// Header 컴포넌트: 페이지의 헤더를 표시합니다. isDark prop에 따라 배경색과 글자색이 변경됩니다.
const Header = ({isDark}) =>{
  return (
    <header className="header"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' : 'black'
      }}
      >
      <h1>Welcome 홍길동..!!</h1>
    </header>
  );
}

// Content 컴포넌트: 페이지의 주요 내용을 표시합니다. isDark prop에 따라 배경색과 글자색이 변경됩니다.
const Content = ({isDark}) =>{
  return (
    <div className="content"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' : 'black'
      }}
      >
      <h1>홍길동 반가워..ㅋㅋ</h1>
    </div>
  );
}

// Footer 컴포넌트: 페이지의 푸터를 표시하며, 다크 모드를 토글하는 버튼을 포함합니다.
const Footer = ({isDark, setIsDark}) =>{
  // toggleTheme 함수: isDark 상태를 반전시켜 다크 모드를 토글합니다.
  const toggleTheme = () =>{
    setIsDark(!isDark); // 다크 모드를 켜거나 끄는 역할을 합니다.
  }
  return (
    <div className="footer"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray',
      }}
      >
      {/* Dark Mode 버튼: 클릭 시 toggleTheme 함수를 호출하여 다크 모드를 변경합니다. */}
      <input type='button' value="Dark Mode" className='button' 
      onClick={toggleTheme}></input>
    </div>
  );
}

// App 컴포넌트: 최상위 컴포넌트로, isDark 상태를 관리하고 Page 컴포넌트에 props로 전달합니다.
function App() {
  // isDark 상태: 다크 모드 여부를 나타내는 boolean 상태입니다. 초기값은 false (라이트 모드)입니다.
  const [isDark, setIsDark] = useState(false);
  return (
    <div className='App'>
      {/* Page 컴포넌트: isDark 상태와 setIsDark 함수를 props로 전달하여 테마를 제어합니다. */}
      <Page isDark={isDark} setIsDark={setIsDark}></Page>
    </div>
  )
}
/**React의 props drilling (상태를 최상위 컴포넌트에서 관리하고 props를 통해 여러 하위 컴포넌트로 전달하는 방식)을 사용하여 간단한 테마 변경 기능을 구현한 예시입니다. 상태 관리 라이브러리나 Context API를 사용하면 더욱 효율적으로 전역 상태를 관리할 수 있습니다. */
export default App
