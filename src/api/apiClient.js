import axios from "axios";
import authService from "../services/authService";
import store from '../stores/store'

const client = axios.create({baseURL:process.env.VUE_APP_API_URL})
client.interceptors.request.use(async request =>{
    
    store.dispatch('loading',true);

    const params = await authService.getUserParams()
    if(params != null){
        request.headers.authorization = "bearer "+ params.tokenAccess 
    }
    return request
    
    
})

client.interceptors.response.use(response =>{
    store.dispatch('loading',false);
    return response;
})
export default client