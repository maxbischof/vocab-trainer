import { evaluate } from '../lib/evaluation'

export default function Evaluation({ words, answers }) {
  let result = 0
  const maxResult = words.length

  words.forEach((word, index) => {
    result += evaluate(word.foreign, answers[index])
  })

  return (
    <h2>
      Du hast {result} / {maxResult} Punkten erreicht.
    </h2>
  )
}
