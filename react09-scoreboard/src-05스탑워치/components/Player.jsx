import React from "react";
import Counter from './Counter';

export default function Player(props) {
  let row = props.playerData;
  return (<>
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => { 
          if(window.confirm('삭제할까요?')){
            props.onDeletePlayer(row.idx);
          }
        }}> x </button>
        {row.name}
      </span>

      {/* App컴포넌트에서 전달받은 점수변경 함수를 자식 컴포넌트로 전달 */}
      <Counter idx={row.idx} score={row.score} 
        onChangeScore={props.onChangeScore} />
    </div>
  </>);
}