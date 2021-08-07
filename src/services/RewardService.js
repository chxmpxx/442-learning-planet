import axios from "axios";
import AuthService from "./AuthService";

const api_endpoint = process.env.VUE_APP_USER_ENDPOINT || 'http://localhost:3003'

export default{
    async getRewardById(id){
        let url = `${api_endpoint}/rewards/${id}`
        let headers = AuthService.getApiHeader()
        try{
            let res = await axios.get(url, headers)
            return res.data
        }catch(e){

        }
    }
}