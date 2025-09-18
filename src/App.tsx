import { useState } from 'react'
import './App.css'
import BinarySearchForm from './components/BinarySearchForm'
import BynarySearchResult from './components/BinarySerachResult'

function App() {
  const [results, setResults] = useState({
    result: false,
    position: 0,
  });

  return (
    <div style={{padding: '20px'}}>
      <h1>BUSQUEDA BINARIA Y POSICION</h1>
      <BinarySearchForm
        onBynarySearch={(result: boolean, position: number) => setResults({ result, position })}
      />
      <BynarySearchResult result={results.result} position={results.position}/>
    </div>
  )
}

export default App
