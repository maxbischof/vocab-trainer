import { useState } from 'react'
import Test from './components/Test'
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
        {!windowlostFocus && <Test />}
        {windowlostFocus && <div>Lost Focus</div>}
      </Route>
    </div>
  )
}

export default App
