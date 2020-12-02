import React from 'react'
import styled from 'styled-components'

export default function Selection({ text, active, color, diameter, onClick }) {
  const activeColor = color.substring(0, color.length - 2) + '0.44)'
  const borderSize = (parseInt(diameter) * 1.5 - parseInt(diameter)) / 2
  const fontSize = parseInt(diameter) / 2

  return (
    <Circle
      active={active}
      color={color}
      activeColor={activeColor}
      diameter={diameter}
      borderSize={borderSize}
      fontSize={fontSize}
      onClick={() => onClick(text)}
    >
      {text}
    </Circle>
  )
}

const Circle = styled.div`
  height: ${(props) => props.diameter};
  width: ${(props) => props.diameter};
  margin: 5px 0;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  display: grid;
  align-content: center;
  justify-content: center;
  font-weight: 700;
  font-size: ${(props) => props.fontSize + 'px'};
  background-clip: padding-box;
  border: ${(props) =>
    props.active
      ? props.borderSize + 'px solid ' + props.activeColor + ';'
      : ''};
  cursor: pointer;
`
