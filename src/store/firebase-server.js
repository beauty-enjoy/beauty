import Firebase from 'firebase'
let dbmnRef
if (process.__dbmnRef__) {
  dbmnRef = process.__dbmnRef__
} else {
  Firebase.initializeApp({ databaseURL: 'https://beauty-ad056.firebaseio.com' })
  dbmnRef = process.__dbmnRef__ = Firebase.database().ref('/').child('dbmn')
}
export default dbmnRef
