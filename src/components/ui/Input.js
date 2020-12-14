import React from 'react'
import styled from 'styled-components'

const Input = React.forwardRef(
  ({ name, type, placeholder, onChange, value, error }) => (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      error={error}
    ></StyledInput>
  )
)

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--text);
  border-radius: 0;
  padding: 5px;
  margin: 10px 0 10px 0;
  ${(props) =>
    props.error &&
    props.error === props.name &&
    'border: 2px solid var(--error)'}
`

export default Input
