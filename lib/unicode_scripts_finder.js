const scriptsCodes = require('./scripts_codes')
const getScriptData = require('./get_script_data')
const isntNull = data => data != null
const scriptsData = scriptsCodes.map(getScriptData).filter(isntNull)
const lettersPattern = /\p{Alphabetic}+/ug

module.exports = text => {
  const textLetters = text.match(lettersPattern).join('')
  const data = []
  let foundChars = 0
  for (const scriptData of scriptsData) {
    const { code, pattern } = scriptData
    matchingChars = text.match(pattern)
    if (matchingChars != null) {
      foundChars += matchingChars.length
      data.push({ code, count: matchingChars.length })
      if (foundChars === textLetters.length) return data
    }
  }
  return data
}
