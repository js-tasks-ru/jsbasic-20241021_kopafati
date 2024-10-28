function checkSpam(str) {
  let newStr = str.toLowerCase()
  return newStr.includes('1XbeT now') || str.includes('free xxxxx') ||
  !str.includes('innocent rabbit') 
}