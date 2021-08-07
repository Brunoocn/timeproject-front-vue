import EntityService from './entityService';

class CustomerService extends EntityService {

    constructor(){
        super('customer')
    }
}

export default new CustomerService();