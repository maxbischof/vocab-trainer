export async function createTest(words, db, setTestURL) {
  let isUnique = false
  let i = 0

  while (isUnique === false && i < 10) {
    const testID = Math.floor(Math.random() * 1000000).toString()
    i++
    isUnique = await db
      .collection('tests')
      .doc(testID)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return false
        } else {
          return true
        }
      })

    isUnique && addToFirebase(words, testID, db, setTestURL)
  }
}

function addToFirebase(words, testID, db, setTestURL) {
  db.collection('tests')
    .doc(testID)
    .set({ words })
    .then(() => {
      setTestURL('/tests/' + testID)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}
