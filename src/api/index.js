import { storeData } from '../util/http'

export const testPost = () => {
    storeData({name:"test",age:45})
} 