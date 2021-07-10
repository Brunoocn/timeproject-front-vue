import axios from "axios";
import authService from "../services/authService";

const client = axios.create({baseURL:process.env.VUE_APP_API_URL})
client.interceptors.request.use(async request =>{
    const params = await authService.getUserParams()
    if(params != null){
        request.headers.authorization = "bearer "+ params.tokenAccess 
    }
    return request
    
    
})
export default client