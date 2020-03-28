const scriptsCodes = require('./scripts_codes')
const getScriptData = require('./get_script_data')
const isntNull = data => data != null
const scriptsData = scriptsCodes.map(getScriptData).filter(isntNull)
const lettersPattern = /\p{Alphabetic}+/ug

module.exports = text => {
  const textLetters = text.match(lettersPattern).join('')
  const data = []
  scriptsData.forEach(({ code, pattern }) => {
    matchingChars = text.match(pattern)
    if (matchingChars != null) data.push({ code, count: matchingChars.length })
  })
  return data
}
