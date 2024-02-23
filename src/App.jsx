import { Header } from './components/Header'
import {Contador} from './components/Contador'
import {Lista} from './components/Lista'
import './App.css'

function App() {
  return (
    <>
      <main className='container'>
        <Header title="Projeto React" subTitle="Procedimento"/>
        <Contador/>
        <Lista/>
      </main>
    </>
  )
}

export default App
