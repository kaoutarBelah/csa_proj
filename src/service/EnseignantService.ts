import axios from 'axios';

const ENSEIGNANT_BASE_REST_API_URL = 'http://localhost:8080/api/enseignant';

class EnseignantService{
    getAllEnseignants() {
        return axios.get(ENSEIGNANT_BASE_REST_API_URL);
    }
    deleteEnseignant(employeeId){
        return axios.delete(ENSEIGNANT_BASE_REST_API_URL + '/' + employeeId);
    }
}
export default new EnseignantService();