import Axios from 'axios'
import { useEffect } from 'react'
import { evaluate } from '../lib/evaluation'

export default function Evaluation({ words, answers, name, testID }) {
  let result = 0
  const maxResult = words.length

  words.forEach((word, index) => {
    result += evaluate(word.foreign, answers[index])
  })

  useEffect(() => {
    const resultObject = { result: result, testID: testID, name: name }
    Axios.post('/result', resultObject).then((res) => console.log(res))
  }, [name, result, testID])

  return (
    <h2>
      Du hast {result} / {maxResult} Punkten erreicht.
    </h2>
  )
}
