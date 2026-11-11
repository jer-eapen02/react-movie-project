import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faTimes, faMagnifyingGlass);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
