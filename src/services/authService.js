import apiClient from '../api/apiClient';
import Vue from 'vue'


export default {
    async signIn(tenanty, email, password){
        try{
            const res = await apiClient.post("/user/token", {tenanty, email, password});
            if (res.statusText == "OK") {
                await this.setUserParams(res.data.data)
            } 
            return res.data

        }catch(error){
            return error.response.data
        }
    },
    async getUserParams(){
        return await Vue.prototype.$getItem("userparams");
    },

    async setUserParams(params){
        await Vue.prototype.$setItem("userparams", params);
    },

    async signUp(tenanty, email, name, password, confirmPassword){
        const res = await apiClient.post("/User/register", {tenanty, email, name, password, confirmPassword});
        if (res.statusText == "OK") {
          return true
        } else{
            return false
        }
    }
}