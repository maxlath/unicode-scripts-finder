require('should')
const unicodeScriptsFinder = require('../lib/unicode_scripts_finder')

describe('unicode-scripts-finder', () => {
  it('should be a function', () => {
    unicodeScriptsFinder.should.be.a.Function()
  })

  it('should find Latin script', () => {
    const res = unicodeScriptsFinder('hello')
    res.should.deepEqual([
      { label: 'Latin', count: 5 }
    ])
  })

  it('should find Greek script', () => {
    const res = unicodeScriptsFinder('ἀπόστασις')
    res.should.deepEqual([
      { label: 'Greek', count: 9 }
    ])
  })
})
