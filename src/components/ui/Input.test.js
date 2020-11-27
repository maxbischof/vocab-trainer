import React from 'react'
import Input from './Input'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Input name="word" type="text" placeholder="Type here" value="" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
