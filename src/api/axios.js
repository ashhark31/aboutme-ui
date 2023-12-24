import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://aboutme-api-microservice.onrender.com/'
})

export default instance