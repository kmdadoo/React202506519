import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import './App.css'
import { firestore } from './firestoreConfig';
import { useState } from 'react';

function App() {
  //검색 데이터 저장을 위한 State 
  const [showData, setShowData] = useState([]);

  //검색을 위한 함수. 검색필드와 검색어를 매개변수로 정의 
  const getCollection = async (sField, sStr) =>{
    console.log("선택", sField);

    let getRows = [];
    if (sField==='id') {
      //아이디를 통한 검색은 도큐먼트를 찾는것으로 검색하면된다. 
      const docRef = doc(firestore, "members", sStr);
      //참조값을 얻은 후 도큐먼트를 찾는다. 
      const docSnap = await getDoc(docRef);
      if (docSnap.exists) {
        console.log("Document data:", docSnap.data());
        //문서의 데이터를 변수에 저장한다. 
        getRows.push(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } else if (sField==='name') {
      //이름으로 검색하는 경우에는 where, query함수를 사용한다. 
      //컬렉션을 먼저 얻어온다. 
      const membersRef = collection(firestore, "members");
      console.log('membersRef', membersRef);
      //query함수를 통해 where(조건)에 맞는 데이터를 검색한다. 
      const q = query(membersRef, where("name", 'array-contains', sStr));
      const querySnapshot = await getDocs(q);
      console.log("Document data:", querySnapshot);
      //조건에 일치하는 도큐먼트는 2개 이상일 수 있으므로 반복한다. 
      querySnapshot.forEach((doc)=>{
        console.log("반복인출", doc.id, doc.data());
        getRows.push(doc.data());
      });
    } 

    //검색된 갯수만큼 <tr>태그를 추가한다. 
    let trArray = [];
    getRows.forEach((row) =>{
      trArray.push(
        <tr key={row.id}>
          <td className='cen'>{row.id}</td>
          <td className='cen'>{row.pass}</td>
          <td className='cen'>{row.name}</td>
          <td className='cen'>{row.regdate}</td>
        </tr>
      );
    });
    
    setShowData(trArray);
  }

  return (
    <div className='App'>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <h2>Firebase - Firestore 연동 App</h2>
      <h3>검색하기</h3>
      <form onSubmit={(e)=>{
        e.preventDefault();
        //폼값을 submit하면 입력값을 받은 후 검색을 위한 함수를 호출한다. 
        let sf = e.target.searchFiled.value;
        let ss = e.target.searchStr.value;
        getCollection(sf, ss);
      }}>
        <div className='input-group' id="myForm">
          <select name="searchFiled" className='form-control'>
            <option value="id">아이디</option>
            <option value="name">이름</option>
          </select>
          <input type='text' name='searchStr' className='form-control' />
          <button type='submit' className='btn btn-secondary'>전체조회</button>
        </div>
        <table className='table table-bordered'>
          <thead>
            <tr className='text-center'>
              <th>아이디</th><th>비밀번호</th><th>이름</th><th>가입일</th>
            </tr>
          </thead>
          <tbody>
            {showData}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default App