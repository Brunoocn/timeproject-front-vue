import apiClient from '../api/apiClient';
import Vue from 'vue'


export default {
    async signIn(tenanty, email, password){
        const res = await apiClient.post("/user/token", {tenanty, email, password});
        if (res.statusText == "OK") {
            await this.setUserParams(res.data.data)
          return true
        } else{
            return false
        }
    },
    async getUserParams(){
        return await Vue.prototype.$getItem("userparams");
    },

    async setUserParams(params){
        await Vue.prototype.$setItem("userparams", params);
    }
}