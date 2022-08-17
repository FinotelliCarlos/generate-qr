import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as Screen from '../screens'

export function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screen.Home />} />
      </Routes>
    </BrowserRouter>
  )
}