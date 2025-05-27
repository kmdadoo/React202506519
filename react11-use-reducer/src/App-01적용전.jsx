import { useState } from 'react'
import './App.css'

function App() {
  // 훅 사용하여 상태변수를 초기화, 0은 상태변수의 초기값
  // count 상태변수, setCount 상태업데이트 함수
  const [count, setCount] = useState(0);

  /**
   * 이 함수가 호출되면(예: "-" 버튼을 클릭하면) .을 호출합니다 setCount(count -
   *  1). 이는 count현재 값에서 1을 빼서 상태를 업데이트합니다. 그러면 React가 
   * 구성 요소를 다시 렌더링하고 표시되는 값이 count감소합니다.
   */
  const down = () =>{
    setCount(count - 1);
  }

  /**
   * 호출되면 함수를 호출하여 상태를 1 setCount(count + 1)증가시키고 count다시 
   * 렌더링을 트리거합니다.
   */
  const up = () =>{
    setCount(count + 1);
  }

  // 호출되면 함수를 호출하여 상태를 초기 값인 0으로 다시 setCount(0)설정 
  // count하고 다시 렌더링합니다.
  const reset = ()=>{
    setCount(0);
  }

  return (
    <div className='App'>
      <h2>useReducer 훅 사용하기</h2>
      <div>
        <input type='button' value="-" onClick={down} />
        <input type='button' value="0" onClick={reset} />
        <input type='button' value="+" onClick={up} />
        <span>{count}</span>
      </div>
    </div>
  )
}

export default App