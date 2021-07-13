import axios from 'axios'
import store from '@/store/index'

const serverLocation = 'http://127.0.0.1:8000/api/'

class API {
    constructor(){
        this.axiosInstance = axios.create()
    }

    showError(error){
        store.commit('ADD_NEW_MESSAGE', {
            title: "Серверна помилка",
            msg: "Відбулась критична помилка на стороні серверу. Перегляньте консоль для детальної інформації",
            type: "error"
        })

        console.error(error) 
    }

    getServerLocation(){
        return serverLocation
    }

    authorize(){
        if(localStorage.getItem('token')){
            this.axiosInstance.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            this.axiosInstance.defaults.headers.get['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            this.axiosInstance.defaults.headers.delete['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            this.axiosInstance.defaults.headers.put['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        }
    }

    
    post(path, data, callback){
        let result = this.axiosInstance.post(`${serverLocation}${path}`, data)
        
        if(!callback) 
            return result
        
        result.then(response=>{
            callback(response)
        })
    }

    get(path, params = '', callback){
        let result = this.axiosInstance.get(`${serverLocation}${path}/${params}`)
        
        if(!callback) 
            return result
    
        result.then(response=>{
            callback(response)
        })
    }

    delete(path, callback){
        this.authorize()

        let result = this.axiosInstance.delete(`${serverLocation}${path}`)
        
        if(!callback) 
            return result
    
        result.then(response=>{
            callback(response)
        })
    }

    put(path, data, callback){
        this.authorize()
        let result = this.axiosInstance.put(`${serverLocation}${path}`, data)
        
        if(!callback) 
            return result
    
        result.then(response=>{
            callback(response)
        })
    }

    getUserAccessLevel(){
        this.authorize()
        return this.get('user/access_level').then(response => {
            return response.data
        })
    }

    ifUserLogin(){
        if(localStorage.getItem('token'))
            return true

        return false
    }

    userLogout(){
        this.authorize()
        
        return this.get('user/logout').then(response => {
            if(response.data.success == true)
            {
                localStorage.removeItem("token")
                localStorage.removeItem("username")
                localStorage.removeItem("email")
            }
        }).catch(error => {
            this.showError(error)
        })
    }

    getSecureData(path){
        this.authorize()

        return this.get(path).then(response => {
            return response.data
        }).catch(error => {
            this.showError(error)
        })
    }

}

export default API