import React from 'react'
import styled from 'styled-components'

export default function CircleButton({
  text,
  activeProperty,
  color,
  diameter,
  onClick,
}) {
  const borderSize = (parseInt(diameter) * 1.5 - parseInt(diameter)) / 2
  const fontSize = parseInt(diameter) / 2

  return (
    <Circle
      active={activeProperty === text ? true : false}
      color={color}
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
  background-color: rgba(${(props) => props.color}, 1);
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
      ? props.borderSize + 'px solid rgba(' + props.color + ', 0.44);'
      : '0px solid white'};
  cursor: pointer;
  transition: border 0.5s;
`
