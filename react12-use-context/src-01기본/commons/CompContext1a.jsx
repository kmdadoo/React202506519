/**
 * CompContext2a 경로에 있는 CompContext2a 컨텍스트 객체를 가져옵니다.
 */
import CompContext2a from "./CompContext2a"; 

const CompContext1a = () =>{
  return(
    <div>
      <h4>Context1a 콤포넌트</h4>
      <CompContext2a />
    </div>
  );
}

export default CompContext1a;