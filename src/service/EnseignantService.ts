import axios from 'axios';

const ENSEIGNANT_BASE_REST_API_URL = 'http://localhost:8080/api/enseignant';

class EmployeeService {
    getAllEmployees() {
        return axios.get(ENSEIGNANT_BASE_REST_API_URL);
    }
}