import EntityService from './entityService';

class ProjectService extends EntityService {

    constructor(){
        super('project')
    }
}

export default new ProjectService();