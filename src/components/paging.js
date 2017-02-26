export default (current, length, displayLength) => {
  if (length <= 1) return []
  displayLength = displayLength - 2
  var indexes = [1]
  var start = Math.round(current - displayLength / 2)
  var end = Math.round(current + displayLength / 2)
  if (start <= 1) {
    start = 2
    end = start + displayLength - 1
    if (end >= length - 1) end = length - 1
  }
  if (end >= length - 1) {
    end = length - 1
    start = end - displayLength + 1
    if (start <= 1) start = 2
  }
  if (start !== 2) indexes.push('...')
  for (var i = start; i <= end; i++) {
    indexes.push(i)
  }
  if (end !== length - 1) indexes.push('...')
  indexes.push(length)
  return indexes
}
