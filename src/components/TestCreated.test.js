import React from 'react'
import TestCreated from './TestCreated'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const testURL = '/tests/123456'
  const tree = renderer
    .create(
      <Router>
        <TestCreated testURL={testURL} />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
