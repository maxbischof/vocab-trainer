import React from 'react'
import Selection from './Selection'

export default function GrammarSubMenu({
  wordClass,
  gender,
  setGender,
  person,
  setPerson,
  number,
  setNumber,
}) {
  return (
    <>
      {wordClass === 'N' && (
        <>
          <Selection
            text="m"
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={gender}
            onClick={setGender}
          />
          <Selection
            text="f"
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={gender}
            onClick={setGender}
          />
          <Selection
            text="n"
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={gender}
            onClick={setGender}
          />
        </>
      )}
      {wordClass === 'A' && (
        <>
          <Selection
            text="Sg"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={number}
            onClick={setNumber}
          />
          <Selection
            text="Pl"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={number}
            onClick={setNumber}
          />
          <Selection
            text="m"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={gender}
            onClick={setGender}
          />
          <Selection
            text="f"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={gender}
            onClick={setGender}
          />
        </>
      )}
      {wordClass === 'V' && (
        <>
          <Selection
            text="Sg"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={number}
            onClick={setNumber}
          />
          <Selection
            text="Pl"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={number}
            onClick={setNumber}
          />
          <Selection
            text="1"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={person}
            onClick={setPerson}
          />
          <Selection
            text="2"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={person}
            onClick={setPerson}
          />
          <Selection
            text="3"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
            activeProperty={person}
            onClick={setPerson}
          />
        </>
      )}
    </>
  )
}
