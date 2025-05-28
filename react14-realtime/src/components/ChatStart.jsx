import { useRef } from "react";
import Navi from "./Navi";

const ChatStart =()=>{
  //<input>태그의 DOM을 활용하기 위해 useRef훅 생성 
  const refRoom = useRef();
  const refId = useRef();

  //open함수를 통해 채팅창을 팝업으로 열어준다.
  const openChatWin = () =>{
    /**  
    open() : JS에서 새로운 팝업창을 열때 사용하는 함수
      팝업창으로 <ChatMessage>컴포넌트를 렌더링한다. 
    */
    window.open(`/chat/talk?roomId=${refRoom.current.value}&userId=${refId.current.value}`, '', 'width=500, height=700');
  }

  return (<>
    <div className="App">
      <Navi />
      <h2>Firebase - Realtime Database Chatting</h2>
      {/* <input>태그에 앞에서 생성한 ref변수를 추가하여 DOM에 접근한다. */}
      방명 : <input type="text" name="roomId" defaultValue="room1" ref={refRoom} /><br/>
      대화명 : <input type="text" name="userId" ref={refId} /><br/>
      <button type="button" onClick={openChatWin}>채팅시작</button>
    </div>
  </>);
}

export default ChatStart