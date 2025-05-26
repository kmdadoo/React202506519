import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(1);

  /*
  Step1 : 렌더링의 횟수를 알고싶어 이와같이 State로 처리하면 첫번째 렌더링 후
    useEffect가 실행되고, 내부에서 다시 State가 변경되니 렌더링이 지속적으로 
    되는 상태가 된다. 즉 무한루프에 빠지게된다. 
  */
  // const [renderCount, setRenderCount] = useState(1);
  // useEffect(()=>{
  //   console.log("렌더링01");
  //   setRenderCount(renderCount+1);  // 컴포넌트를 다시 렌더링함 그래서 무한루프가됨
  // })

  /*
  Step2 : 만약 이 상황에 일반변수를 사용하면 렌더링될때마다 0으로 초기화되므로
    횟수를 알수없게된다. 따라서 변화는 감지해야 하지만 렌더링은 안되야하는
    상황에 useRef는 유용하게 사용된다. 
  */
  // useRef로 생성된 renderCount 변수는 컴포넌트가 리렌더링되어도 값이 유지
  const rederCount = useRef(1);

  // useEffect는 매 렌더링 시점에 실행되어 renderCount.current 값을 증가시키지만, 이는 
  // 상태 변경이 아니므로 추가적인 리렌더링을 유발하지 않습니다. 따라서 렌더링 횟수를 
  // 안전하게 추적할 수 있습니다.
  useEffect(()=>{
    console.log("렌더링02",rederCount.current);  // 초기값 1
    rederCount.current = rederCount.current + 1; // 1증가 2
  })

  return (
    <div className='App'>
      <p>Count : {count}</p>
      {/** 버튼을 클릭하면 setCount 함수가 호출되어 count 상태 변수를 증가시키고, 이로 인해 컴포넌트가 리렌더링됩니다 */}
      <button onClick={()=>setCount(count+1)}>Count 중가</button>
    </div>
  )
}
/**
 * - useState와 useRef의 중요한 차이점
 
  useState는 컴포넌트의 상태를 관리하고, 상태가 변경되면 리렌더링을 유발합니다.

  useRef는 컴포넌트 생명주기 동안 유지되는 변경 가능한 값을 관리하지만, 값을 변경해도 
  리렌더링을 유발하지 않습니다. 주로 DOM 요소에 접근하거나, 리렌더링 없이 값을 유지해야 
  하는 경우에 사용됩니다.
 */
export default App