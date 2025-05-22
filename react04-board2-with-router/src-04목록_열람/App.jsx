import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import List from './components/board/List';
import View from './components/board/View';
import Write from './components/board/Write';
import NotFound from './components/common/NotFound';

function App() {
  const boardData = [
    {no:1, title:'오늘은 React 공부하는 날', writer:'홍길동', date:'2025-03-31', contents:'React를 뽀개봅시다.'},
    {no:2, title:'어제는 Javascript 공부했슴', writer:'임꺽정', date:'2025-05-21', contents:'Javascript는 할께 너무 많아요'},
    {no:3, title:'내일은 Project 해야함.', writer:'손오공', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?'},
  ];

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<List boardData={boardData} />} />
          <Route path='/list' element={<List boardData={boardData} />} />
          <Route path='/view'>
            <Route path=':no' element={<View boardData={boardData} />} />
          </Route>
          <Route path='/write' element={<Write></Write>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App