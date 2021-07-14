import apiClient from '../api/apiClient';

export default {
    async signUp(tenanty, email, name, password, confirmPassword){
        const res = await apiClient.post("/User/register", {tenanty, email, name, password, confirmPassword});
        if (res.statusText == "OK") {
          return true
        } else{
            return false
        }
    },
}