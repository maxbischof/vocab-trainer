import React from 'react'
import TestLink from './TestLink'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const testURL = '/tests/123456'
  const tree = renderer
    .create(
      <Router>
        <TestLink testURL={testURL} />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
