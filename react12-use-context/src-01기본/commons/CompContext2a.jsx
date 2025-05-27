// React의 useContext 훅을 가져옵니다. 이 훅은 함수형 컴포넌트에서 컨텍스트 값을 읽어오는 데 사용됩니다.
import { useContext } from "react"
/**
 * ../context/SimpleContext 경로에 있는 SimpleContext라는 컨텍스트 객체를 가져옵니다. 이 컨텍스트는 React.createContext()를 사용하여 생성되었으며, 애플리케이션의 다른 부분에서 Provider를 통해 값을 제공하고 있다.
 */
import { SimpleContext } from "../context/SimpleContext";

const CompContext2a = () =>{
  /**
   * useContext 훅을 사용하여 SimpleContext 컨텍스트의 현재 값을 가져옵니다.
  SimpleContext를 useContext 훅에 전달하면, React는 이 컴포넌트가 속한 컴포넌트 트리에서 가장 가까운 <SimpleContext.Provider>에 의해 제공된 컨텍스트 값을 찾아 contextData 변수에 할당합니다.
  contextData는 아마도 SimpleContext.Provider에서 value prop으로 전달된 객체다.
   */
  const contextData = useContext(SimpleContext);
  return(
    <div>
      <h4>Context2a 컴포넌트</h4>
      {/**
       * contextData 변수의 값을 화면에 표시합니다. 이 부분에서 contextData가 어떤 타입의 값인지가 중요합니다. 만약 SimpleContext가 문자열, 숫자 등의 기본형 데이터를 제공한다면 그대로 렌더링될 것입니다. 하지만 객체나 배열이라면 예상과 다른 결과가 나올 수 있습니다.
       */}
      {contextData}
    </div>
  );
}

export default CompContext2a