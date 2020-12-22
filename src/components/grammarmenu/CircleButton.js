import React from 'react'
import styled from 'styled-components'

export default function CircleButton({
  text,
  activeProperty,
  color,
  diameter,
  onClick,
}) {
  const fontSize = parseInt(diameter) / 6
  const active = activeProperty === text

  return (
    <Circle
      active={active}
      color={color}
      diameter={diameter}
      fontSize={fontSize}
      onClick={() => (active ? onClick('') : onClick(text))}
    >
      {text}
    </Circle>
  )
}

const Circle = styled.div`
  height: ${(props) => props.diameter};
  width: ${(props) => props.diameter};
  background-color: rgba(${(props) => props.color}, 0.8);
  border-radius: 50%;
  display: inline-block;
  display: grid;
  align-content: center;
  justify-content: center;
  font-weight: 700;
  font-size: ${(props) => props.fontSize + 'px'};
  background-clip: padding-box;
  cursor: pointer;
  ${(props) =>
    props.active && 'border: 5px solid rgba(' + props.color + ', 1);'}
`
