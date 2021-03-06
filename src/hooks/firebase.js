import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

export function useFirestore() {
  const [db, setDB] = useState()

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

    firebase.initializeApp(firebaseConfig)

    setDB(firebase.firestore())
  }, [])

  return db
}

export function useTest(db, testID) {
  const [words, setWords] = useState()

  useEffect(() => {
    const testDoc = db.collection('tests').doc(testID)

    testDoc
      .get()
      .then((doc) => {
        if (doc.exists) {
          setWords(doc.data().words)
        } else {
          console.log('No such document!')
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error)
      })
  }, [testID, db])

  return words
}
