import apiClient from "../api/apiClient";

class EntityService {
  route;

  constructor(route) {
    this.route = route;
  }

  async getAll(page, limit, sortBy, sortDesc) {
    return await apiClient.get(this.route, {
      params: { page, limit, sortBy, sortDesc },
    });
  }

  async getById(id) {
    return await apiClient.get(this.route, { params: { id } });
  }

  async insert(entity) {
    return await apiClient.post(this.route, entity);
  }

  async update(entity) {
    return await apiClient.put(this.route, entity);
  }

  async delete(id) {
    return await apiClient.delete(this.route, { params: { id } });
  }
}

export default EntityService;
