import React from 'react'
import Task from './Task'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const word = { foreign: 'le ordinateur', native: 'der Computer' }
  const tree = renderer.create(<Task word={word} />).toJSON()
  expect(tree).toMatchSnapshot()
})
