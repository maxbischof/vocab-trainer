import React from 'react'
import renderer from 'react-test-renderer'
import CircleButton from './CircleButton'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CircleButton text="A" active={true} color="rgba(43, 173, 134, 1)" />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
