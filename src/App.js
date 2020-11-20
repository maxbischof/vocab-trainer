import { useContent } from './hooks/contentful'

function App() {
  const words = useContent('word')

  return (
    <div className="App">
      <h1>jksd</h1>
    </div>
  )
}

export default App
