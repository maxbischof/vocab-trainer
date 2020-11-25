import { useState } from 'react'
import Test from './components/Test'
import { Route } from 'react-router-dom'
import TestCreator from './components/TestCreator'
import Results from './components/Results'
import { useFirestore } from './hooks/firebase'

function App() {
  const [windowlostFocus, setwindowlostFocus] = useState()
  const firestore = useFirestore()

  document.addEventListener('blur', () => setwindowlostFocus(true))
  document.addEventListener('visibilitychange', () => setwindowlostFocus(true))

  return (
    <div className="App">
      <Route exact path="/">
        <TestCreator db={firestore}>Form</TestCreator>
      </Route>
      <Route path="/tests/:testID">
        {!windowlostFocus && firestore && <Test db={firestore} />}
        {windowlostFocus && <div>Lost Focus</div>}
      </Route>
      <Route path="/results/:testID">
        {firestore && <Results db={firestore} />}
      </Route>
    </div>
  )
}

export default App
