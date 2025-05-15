
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from './Components/Context/StoreContext.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
  </BrowserRouter>,
)
