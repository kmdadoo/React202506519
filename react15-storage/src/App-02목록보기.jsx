import { getDownloadURL, listAll, ref } from 'firebase/storage';
import './App.css'
import { storage } from './storageConfig'
import { useEffect, useState } from 'react';

function App() {
  //스토리지 연결 및 root경로로 참조 생성 
  const listRef = ref(storage, '');
  //파일목록에 대한 State생성 
  const [fileLists, setFileLists] = useState([]);
  

  //1차 렌더링 완료 후 파일목록을 비동기로 가져온다.
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
          console.log('파일명', itemRef.name);

          //파일의 다운로드 URL을 비동기로 가져온다. 파일명을 통해 참조를 생성한다.
          getDownloadURL(ref(storage, itemRef.name))
            .then((url) =>{
              //파일목록이 모두 출력된 후 이 부분이 실행된다. 
              console.log('파일 URL 다운로드');
              //<img>에 부여된 id를 통해 DOM을 얻어온다. 
              const img = document.getElementById(`img_${itemRef.name}`);
              //<img>의 src, width속성을 부여한다. 
              img.setAttribute('src', url);
              img.setAttribute('width', '200');
            })
            .catch((error) => {
              console.log('이미지 다운로드 중 에러', error);
            });

          //파일을 목록 생성. 최초 생성시에는 <img>에 src속성 없음. 
          fileRows.push(
            <tr key={itemRef.name}>
              <td>{itemRef.bucket}</td>
              <td>{itemRef.fullPath}</td>
              <td>{itemRef.name}</td>
              <td><img id={`img_${itemRef.name}`} alt='' /></td>
            </tr>
          );
        });

        //완성된 파일목록을 통해 State 변경
        setFileLists(fileRows);
      })
      .catch((error) =>{
        console.log('파일 목록 출력중 에러발생' , error);
      });
  }, []);

  console.log('렌더링');

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
            <th>이미지</th>
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