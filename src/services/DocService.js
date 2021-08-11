import axios from "axios";
import AuthService from "./AuthService";
import AuthUser from "../store/AuthUser";

const api_endpoint = process.env.VUE_APP_USER_ENDPOINT || 'http://localhost:1337'

export default{
    async getWaitApproveById(id,collection){
        let url = `${api_endpoint}/${collection}s/${id}`
        let headers = AuthService.getApiHeader()
        try{
            let res = await axios.get(url, headers)
            return res.data
        }catch(e){

        }
    }
}