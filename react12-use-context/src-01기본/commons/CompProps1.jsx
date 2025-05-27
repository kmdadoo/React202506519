/**현재 파일과 같은 디렉토리에 있는 CompProps2.jsx 파일에서 CompProps2 컴포넌트를 가져옵니다. 이는 CompProps1 컴포넌트 내에서 CompProps2 컴포넌트를 사용하기 위함입니다. */
import CompState2 from "./CompProps2";

/** CompProps1이라는 이름의 함수형 컴포넌트를 정의합니다.
({ propData, myNumber }): 이 부분은 **객체 구조 분해 할당 (Object Destructuring)**을 사용하여 CompProps1 컴포넌트가 받을 props 객체에서 propData와 myNumber 속성 값을 직접 추출하여 변수로 사용할 수 있도록 합니다. 즉, 부모 컴포넌트에서 <CompProps1 propData={someValue} myNumber={someOtherValue} />와 같이 props를 전달하면, CompProps1 함수 내에서 propData와 myNumber 변수를 바로 사용할 수 있습니다.*/
const CompProps1 = ({propData, myNumber}) =>{
  return(
    <div>
      <h4>Props1 컴포넌트</h4>
      {/**CompProps1 컴포넌트가 props로 전달받은 propData 값을 JSX 내에 삽입하여 렌더링합니다. */}
      {propData}
      {/**이 부분은 CompProps2 컴포넌트를 CompProps1 컴포넌트의 자식으로 렌더링합니다.
      propData2={propData}: CompProps1이 받은 propData props 값을 CompProps2 컴포넌트에게 propData2라는 이름의 props로 다시 전달합니다.
      myNumber={myNumber}: CompProps1이 받은 myNumber props 값을 CompProps2 컴포넌트에게 myNumber라는 이름의 props로 다시 전달합니다. */}
      <CompState2 propData={propData} myNumber={myNumber} />
    </div>
  );
}
/**CompProps1 컴포넌트는 부모 컴포넌트로부터 propData와 myNumber라는 데이터를 props로 받습니다. 이 중 propData는 자신의 UI에 직접 렌더링하고, propData와 myNumber 모두를 자식 컴포넌트인 CompProps2에게 다시 props로 전달합니다. 이는 React에서 데이터를 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 전달하는 기본적인 패턴을 보여줍니다. CompProps1은 데이터를 받아서 단순히 보여주거나, 가공하거나, 다른 자식 컴포넌트에게 전달하는 중간 다리 역할을 수행할 수 있습니다. */
export default CompProps1