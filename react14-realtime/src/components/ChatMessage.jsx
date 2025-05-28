import { useSearchParams } from "react-router-dom";
import { realtime } from "../realtimeConfig";
import { ref, push, child, set, onValue } from "firebase/database";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const scrollTop = (chatWindow) =>{
  console.log('scrollTop 호출됨');
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function ChatMessage() {
  //쿼리스트링으로 전달된 파라미터를 조작할때 사용하는 라우터 훅 
  const [searchParams, setSearchParams] =useSearchParams();
  console.log(setSearchParams);
  //2개의 파라미터를 읽어온다. 
  const roomId = searchParams.get('roomId');
  const userId = searchParams.get('userId');
  //채팅내역이 보여지는 부분의 DOM 참조 
  const chatWindow = useRef();

  //채팅 데이터 저장용 State 
  const [chatData, setChatData] = useState('');

  //Realtime에 대화내역 저장 
  function messageWrite(chatRoom, chatId, chatMessage) {
    //고유키 생성
    const newPostKey = push(child(ref(realtime), 'tempValue')).key;
    //'방명' 하위에 '고유키'로 구분하여 대화내역을 입력 
    set(ref(realtime, chatRoom + '/' + newPostKey),{
      id: chatId,
      message: chatMessage
    });
    console.log('입력성공');
  }

  //Realtime 리스너 정의 
  const dbRef = ref(realtime, roomId);
  useEffect(()=>{
    onValue(dbRef, (snapshot)=>{
      let showDiv = [];
      snapshot.forEach((childSanpshot) =>{
        // const childKey = childSanpshot.key;
        const childData = childSanpshot.val();
        // console.log("리스너", childKey, childData.id, userId);
        if (chatData.id ===userId) {
          showDiv.push(<div className="myMsg"
            style={{'textAlign':'right'}}>{chatData.message}</div>
          );
        } else {
          showDiv.push(<div>{childData.message}</div>)
        }
        scrollTop(chatWindow.current);
      });
      setChatData(showDiv);
    })
  }, []);

  return(<>
    <div className="App">
      <h2>Realtime 채팅</h2>
      대화명 : {userId} &nbsp;&nbsp;
      <button id="closeBtn" onClick={()=>{window.self.close();}}>체팅종료</button>
      <div id="chatWindow" ref={chatWindow}>
        {chatData}
      </div>
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          let chatRoom = e.target.chatRoom.value;
          let chatId = e.target.chatId.value;
          if (chatId==='') {
            alert('대화명을 입력하세요');
            return;
          }
          let message = e.target.message.value;
          if (message==='') {
            alert('메세지를 입력하세요');
            return;
          }
          console.log('submit', chatRoom, chatId, message);
          //입력한 폼값을 정리해서 Realtime에 입력 
          messageWrite(chatRoom, chatId, message);
          //입력이 완료되면 <input>을 비워준다. 
          e.target.message.value = '';
        }}>
          <input type="hidden" name="chatRoom" value={roomId} />
          <input type="hidden" name="chatId" value={userId} />
          <input type="text" name="message" />
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  </>);
}

export default ChatMessage