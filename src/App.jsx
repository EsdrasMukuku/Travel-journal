import Header from './components/Header'

import './App.css'
import Body from './components/Body'

function App() {
 

  return (
    <div className='w-[550px] h-[704px] flex flex-col justify-center self-center border-2 border-white pb-8 rounded shadow-lg' >
      <Header/>
      <Body/>
    </div>
  )
}

export default App
