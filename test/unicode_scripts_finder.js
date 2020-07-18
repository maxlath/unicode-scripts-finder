require('should')
const unicodeScriptsFinder = require('../lib/unicode_scripts_finder')

describe('unicode-scripts-finder', () => {
  it('should be a function', () => {
    unicodeScriptsFinder.should.be.a.Function()
  })

  it('should find Latin script', () => {
    unicodeScriptsFinder('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.').should.deepEqual([
      { label: 'Latin', count: 370 }
    ])
  })

  it('should find Greek script', () => {
    unicodeScriptsFinder('ἀπόστασις').should.deepEqual([
      { label: 'Greek', count: 9 }
    ])
  })

  it('should find hybrid script', () => {
    unicodeScriptsFinder('Lorem ipsum ἀπόστασις').should.deepEqual([
      { label: 'Latin', count: 10 },
      { label: 'Greek', count: 9 }
    ])
  })
})
