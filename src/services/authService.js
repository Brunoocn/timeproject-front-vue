import apiClient from "../api/apiClient";
import Vue from "vue";

export default {
  async signIn(tenanty, email, password) {
    const res = await apiClient.post("/user/token", {
      tenanty,
      email,
      password,
    });

    if (res.status == 200) {
      await this.setUserParams(res.data.data);
      return true;
    }
    return false;
  },

  async getUserParams() {
    return await Vue.prototype.$getItem("userparams");
  },

  async setRoles(claims){
    const claimsRoles = claims.filter(claim => claim.type == 'rule').map(claim => {return claim.value});
    await Vue.prototype.$gates.setRoles(claimsRoles)
  },

  async setUserParams(params) {
    await Vue.prototype.$setItem("userparams", params);
    await this.setRoles(params.claims)
  },

  async signUp(tenanty, email, name, password, confirmPassword) {
    const res = await apiClient.post("/User/register", {
      tenanty,
      email,
      name,
      password,
      confirmPassword,
    });
    if (res.statusText == "OK") {
      return true;
    } else {
      return false;
    }
  },

  async signOut(){
    localStorage.clear()
    await Vue.prototype.$removeItem("userparams");
  }
};
