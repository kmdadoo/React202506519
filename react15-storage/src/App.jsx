import { deleteObject, listAll, ref } from 'firebase/storage';
import './App.css'
import { storage } from './storageConfig'
import { useEffect, useState } from 'react';

function App() {
  //스토리지 연결 및 참조 생성
  const listRef = ref(storage, '');
  //파일목록 및 삭제후 전체렌더링
  const [fileLists, setFileLists] = useState([]);
  const [renderFlag, setRenderFlag] = useState(false);

  useEffect(()=>{
    let fileRows = [];
    //생성된 참조에서 모든 폴더와 파일명 인출 
    listAll(listRef)
      .then((res) => {
        //폴더명 출력 
        res.prefixes.forEach((folderRef) =>{
          console.log('폴더', folderRef);
        });
        //파일목록 출력 
        res.items.forEach((itemRef) =>{
          //이미지 참조를 얻어온다.
          const deleteRef = ref(storage, itemRef.fullPath);

          //파일 목록 추가
          fileRows.push(
            <tr key={itemRef.name}>
              <td>{itemRef.bucket}</td>
              <td>{itemRef.fullPath}</td>
              <td>{itemRef.name}</td>
              <td>
                <button type='button' onClick={(e)=>{
                  if(window.confirm('삭제할까요?')) {
                    deleteObject(deleteRef).then(()=>{
                      console.log("파일 삭제 성공",e);
                      setRenderFlag(!renderFlag);
                    })
                    .catch((error)=>{
                      console.log("파일 삭제실패", error);
                    });
                  }
                }}>삭제</button>
              </td>
            </tr>
          );
        });

        //완성된 파일목록을 통해 State 변경
        setFileLists(fileRows);
      })
      .catch((error) =>{
        console.log('에러발생' , error);
      });
  }, [renderFlag]);

  console.log('렌더링')

  return (
    <div className='App'>
      <h2>Firebase - Storage App</h2>
      <h3>파일 목록 및 이미지 다운로드</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>burket</th>
            <th>fullPath</th>
            <th>name</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {fileLists}
        </tbody>
      </table>
    </div>
  )
}

export default App