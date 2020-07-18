const lettersPattern = /\p{Alphabetic}+/ug
const scriptsRanges = require('./scripts_ranges')

module.exports = text => {
  const textLetters = text.match(lettersPattern).join('')

  const textBlocks = {}
  for (let i = 0; i < textLetters.length; i++) {
    const charCode = textLetters.charCodeAt(i)
    const block = findBlock(charCode)
    if (block) {
      const { label } = block
      textBlocks[label] = textBlocks[label] || 0
      textBlocks[label] += 1
    }
  }

  return Object.keys(textBlocks).map(label => ({ label, count: textBlocks[label] }))
}

const findBlock = charCode => {
  return scriptsRanges.find(({ ranges }) => {
    return ranges.find(range => {
      return charCode >= range[0] && charCode <= range[1]
    })
  })
}
