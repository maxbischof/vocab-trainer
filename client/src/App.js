import { useEffect, useState } from 'react'
import Test from './components/Test'
import { Route } from 'react-router-dom'
import TestCreator from './components/TestCreator'
import Results from './components/Results'

import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'

function App() {
  const [windowlostFocus, setwindowlostFocus] = useState()

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyDjl0Vd5_hJbRnl7limNgAPFDa99TGGFfw',
      authDomain: 'vocab-trainer-16563.firebaseapp.com',
      databaseURL: 'https://vocab-trainer-16563.firebaseio.com',
      projectId: 'vocab-trainer-16563',
      storageBucket: 'vocab-trainer-16563.appspot.com',
      messagingSenderId: '403766925572',
      appId: '1:403766925572:web:1bdde5baeb1dbfd9845851',
      measurementId: 'G-6H3G49B6ED',
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()

    const db = firebase.firestore()

    db.collection('tests')
      .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
  })

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
      <Route path="/results/:testID">
        <Results />
      </Route>
    </div>
  )
}

export default App
