import React from 'react'
import Link from './Link'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Link href="/">URL</Link>
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
