import { useReducer, useState } from 'react';
import './App.css'

// 은행 계좌 애플리케이션
/**
 * 디스패치할 수 있는 다양한 유형의 액션에 대한 문자열 상수를 보관하는 ActionTypes 객체를 정의합니다. 이는 오타를 피하고 코드를 더 읽기 쉽고 유지 관리하기 쉽게 만드는 좋은 방법입니다.
 */
const ActionTypes = {
  depo : 'deposit', // 입금 동작을 나타냅니다.
  with : 'withdraw' // 인출 동작을 나타냅니다.
}

//이름이 myReducer인 리듀서 함수를 정의합니다.
/**
 * nowState : money(계정 잔액) 의 현재 상태를 나타냅니다 .
  myAction: 상태를 업데이트하기 위해 전송된 작업 객체를 나타냅니다. mode속성( ActionTypes의 키와 일치)과 amount속성이 있어야 합니다.
 */
const myReducer = (nowState, myAction) => {
  console.log("리듀서 함수 호출", nowState, myAction);
  switch (myAction.mode) {  // 전달된 작업의 mode를 확인하는 명령문입니다 .
    case ActionTypes.depo:  // 동작 모드가 '입금'인 경우, nowState(현재 잔액)과 myAction.amount(입금 금액)을 더한값을 반환합니다.
      return nowState + myAction.amount;  
    case ActionTypes.with: // 동작 모드가 '인출'인 경우, myAction.amount(인출할 금액)에서 nowState뺀 금액 을 반환합니다.
      return nowState - myAction.amount;
    default:  // 액션 모드가 정의된 케이스와 일치하지 않으면 변경 사항 없이 nowState를 반환합니다. 이는 예상치 못한 액션을 처리하는 데 중요합니다.
      return nowState; 
  }
}

function App() {
  const [number, setNumber] = useState(0);
  /**
   * useReducer후크를 이용해 계정 잔액을 관리합니다.
    myReducer: 이전에 정의한 리듀서 함수로 상태 업데이트를 처리합니다.
    0: money 상태의 초기 값(초기 계좌 잔액은 0입니다).
    money: 현재 상태 값(현재 계좌 잔액).
    myDispatch: 디스패치 함수. 이 함수를 액션 객체로 호출하여 상태 업데이트를 트리거합니다. 그러면 React가 현재 money상태와 액션을 myReducer함수에 전달합니다.
   */
  const [money, myDispatch] = useReducer(myReducer, 0);
  return (
    <div className='App'>
      <h2>useReducer App</h2>
      <p>잔액 : {money}원</p>

      {/**숫자 입력 필드.
        value={number}: 입력 값을 number상태에 연결합니다.
        step={1000}: 입력 값이 1000 단위로 증가/감소하도록 제안합니다.*/}
      <input type='number' value={number} step={1000} 
        // number: 입력 값이 변경될 때마다 상태 를 업데이트하는 이벤트 핸들러입니다 . parseInt값이 정수로 처리되도록 하는 데 사용됩니다
        onChange={(e) =>{
          setNumber(parseInt(e.target.value));
      }}  />
      <button type='button' onClick={() =>{
        // mode: ActionTypes.depo: 작업 유형을 '입금'으로 지정합니다.
        // amount: number: 입금할 금액을 제공합니다( number입력 필드에서 가져옴).
        myDispatch({mode:ActionTypes.depo, amount:number})
      }}>입금</button>
      <button type='button' onClick={() =>{
        myDispatch({mode:ActionTypes.with, amount:number})
      }}>출금</button>
    </div>
  );
  /**
 * useReducer를 사용하면 ActionTypes코드가 더 체계적으로 구성되고 작업 이름을 잘못 입력하여 발생하는 오류가 덜 발생합니다. 이 함수는 각 유형의 작업에 대해 상태를 어떻게 변경해야 하는지 명확하게 정의합니다. 이는 특히 여러 관련 상태 업데이트를 처리할 때 상태를 보다 체계적이고 예측 가능한 방식으로 관리하는 데 사용할 수 있습니다 .
 */
}

export default App