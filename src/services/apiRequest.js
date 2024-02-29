import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:3001/api",
    timeout: 3000
})

const apiRequest = async ({ url, method, data }) => {
    console.log(url, method ,data)

    const token = localStorage.getItem('token') ?? null;
    const request = await instance.request({
        url, method, data,
        headers:{
            "Authorization": token
        }
    });
    return request;
}
export default apiRequest;