//App 컴포넌트에서 사용하는 스타일시트 
import './App.css'
//State를 관리하기 위한 훅 
import { useState } from 'react';

/** 
component 폴더 안에 파일을 만들고 각각의 컴포넌트를 js 혹은 jsx 파일로 생성한 후 모듈화한다. 
import시 저장된 경로와 컴포넌트명까지만 기술하고 확장자는 생략한다. 
*/
import ViewComponent from './component/ViewComponent';
import WriteComponent from './component/WriteComponent';
import ListComponent from './component/ListComponent';

function App() {
  /** State를 정의한 후 초기값은 list로 설정. 변경할 함수명은 setMode로 정의. */
  const [mode, setMode] = useState('list');
  let contents = '';

  /** mode의 변화에 따라 다른 컴포넌트를 할당할 수 있도록 if문으로 분기. 
  공통적으로 mode를 파라미터로 받은 후 State를 변경하는 함수가 props를 통해
  자식 컴포넌트로 전달됨.  
  
  pmode 자식 컴포넌트에서 특정 이벤트(예: 버튼 클릭)가 발생했을 때, pmode 
  값을 changeMode 함수에 전달하여 부모 컴포넌트의 mode 상태를 변경합니다.
  즉, pmode는 자식 컴포넌트가 부모 컴포넌트에게 "어떤 모드로 변경해야 
  하는지"를 알려주는 역할을 합니다.
  모드 값 전달:
  pmode는 문자열 형태의 모드 값을 가지며, 예를 들어 "list", "view", 
  "write" 등이 될 수 있습니다.
  이 값은 부모 컴포넌트의 setMode 함수에 전달되어 mode 상태를 업데이트하는 
  데 사용됩니다.
  */  
  if (mode==="view") {
    contents = <ViewComponent changeMode={(pmode)=>{setMode(pmode)}}></ViewComponent>
  }else if (mode==="write") {
    contents = <WriteComponent changeMode={(pmode)=>{setMode(pmode)}}></WriteComponent>
  }else {
    contents = <ListComponent changeMode={(pmode)=>{setMode(pmode)}}></ListComponent>
  }

  //최종적으로 컴포넌트를 렌더링 
  return (
    <div className='App'>
      <h1>React- 모듈화</h1>
      {contents}
    </div>
  )
}

export default App