import dbmnRef from 'firebase-api'
const dataRef = dbmnRef.child('data')

export function getKeys (cid = 0) {
  const child = cid === 0 ? 'keys' : `cid${cid}`
  return dataRef.child(child).orderByKey().limitToLast(500).once('value').then(snap => Object.keys(snap.val()))
}
export function getKeysbyAuthor (doubleBase64Author) {
  return dataRef.child(`authorname/${doubleBase64Author}`).orderByKey().once('value').then(snap => Object.keys(snap.val()))
}
export function getKeysbyLocation (doubleBase64Location) {
  return dataRef.child(`location/${doubleBase64Location}`).orderByKey().once('value').then(snap => Object.keys(snap.val()))
}

export function getItembyKey (key) {
  return dataRef.child('posts').orderByKey().equalTo(key).once('child_added')
    .then(snap => snap.val())
}
export function getItemsbyKeys (keys) {
  return Promise.all(keys.map(key => dataRef.child('posts').orderByKey().equalTo(key).once('child_added')
    .then(snap => Object.assign(snap.val(), { key: snap.key }))).reverse())
}
