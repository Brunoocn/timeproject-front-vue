import EntityService from "./entityService";

class TimeSheetService extends EntityService {
  constructor() {
    super("timesheet");
  }

  getOptions() {
    return this.client.get(`${this.route}/options`);
  }
}

export default new TimeSheetService();
