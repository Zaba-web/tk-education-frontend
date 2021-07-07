import axios from 'axios'

const serverLocation = 'http://127.0.0.1:8000/api/'

class API {
    constructor(){
        this.axiosInstance = axios.create()
    }

    authorize(){
        if(localStorage.getItem('token')){
            this.axiosInstance.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            this.axiosInstance.defaults.headers.get['Authorization'] = `Bearer ${localStorage.getItem('token')}`
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
            console.error(error)
        })
    }

    getAllUserData(){
        this.authorize()

        return this.get('user/userdata').then(response => {
            return response.data
        }).catch(error => {
            alert(error) // temponary
        })
    }
}

export default API