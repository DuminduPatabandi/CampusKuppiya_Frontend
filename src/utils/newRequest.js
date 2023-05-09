import axios from "axios";

const newRequest = axios.create({
    baseURL: "https://blooming-basin-02556.herokuapp.com/api/",
    withCredentials: true
})
// const newRequest = axios.create({
//     baseURL: "http://localhost:3000/api/",
//     withCredentials: true
// })

export default newRequest