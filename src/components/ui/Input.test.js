import React from 'react'
import Input from './Input'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Input name="word" type="text" placeholder="Type here" value="" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with error', () => {
  const tree = renderer
    .create(
      <Input
        name="word"
        type="text"
        placeholder="Type here"
        value=""
        error="word"
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
