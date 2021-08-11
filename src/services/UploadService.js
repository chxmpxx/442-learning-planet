import axios from 'axios'
import AuthService from './AuthService'

const api_endpoint =
  process.env.VUE_APP_USER_ENDPOINT || "http://localhost:1337";

export default{
    async uploadImage(data){
        let url = `${api_endpoint}/upload`
        let headers = AuthService.getApiHeader()
        let res = await axios.post(url, data, headers)
        return res
    }
}