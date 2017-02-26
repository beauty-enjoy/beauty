import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({ databaseURL: 'https://beauty-ad056.firebaseio.com' })

export default firebase.database().ref('/').child('dbmn')
