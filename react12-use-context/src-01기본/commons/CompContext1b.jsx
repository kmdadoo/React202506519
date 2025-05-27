/**
 * .CompContext2b 경로에 있는 CompContext2b 컨텍스트 객체를 가져옵니다.
 */
import CompContext2b from "./CompContext2b";

const CompContext1b = () =>{
  return(
    <div>
      <h4>Context1b 콤포넌트</h4>
      <CompContext2b />
    </div>
  );
}

export default CompContext1b;