import axios from "axios";
 
const instance =axios.create({
    baseURL:'http://localhost:5001/clone-f9270/us-central1/api' //api url 
});

export default instance;