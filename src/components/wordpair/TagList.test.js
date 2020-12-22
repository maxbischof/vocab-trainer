import React from 'react'
import TagList from './TagList'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tags = {
    wordClass: 'Substantiv',
    gender: 'Maskulin',
    number: 'plural',
    person: '1. Person',
  }
  const tree = renderer.create(<TagList tags={tags} />).toJSON()
  expect(tree).toMatchSnapshot()
})
