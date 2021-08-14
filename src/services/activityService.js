import EntityService from './entityService';

class ActivityService extends EntityService {

    constructor(){
        super('activity')
    }
}

export default new ActivityService();