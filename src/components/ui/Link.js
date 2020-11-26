import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export default function Link({ href, children }) {
  return <StyledLink to={href}>{children}</StyledLink>
}

const StyledLink = styled(RouterLink)`
  color: var(--text);
  text-decoration: none;
  border-bottom: 1px solid var(--text);
  margin: 10px;
  font-weight: 700;
  a:visited {
    color: var(--text);
  }
`
