'use strict'

module.exports = function imageUrl (url) {
  url = String(url).replace(/"/g, '\\"')
  return 'url("' + url + '")'
}
