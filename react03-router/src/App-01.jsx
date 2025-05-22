import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

/**
NavLink 컴포넌트는 <a>태그와 같이 하이퍼링크를 제공한다. 
단 <a>태그에 preventDefault()가 적용된 형태로 화면의 깜빡임없이
페이지 이동을 할수있다. 
링크를 클릭했을때 active라는 클래스 속성을 자동으로 추가해준다. 
*/
const TopNavi = () =>{
  return(
    <nav>
      <NavLink to="/">HOME</NavLink>&nbsp;
      <NavLink to="/intro">인트로</NavLink>&nbsp;
      <NavLink to="/intro/router">Router관련Hook</NavLink>&nbsp;
      <NavLink to="/xyz">잘못된URL</NavLink>&nbsp;
    </nav>
  );
}

/**  
Outlet 컴포넌트
: 웹사이트 제작시 공통으로 사용되는 레이아웃에서 특정 요청에 따른
내용만 변경해야할때 사용한다. 
 */
const CommonLayout = () =>{
  return(
    <div>
      <header style={{background:'lightgray', padding:'10px'}}>
        Outlet 컴포넌트 알아보기
      </header>
      <article>
        {/* 각 페이지의 컴포넌트가 보여지는 부분에 설정한다. */}
        <Outlet />
      </article>
      <footer style={{ background:'lightgray', padding: '10px'}}>
        공통 레이아웃
      </footer>
    </div>
  );
}

const Home = () => {
  return(<>
    <h2>React Home</h2>
    <p>
      React Router애 대해 학습합니다.
    </p>
  </>);
}

/**  
/intro 경로가 요청될때 Outlet위치에 렌더링되는 컴포넌트
하위 Route부분에 설정되어 있다. 
*/ 
const LayoutIndex = () => {
  return(<>
    <h2>레이아웃 인덱스 패이지</h2>
    <ul>
      <li>Outlet 컴포넌트 위치에 출력됩니다.</li>
      <li>Route 설정시 index로 지정합니다.</li>
    </ul>
  </>);
}

/**  
/intro/router 경로가 요청되었을때 Outlet에 렌더링되는 컴포넌트 
 */
const RouterHooks = () => {
  return(<>
    <h2>라우터 관련 Hook</h2>
  </>);
}

/** 
설정된 경로 외 잘못된 경로를 요청했을때 렌더링되는 컴포넌트
Link컴포넌트도 NavLink와 동일하게 하이퍼링크를 제공한다. 단 class를 
추가하는 기능이 없다. 
 */
const NotFound = () => {
  return(
    <div>
      <h2>Not Found</h2>
      <p>
        페이지를 찾을 수 없습니다. TT <br />
        <Link to='/'>Home</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      {/* 라우터 처리가 필요없는 컴포넌트는 전체페이지에서 공통으로 출력하는
      용도로 사용된다.  */}
      <TopNavi></TopNavi>
      {/* 라우터 처리가 필요한 컴포넌트는 아래와 같이 path, element Props를
      통해 경로와 렌더링할 컴포넌트를 지정한다. */}
      <Routes>
        <Route path='/' element={<Home></Home>} />
        {/* 하위 경로가 필요한 경우에는 '중첩라우터'를 사용한다. */}
        <Route path='/intro' element={<CommonLayout />}>
          {/* /intro로 요청이 들어오면 LayoutIndex 컴포넌트 렌더링 */}
          <Route index element={<LayoutIndex />} />
          {/* /intro/router로 요청이 들어오면 RouterHooks 컴포넌트 렌더링 */}
          <Route path='router' element={<RouterHooks />} />
        </Route>
        {/* 지정되지 않은 모든 경로에 대해서는 404처리를 한다. */}
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  )
}

export default App