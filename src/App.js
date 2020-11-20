import { useState } from 'react'
import Exercise from './components/Exercise'
import { useContent } from './hooks/contentful'

function App() {
  const words = useContent('word')
  const [windowlostFocus, setwindowlostFocus] = useState()

  document.addEventListener('blur', () => setwindowlostFocus(true))
  document.addEventListener('visibilitychange', () => setwindowlostFocus(true))

  return (
    <div className="App">
      {words && !windowlostFocus && <Exercise words={words} />}
      {windowlostFocus && <div>Lost Focus</div>}
    </div>
  )
}

export default App
