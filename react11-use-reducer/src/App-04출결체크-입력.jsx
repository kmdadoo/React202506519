import { useReducer, useState } from 'react';
import './App.css'

// 학생 목록 관리
/**
 * Student 컴포넌트: 개별 학생의 정보를 화면에 표시하는 역할을 합니다.
  name: 학생의 이름
  dispatch: 액션을 리듀서로 전달하는 함수 (App 컴포넌트에서 내려받음)
  id: 학생의 고유 식별자
  isHere: 학생의 출석 여부 (현재는 사용되지 않고 있습니다.)
  
 */
const Student = ({name, dispatch, id, isHere}) =>{
  console.log(name, dispatch, id, isHere);
  return(<>
    <div>
      <span style={{}}
        onClick={()=>{  // 학생 이름을 클릭하면 "출석관리" 알림창이 나타납니다.
          alert('출석처리');
        }}>{name}</span>
        <button onClick={()=>{  // "삭제" 버튼을 클릭하면 "삭제" 알림창이 나타납니다. (실제 삭제 로직은 reducer 함수 내에 아직 구현되지 않았습니다.)
          alert('삭제');
        }}>삭제</button>
    </div>
  </>);
}

// reducer 함수: useReducer 훅에서 사용되는 순수 함수입니다. 현재 상태(state)와 액션 
// 객체(action)를 받아 새로운 상태를 반환합니다.
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      { const name = action.param.name; //  추가할 학생의 이름을 가져옵니다.
        const newStudent = {
          id: Date.now(),
          name,
          isHere: false,
        }
        return{
          // 새로운 상태 객체를 반환합니다. count는 1 증가시키고, students 배열은 기존 
          // 배열에 새로운 학생 객체를 추가한 새로운 배열로 업데이트합니다. (불변성을 
          // 유지하기 위해 스프레드 연산자 ...를 사용합니다.)
          count: state.count + 1,
          students: [...state.students, newStudent],
        }
      }
    case 'delete':
      return {

      }
    case 'mark':
      return {
        
      }
    default:
  }
}

/**
 * useReducer훅의 초기 상태를 정의하는 객체입니다.
  count: 초기 학생 수는 1명입니다.
  students: 초기 학생 배열에는 '김철수'라는 이름을 가진 학생 객체가 하나 들어있습니다.
 */
const initialState = {
  count : 1,
  students : [
    {
      id: Date.now(), name: '김철수', isHere: false,
    },
  ],
}

function App() {
  /**
   * useState 훅을 사용하여 input 필드의 값(name)을 관리합니다.
    name: 현재 input 필드에 입력된 값
    setName: name 상태를 업데이트하는 함수
   */
  const [name, setName] = useState('');
  /**
   * useReducer훅을 사용하여 학생 목록과 관련된 상태를 관리합니다.
    reducer: 상태 업데이트 로직을 처리하는 함수
    initialState: 초기 상태 값
    studentInfo: 현재 상태 객체 ({ count, students })
    dispatch: 액션 객체를 reducer 함수로 전달하여 상태 업데이트를 트리거하는 함수
   */
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <p>총학생수 : {studentInfo.count}</p>
      {/**학생 이름을 입력하는 텍스트 필드입니다. */}
      <input type='text' placeholder='이름을 입력하세요' value={name}
        onChange={(e)=>{  //  onChange 이벤트 핸들러를 통해 입력 값이 name 상태에 업데이트됩니다.
          setName(e.target.value)
        }} />
      {/** "추가" 버튼을 클릭하면 dispatch 함수를 호출하여 'add' 타입의 액션 객체를 reducer로 전달합니다. 이때 입력된 name을 액션 객체의 param으로 함께 보냅니다. 추가 후 setName('')을 호출하여 input 필드를 비웁니다.*/}
      <button onClick={() =>{
        dispatch({type:'add', param:{name}});
      }}>추가</button>
      {
        /**
         * studentInfo.students 배열을 map 함수를 사용하여 순회하며 각 학생에 대해 <Student> 컴포넌트를 렌더링합니다. key prop은 React가 어떤 항목이 변경, 추가 또는 삭제되었는지 식별하는 데 필요합니다. 각 학생의 id를 key로 사용합니다. name, dispatch, id, isHere props를 <Student> 컴포넌트로 전달합니다.
         */
        studentInfo.students.map((student) =>{
          return <Student key={student.id} name={student.name}
          dispatch={dispatch} id={student.id}
          isHere={student.isHere} />
        })
      }
    </div>
  )
  /**
 * useReducer 훅: 복잡한 상태 로직을 관리하는 데 유용합니다. 상태 업데이트 로직을 reducer 함수라는 별도의 함수로 분리하여 관리하고, 액션 객체를 통해 어떤 업데이트를 수행할지 명시적으로 전달합니다.
  액션(Action): 상태 업데이트를 일으키는 객체입니다. 일반적으로 type 속성을 가지며, 필요한 데이터를 payload 또는 param 등의 속성에 담아 전달합니다.
  리듀서(Reducer): 현재 상태와 액션을 받아 새로운 상태를 반환하는 순수 함수입니다. 동일한 입력에 대해 항상 동일한 출력을 반환해야 하며, 사이드 이펙트를 일으키지 않아야 합니다.
  디스패치(Dispatch): 액션 객체를 리듀서로 전달하여 상태 업데이트를 요청하는 함수입니다. useReducer 훅의 반환 값 중 하나입니다.
  불변성(Immutability): 상태를 직접 수정하는 대신, 이전 상태를 기반으로 새로운 상태 객체를 생성하는 것을 의미합니다. useReducer에서 상태 업데이트 시 스프레드 연산자(...)를 사용하여 불변성을 유지하는 것이 중요합니다.
 */
}

export default App