import React from 'react'
import WordPair from './WordPair'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const grammar1 = {
    wordClass: 'Verb',
    gender: 'Feminin',
    number: 'Singular',
    person: '2. Person',
  }

  const wordpair = {
    foreign: 'le ordinateur',
    native: 'der Computer',
    grammar: grammar1,
  }

  const tree = renderer.create(<WordPair word={wordpair} />).toJSON()
  expect(tree).toMatchSnapshot()
})
