import React from 'react'
import Selection from './Selection'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Selection text="A" active={true} color="rgba(43, 173, 134, 1)" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
