import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({ databaseURL: 'https://beauty-ad056.firebaseio.com' })
var dbmnRef = firebase.database().ref('/').child('dbmn')
export default dbmnRef
