import axios from "axios";
import { response } from "express";

const axiosClient = axios.create ({
    baseURL : "http://localhost:5000"
})

export const getPersonaje = async () => {
    return axiosClient.get ('/characters')
    .then(response => {
        if ( response.status < 300){
            return response.data
        } else {
            console.log("Algo anduvo mal")
        }
    }) .catch(error => {
        console.log(error)
    })
}