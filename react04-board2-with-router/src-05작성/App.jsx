import './App.css'
//글쓰기시 BrowserRouter 처리는 main.jsx로 옮긴 후 작성 
//import { BrowserRouter } from 'react-router-dom'
//라우터 처리를 위한 임포트
import { Route, Routes } from 'react-router-dom';
//글쓰기 완료시 페이지 이동을 위한 훅 임포트 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import List from './components/board/List';
import View from './components/board/View';
import Write from './components/board/Write';
import NotFound from './components/common/NotFound';

//현재날짜를 0000-00-00 형식으로 반환 
const nowDate = () => {
  let dateObj = new Date();
  var year = dateObj.getFullYear();
  var month = ("0" + dateObj.getMonth()).slice(-2);
  var day = ("0" + dateObj.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

function App() {
  //기존 객체형 배열을 State로 변경
  const [boardData, setBoardData] = useState([
    {no:1, title:'오늘은 React 공부하는 날', writer:'홍길동', date:'2025-03-31', contents:'React를 뽀개봅시다.'},
    {no:2, title:'어제는 Javascript 공부했슴', writer:'임꺽정', date:'2025-05-21', contents:'Javascript는 할께 너무 많아요'},
    {no:3, title:'내일은 Project 해야함.', writer:'손오공', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?'},
  ]);
  //게시물의 일련번호 부여를 위한 시퀀스 용도의 State 
  const [nextNo, setNextNo] = useState(4);
  //작성 완료후 페이지 이동을 위한 React 훅 
  const navigate = useNavigate();


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<List boardData={boardData} />} />
        <Route path='/list' element={<List boardData={boardData} />} />
        <Route path='/view'>
          <Route path=':no' element={<View boardData={boardData} />} />
        </Route>

        {/* Write컴포넌트 내에서 글쓰기 처리를 할 수 있도록 App.jsx에서
        생성한 모든 State와 관련함수를 Props로 전달한다.  */}
        <Route path='/write' element={<Write boardData={boardData} 
          setBoardData={setBoardData} nextNo={nextNo} setNextNo={setNextNo}
          navigate={navigate} nowDate={nowDate} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App