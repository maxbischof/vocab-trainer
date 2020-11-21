import { useState } from 'react'
import Exercise from './components/Exercise'
import { useContent } from './hooks/contentful'
import { Route } from 'react-router-dom'

function App() {
  const words = useContent('word')
  const [windowlostFocus, setwindowlostFocus] = useState()

  document.addEventListener('blur', () => setwindowlostFocus(true))
  document.addEventListener('visibilitychange', () => setwindowlostFocus(true))

  return (
    <div className="App">
      <Route exact path="/">
        <h1>Form</h1>
      </Route>
      <Route path="/exercise">
        {words && !windowlostFocus && <Exercise words={words} />}
        {windowlostFocus && <div>Lost Focus</div>}
      </Route>
    </div>
  )
}

export default App
