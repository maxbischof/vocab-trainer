import React from 'react'
import List from './List'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const grammar1 = {
    wordClass: 'Substantiv',
    gender: 'Maskulin',
    number: 'plural',
    person: '1. Person',
  }
  const grammar2 = {
    wordClass: 'Verb',
    gender: 'Feminin',
    number: 'Singular',
    person: '2. Person',
  }

  const words = [
    { foreign: 'le ordinateur', native: 'der Computer', grammar: grammar1 },
    { foreign: 'la école', native: 'die Schule', grammar: grammar2 },
  ]
  const tree = renderer.create(<List words={words} />).toJSON()
  expect(tree).toMatchSnapshot()
})
