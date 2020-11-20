import Exercise from './components/Exercise'
import { useContent } from './hooks/contentful'

function App() {
  const words = useContent('word')
  return <div className="App">{words && <Exercise words={words} />}</div>
}

export default App
