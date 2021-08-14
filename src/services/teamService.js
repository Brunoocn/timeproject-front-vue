import EntityService from "./entityService";
import apiClient from "../api/apiClient";

class TeamService extends EntityService {
  constructor() {
    super("team");
  }

  getOptions(teamId){
     return apiClient.get(`${this.route}/options`,{params:{teamId}});
  }
}

export default new TeamService();
1;
