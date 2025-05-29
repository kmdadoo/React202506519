import { initializeApp } from "firebase/app";
//storage 임포트
import { getStorage } from "firebase/storage";

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
/** Storage의 참조를 얻어올때는 아래와 같이 참조URL이 설정되어야 한다. */
const storage = getStorage(app, "gs://myreactapp01-dd786.firebasestorage.app");
// 익스포트
export { storage };