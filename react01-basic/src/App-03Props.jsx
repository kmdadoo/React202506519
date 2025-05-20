import './App.css'

/**
Props(프롭스)(props는 속성을 나타내는 데이터입니다)
: React에서 상태를 저장하기 위한 값으로 부모 컴포넌트가 자식 컴포넌트로
전달하는 읽기전용 데이터를 말한다. 전달시에는 HTML의 속성처럼 기술한다. 
형식]
  <컴포넌트명 props속성명={속성값} />
*/

/**
App 컴포넌트에서 Props를 전달하고 있으므로 매개변수 props로
받은 후 사용할 수 있다.  
*/
function FrontComp(props) {
  const liRows = [];

  //첫번째 Props는 일반for문을 통해 인덱스로 요소에 접근한다. 
  for (let i = 0; i < props.propData1.length; i++) {
    //각 루프에서 배열에 JSX 항목을 하나씩 추가한다.
    liRows.push(
      <li key={i}>{props.propData1[i]}</li>
    );
  }

  return(<>
      <li>프론트엔드</li>
      <ul>
        {liRows}
      </ul>
  </>)
}

const BackComp = ({propData2}) => {
  const liRows = [];

  //두번째 데이터는 for~of를 사용해서 인덱스없이 요소를 활용한다. 
  let keyCnt = 0;
  for(let row of propData2){
    liRows.push(
      <li key={keyCnt++}>{row}</li>
    );
  }

  /** 앞에서 생성한 배열변수를 렌더링을 위한 return문장에 변수형태로
  삽입한다. */
  return(<>
      <li>백엔드</li>
      <ul>
        {liRows}
      </ul>
  </>)
}

function App() {
  //props로 사용할 배열 변수 선언 
  const frontData = ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'React추가']
  const backData = ['Java', 'Oracle', 'JSP', 'Spring Boot', 'Nextjs추가']

  //UI를 렌더링하는 문장.  props를 이용하여 사용자 정의 태그를 만들수 있다.
  return (<>
    <div>
      <h2>React-Props</h2>
      <ol>
        {/* MyBody 컴포넌트로 2개의 Props를 전달한다. 전달시에는 HTML의
          속성과 같이 기술하면된다. 변수일때는 중괄호를 사용하고, 일반적인
          문자열을 전달할때는 더블쿼테이션을 사용한다. */}
        <FrontComp propData1={frontData} ></FrontComp>
        <BackComp propData2={backData} />
      </ol>
    </div>
  </>
  )
}

export default App
