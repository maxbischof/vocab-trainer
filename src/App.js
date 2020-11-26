import { useState } from 'react'
import { Route } from 'react-router-dom'
import { useFirestore } from './hooks/firebase'
import Test from './components/Test'
import TestCreator from './components/TestCreator'
import Results from './components/Results'

function App() {
  const [windowlostFocus, setwindowlostFocus] = useState()
  const firestore = useFirestore()

  // document.addEventListener('blur', () => setwindowlostFocus(true))
  // document.addEventListener('visibilitychange', () => setwindowlostFocus(true))

  return (
    <div className="App">
      <Route exact path="/">
        <TestCreator db={firestore}>Form</TestCreator>
      </Route>

      {firestore && (
        <>
          <Route path="/tests/:testID">
            {!windowlostFocus && <Test db={firestore} />}
            {windowlostFocus && <div>Lost Focus</div>}
          </Route>
          <Route path="/results/:testID">{<Results db={firestore} />}</Route>
        </>
      )}
    </div>
  )
}

export default App
