import { Header } from './components/Header'
import {Footer} from './components/Footer'
import Router from './Router'
import './App.css'

function App() {
  return (
    <>

      <Header title="Projeto React" subTitle="Procedimento"/>
      <Router />
      <Footer/>
    </>
  )
}

export default App
