import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

/**
라우터 설정을 위해 최상위 컴포넌트인 <app>을 BrowserRouter 컴포넌트로
감싸준다. 이 설정은 main.jsx에서 아래와 같이 할수도있고, App.jsx에서
해도된다. 
 */
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
