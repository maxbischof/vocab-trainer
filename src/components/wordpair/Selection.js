import React from 'react'
import styled from 'styled-components'

export default function Selection({ text, active, color, diameter }) {
  const activeColor = color.substring(0, color.length - 2) + '0.44)'
  return (
    <Circle
      active={active}
      color={color}
      activeColor={activeColor}
      diameter={diameter}
    >
      {text}
    </Circle>
  )
}

const Circle = styled.div`
  height: ${(props) => props.diameter};
  width: ${(props) => props.diameter};
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  display: grid;
  align-content: center;
  justify-content: center;
  font-weight: 700;
  font-size: 36px;
  background-clip: padding-box;
  border: ${(props) =>
    props.active ? '16px solid ' + props.activeColor + ';' : ''};
  cursor: pointer;
`
