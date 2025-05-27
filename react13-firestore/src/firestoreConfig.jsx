//Firebase에서 생성한 API정보를 저장해 놓은 파일 

//파이어베이스 초기화, 사용을 위한 함수 임포트 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 본인의 API Key와 관련 정보(.env파일 생성 전)
// const firebaseConfig = {
//   apiKey: "당신의 것을 넣어주세요",
//   authDomain: "myreactapp01-dd786.firebaseapp.com",
//   databaseURL: "https://myreactapp01-dd786-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "myreactapp01-dd786",
//   storageBucket: "myreactapp01-dd786.firebasestorage.app",
//   messagingSenderId: "803303172779",
//   appId: "1:803303172779:web:89d0ef3341c82f5021e5ee",
//   measurementId: "G-C10FV5NYH2"
// };

//.env 파일 생성 후 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

//파이어베이스 앱 초기화 
const app = initializeApp(firebaseConfig);
//파이어스토어 객체 생성 및 내보내기 
const firestore = getFirestore(app);
export { firestore };