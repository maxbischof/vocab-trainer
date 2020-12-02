import React from 'react'
import Selection from './Selection'

export default function GrammarSubMenu({ wordClass }) {
  return (
    <>
      {wordClass === 'N' && (
        <>
          <Selection
            text="m"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
          />
          <Selection
            text="f"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
          />
          <Selection
            text="n"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
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
          />
          <Selection
            text="Pl"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
          />
          <Selection
            text="m"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
          />
          <Selection
            text="f"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
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
          />
          <Selection
            text="Pl"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
          />
          <Selection
            text="1"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
          />
          <Selection
            text="2"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
          />
          <Selection
            text="3"
            active={false}
            color="rgba(255, 51, 210, 1)"
            diameter="43px"
          />
        </>
      )}
    </>
  )
}
