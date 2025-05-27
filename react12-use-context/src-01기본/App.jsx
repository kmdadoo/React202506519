import { useState } from 'react'
import './App.css'
// 컴퍼넌트 임포트
import CompState1 from './commons/CompProps1';
import CompContext1a from './commons/CompContext1a';
import CompContext1b from './commons/CompContext1b';
// 컴텍스트 임포트  
import { SimpleContext } from './context/SimpleContext';

function App() {
  /**
   * useState 훅을 사용하여 myNumber라는 상태 변수를 생성하고 초기값을 1로 설정합니다.
    myNumber: 현재 숫자 값을 저장하는 상태 변수입니다.
    setMyNumber: myNumber 상태를 업데이트하는 함수입니다.
   */
  const [myNumber, setMyNumber] = useState(1);
  
  return (<>
    <h2>최상위 컴포넌트</h2>
    {/**숫자 입력 필드를 생성합니다.
      value={myNumber}: 입력 필드의 현재 값을 myNumber 상태 변수와 바인딩합니다.
      e.target.value: 입력된 새로운 값 (문자열 형태)을 가져옵니다.
      setMyNumber(...): 변환된 정수 값을 myNumber 상태 변수에 업데이트합니다. */}
    <input type='number' value={myNumber} 
      onChange={(e)=>{  // 입력 필드의 값이 변경될 때마다 실행되는 이벤트 핸들러입니다.
      setMyNumber(e.target.value);
    }} />

    <div className='App'>
      <h3>Props를 통한 데이터 전달</h3>
      {/**CompState1 컴포넌트를 렌더링하고 있습니다. 
        propData={'Props로 전달되는 데이터'}: 문자열 "Props로 전달되는 데이터"를 CompState1 컴포넌트의 propData라는 props로 전달합니다.
        myNumber={myNumber}: 현재 App 컴포넌트의 상태 myNumber 값을 CompState1 컴포넌트의 myNumber라는 props로 전달합니다. */}
      <CompState1 propData={'Props로 전달되는 데이터'} myNumber={myNumber} />
    </div>
  
    <div className='App'>
      <h3>useContext 적용</h3>
      <CompContext1a />
    </div>

    {/**SimpleContext.Provider 컴포넌트로 감싸인 영역입니다. 이 Provider는 SimpleContext를 통해 데이터를 공유할 수 있도록 해줍니다.
      value={{str:'Provider의 초기값', num:myNumber}}: value prop을 통해 공유할 데이터를 객체 형태로 제공합니다.
      str: 'Provider의 초기값': str이라는 키에 문자열 값을 할당합니다.
      num: myNumber: num이라는 키에 현재 App 컴포넌트의 상태 myNumber 값을 할당합니다. */}
    <SimpleContext.Provider value={{str:'Provider의 초기값', num:myNumber}}>
      <div className='App'>
        <h3>useContext 적용 및 Provider 래핑</h3>
        <CompContext1b />
      </div>
    </SimpleContext.Provider>
  </>
  )
}
/**App컴포넌트는 다음과 같은 주요 기능을 수행합니다.

상태 관리: useState 훅을 사용하여 myNumber라는 숫자 상태를 관리하고, 입력 필드를 통해 이 값을 변경할 수 있습니다.
Props를 통한 데이터 전달: CompProps1 (원래 코드의 CompState1 오타로 추정) 컴포넌트에게 정적인 문자열 데이터와 현재 myNumber 상태 값을 props로 전달하여 데이터를 하위 컴포넌트로 전달하는 기본적인 방식을 보여줍니다.
Context API를 통한 데이터 공유:
CompContext1a 컴포넌트는 <SimpleContext.Provider>로 래핑되지 않았기 때문에 Context의 값을 제대로 소비하지 못할 것입니다.
CompContext1b 컴포넌트는 <SimpleContext.Provider>로 래핑되어 있고, Provider의 value prop을 통해 str과 num 데이터를 제공받아 사용할 수 있습니다. num 값은 App 컴포넌트의 myNumber 상태와 동적으로 연결되어 있습니다.
이 코드는 React에서 데이터를 전달하고 공유하는 두 가지 핵심적인 방법을 명확하게 보여주는 좋은 예시입니다. */
export default App