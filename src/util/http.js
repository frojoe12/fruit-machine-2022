import axios from 'axios'

export function storeData(data) {
    axios.post(
        'https://react-native-course-c2599-default-rtdb.firebaseio.com/test-data.json',
        data
    ).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
}