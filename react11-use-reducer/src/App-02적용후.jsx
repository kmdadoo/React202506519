import { useReducer, useState } from 'react';
import './App.css'

/**
 * 리듀서 함수는 현재 상태( prevCount)와 작업 객체( action)를 인수로 받고 새로운 상태를 반환하는 순수 함수입니다.
prevCount: 이는 상태의 이전 값입니다 count.
action: 이것은 발생해야 하는 상태 업데이트 유형을 설명하는 객체입니다. 일반적으로 작업을 나타내는 type또는 mode속성(여기에서 사용됨)이 있으며 업데이트에 필요한 다른 데이터를 포함할 수 있습니다.
 */
const countReducer = (prevCount, action) => {
  if (action.mode==='up') {
    return prevCount + action.number;
  } else if (action.mode==='down') {
    return prevCount - action.number;
  } else if (action.mode==='reset') {
    return 0;
  }
}// 리듀서 함수는 순수해야 합니다. 즉, 어떠한 부작용(콘솔에 로깅하거나 API 호출을 
//하는 것과 같은)도 없어야 하며 항상 동일한 입력에 대해 동일한 출력을 반환해야 합니다.

function App() {
  /**
   * const [count, countDispatch] = ...: 이것은 배열 분해를 사용하여 두 개의 값을 얻습니다.
    count: 이것은 현재 상태 값으로 초기화됩니다. countuseState에서 반환된 0값과 유사합니다.
    countDispatch: 이것은 디스패치 함수 countDispatch 입니다. 이 함수를 사용하여 상태 업데이트를 트리거합니다. 액션 객체로 호출하면 React가 현재 상태와 액션을 countReducer함수에 전달합니다. 그런 다음 리듀서가 새 count상태를 계산하고 React가 업데이트된 상태로 구성 요소를 다시 렌더링합니다.
   */
  const [count, countDispatch] = useReducer(countReducer, 0);
  /**
   * 이는 useState후크를 사용하여 숫자 입력 필드의 값을 관리합니다.
      number: 입력의 현재 값을 유지합니다(초기화됨 1).
      setNumber: 상태를 업데이트하는 함수입니다 number.
   */
  const [number, setNumber] = useState(1);

  /**
   * onChange이는 숫자 입력 필드 이벤트 에 대한 이벤트 핸들러입니다 .
    event.target.value: 입력 필드에 입력된 현재 값을 문자열로 가져옵니다.
    Number(...): 문자열 값을 숫자로 변환합니다.
    setNumber(...): number새로운 숫자 값으로 상태를 업데이트합니다.
   */
  const changeNumber = (event)=>{
    setNumber(Number(event.target.value));
  }

  const down = () =>{
    /**
     * 액션 객체로 함수를 호출합니다 .
      mode: 'down': 이는 countReducer사용자가 카운트를 감소시키고자 한다는 것을 의미합니다.
      number:number: 이는 카운트가 감소해야 하는 값(상태에서)을 제공합니다 .
     */
    countDispatch({mode:'down', number:number});
  }

  const up =()=>{
    // 현재 값만큼 카운트를 증가
    countDispatch({mode:'up', number:number});
  }

  const reset =()=>{
    //카운트를 0로 재설정하는 작업을 전달합니다. 이 number속성은 리듀서의 '재설정' 
    // 케이스에서는 실제로 사용되지 않지만 여기의 작업 객체에는 포함되어 있습니다.
    countDispatch({mode:'reset', number:number});
  }

  return (
    <div className='App'>
      <h2>useReducer 훅 사용하기</h2>
      <div>
        <input type='button' value="-" onClick={down} />
        <input type='button' value="0" onClick={reset} />
        <input type='button' value="+" onClick={up} />
        {/*changeNumber입력 필드의 값이 변경될 때마다 함수를 호출합니다.*/}
        <input type='number' value={number} onChange={changeNumber} />
        <span>{count}</span>
      </div>
    </div>
  )
  /**
   * 요약하자면, 이 개선된 카운터 애플리케이션은 useReducer후크를 사용하여 count상태를 관리합니다. 상태를 직접 업데이트하는 대신 setCount, 액션(의도된 업데이트를 설명하는 객체)을 countReducer함수에 전송합니다. 그런 다음 리듀서는 액션과 이전 상태를 기반으로 count 상태를 결정합니다. 이 접근 방식은 리듀서 함수에서 업데이트 로직을 중앙 집중화하여 코드를 더 예측 가능하고 관리하기 쉽게 만들어 더 복잡한 상태 로직에 유용합니다.
   */
}

export default App