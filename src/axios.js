import axios from "axios";



// instance of axios is created using create() method
const api= axios.create({
    baseurl:'https://restcountries.com/v3.1/name'
});

export default api;