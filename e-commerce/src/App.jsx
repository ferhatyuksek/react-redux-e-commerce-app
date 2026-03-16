import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
function App() {

  return (
    <>
    <Header></Header>
    <hr style={{margin:"0px"}}/>
    <RouterConfig></RouterConfig>
    </>
  )
}

export default App
