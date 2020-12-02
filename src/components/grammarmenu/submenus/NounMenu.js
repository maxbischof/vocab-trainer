import React from 'react'
import styled from 'styled-components'
import CircleButton from '../CircleButton'

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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 15px;
  width: 63px;
`
