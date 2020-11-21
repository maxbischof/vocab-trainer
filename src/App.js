import { useState } from 'react'
import Exercise from './components/Exercise'
import { useContent } from './hooks/contentful'
import { Route } from 'react-router-dom'
import TestCreator from './components/TestCreator'

function App() {
  const words = useContent('word')
  const [windowlostFocus, setwindowlostFocus] = useState()

  document.addEventListener('blur', () => setwindowlostFocus(true))
  document.addEventListener('visibilitychange', () => setwindowlostFocus(true))

  return (
    <div className="App">
      <Route exact path="/">
        <TestCreator>Form</TestCreator>
      </Route>
      <Route path="/exercise">
        {words && !windowlostFocus && <Exercise words={words} />}
        {windowlostFocus && <div>Lost Focus</div>}
      </Route>
    </div>
  )
}

export default App
