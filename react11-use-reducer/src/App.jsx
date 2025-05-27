import { useReducer, useState } from 'react';
import './App.css'

// 학생 목록 관리
const Student = ({name, dispatch, id, isHere}) =>{
  return(<>
    <div>
      <span style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black',
        }}
        onClick={()=>{  
          dispatch({type:'mark', param:{ id }})
        }}>{name}</span>
        <button onClick={()=>{  
          alert('삭제할까요?');
          dispatch({type:'delete', param: {id}})
        }}>삭제</button>
    </div>
  </>);
}

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
          count: state.count + 1,
          students: [...state.students, newStudent],
        }
      }
    case 'delete':
      return {
        count: state.count - 1,
        students: state.students.filter(
          student => student.id !== action.param.id
        )
      }
    case 'mark':
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id===action.param.id) {
            return {...student, isHere: !student.isHere};
          }
          return student;
        })
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
  const [name, setName] = useState('');
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <p>총학생수 : {studentInfo.count}</p>
      <input type='text' placeholder='이름을 입력하세요' value={name}
        onChange={(e)=>{  //  onChange 이벤트 핸들러를 통해 입력 값이 name 상태에 업데이트됩니다.
          setName(e.target.value)
        }} />
      <button onClick={() =>{
        dispatch({type:'add', param:{name}});
      }}>추가</button>
      {
        studentInfo.students.map((student) =>{
          return <Student key={student.id} name={student.name}
          dispatch={dispatch} id={student.id}
          isHere={student.isHere} />
        })
      }
    </div>
  )

}

export default App