import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Pages
import HomeIndex from './pages/home';
import SuccessIndex from './pages/home/success';
import ErrorIndex from './pages/home/error';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeIndex/>}/>
        {/* <Route path="/quotes" exact element={<Quoters/>}/>
        <Route path="/quoter-register" exact element={<QuoterRegister/>}/> */}
        <Route path="/success" exact element={<SuccessIndex/>}/>
        <Route path="/error" exact element={<ErrorIndex/>}/>
      </Routes>
    </Router>
  )
}

export default App
