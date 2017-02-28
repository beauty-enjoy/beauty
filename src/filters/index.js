const Base64 = require('js-base64').Base64
export function formatDateTime (date) {
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  var minute = date.getMinutes()
  minute = minute < 10 ? ('0' + minute) : minute
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute
}
export function formatLocation (location = '') {
  return location.replace('常居:', '')
}
export function doubleBase64 (str = '') {
  return Base64.encode(Base64.encode(str))
}
export function http2https (url) {
  return url.replace('http://', 'https://')
}
