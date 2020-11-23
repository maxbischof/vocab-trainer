export function evaluate(reference, answer) {
  let points = 0
  const referenceCharacters = reference.toLowerCase().trim().split('')
  const answerCharacters = answer.toLowerCase().trim().split('')

  if (referenceCharacters === answerCharacters) return 1

  if (referenceCharacters.length === answerCharacters.length) {
    let equalityCounter = 0

    referenceCharacters.forEach((character, index) => {
      character === answerCharacters[index] && equalityCounter++
    })

    if (equalityCounter === referenceCharacters.length) {
      points = 1
    } else if (equalityCounter >= referenceCharacters.length - 1) {
      points = 0.5
    }
  } else if (referenceCharacters.length - answerCharacters.length === 1) {
    referenceCharacters.forEach((character, index) => {
      const reducedReference = [...referenceCharacters]
      reducedReference.splice(index, 1)
      if (arrayEquals(reducedReference, answerCharacters)) points = 0.5
    })
  } else if (referenceCharacters.length - answerCharacters.length === -1) {
    answerCharacters.forEach((character, index) => {
      const reducedAnswer = [...answerCharacters]
      reducedAnswer.splice(index, 1)
      if (arrayEquals(reducedAnswer, referenceCharacters)) points = 0.5
    })
  }

  return points
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  )
}
