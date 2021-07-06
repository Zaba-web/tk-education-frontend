import axios from 'axios'

const serverLocation = 'http://127.0.0.1:8000/api/'

function API(){
    this.post = (path, data, callback)=>{
        let result = axios.post(`${serverLocation}${path}`, data)
        
        if(!callback) 
            return result
        
        result.then(response=>{
            callback(response)
        })
    },
    this.get = (path, params = '', callback)=>{
        let result = axios.get(`${serverLocation}${path}/${params}`)
        
        if(!callback) 
            return result
    
        result.then(response=>{
            callback(response)
        })
    }
}

export default API