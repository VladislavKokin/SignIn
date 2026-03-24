import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Validation from './autorization/validation.jsx'
import Autorization from './autorization/yup.jsx'
import Form from './autorization/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Validation />
    {/* <Autorization /> */}
    {/* <Form /> */}
  </StrictMode>,
)
