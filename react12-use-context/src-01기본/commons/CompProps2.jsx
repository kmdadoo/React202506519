/* CompProps2라는 이름의 함수형 컴포넌트를 정의합니다.
  (props): 이 부분은 컴포넌트가 받을 props 객체를 나타냅니다. 부모 컴포넌트가 <CompProps2 myNumber="value" />와 같은 방식으로 이 컴포넌트를 사용할 때, 전달된 myNumber과 value는 props 객체의 속성으로 담겨서 CompProps2 컴포넌트 내에서 접근할 수 있게 됩니다.
 */
const CompProps2 = (props) =>{
  return(
    <div>
      <h4>Props2 컴포넌트</h4>
      {/**props.propData2: 부모 컴포넌트로부터 propData2라는 이름으로 전달된 props 값을 가져와 JSX 내에 삽입하여 렌더링합니다. */}
      {props.propData2}<br/>
      {/**{props.myNumber}: 부모 컴포넌트로부터 myNumber라는 이름으로 전달된 props 값을 가져와 JSX 내에 삽입하여 렌더링합니다. */}
      myNumber={props.myNumber}
    </div>
  );
}

export default CompProps2