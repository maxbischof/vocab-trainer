import React from 'react'
import CircleButton from '../CircleButton'
import Column from './Column'

export default function NounMenu({ gender, setGender }) {
  return (
    <Column>
      <CircleButton
        text="m"
        color="var(--masculine)"
        diameter="43px"
        activeProperty={gender}
        onClick={setGender}
      />
      <CircleButton
        text="f"
        color="var(--feminine)"
        diameter="43px"
        activeProperty={gender}
        onClick={setGender}
      />
      <CircleButton
        text="n"
        color="var(--neuter)"
        diameter="43px"
        activeProperty={gender}
        onClick={setGender}
      />
    </Column>
  )
}
