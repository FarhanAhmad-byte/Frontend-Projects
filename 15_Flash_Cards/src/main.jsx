import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { getData } from './index.js'

getData('/question.json')
.then( (data) => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App loadedData={data} />
    </StrictMode>,
  )

})
.catch( (err) => console.log(`${err}`))

