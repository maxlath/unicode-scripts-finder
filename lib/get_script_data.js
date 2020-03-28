module.exports = code => {
  try {
    const pattern = new RegExp(`\\p{Script=${code}}{1}`, 'ug')
  } catch (err) {
    if (err.name === 'SyntaxError') console.warn('unicode script not supported', code)
    else throw err
  }

  return { code, pattern }
}
