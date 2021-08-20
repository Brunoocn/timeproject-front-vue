import EntityService from "./entityService";
import apiClient from "../api/apiClient";
class UserService extends EntityService {
  constructor() {
    super("user");
  }

  getRules(userId) {
    return apiClient.get(`${this.route}/rules`, { params: { userId } });
  }
  updateRules(userId, rules) {
    return apiClient.put(`${this.route}/rules`, rules, { params: { userId } });
  }
}

export default new UserService();
