import { useState } from 'react'
import Exercise from './components/Exercise'
import { Route } from 'react-router-dom'
import TestCreator from './components/TestCreator'

function App() {
  const [windowlostFocus, setwindowlostFocus] = useState()

  document.addEventListener('blur', () => setwindowlostFocus(true))
  document.addEventListener('visibilitychange', () => setwindowlostFocus(true))

  return (
    <div className="App">
      <Route exact path="/">
        <TestCreator>Form</TestCreator>
      </Route>
      <Route path="/tests/:testID">
        {!windowlostFocus && <Exercise />}
        {windowlostFocus && <div>Lost Focus</div>}
      </Route>
    </div>
  )
}

export default App
