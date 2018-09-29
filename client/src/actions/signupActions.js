/**
 * User: 709962401@qq.com（cyh）
 * Date: 2018/6/28
 * Time: 上午11:40
 *
 */
import axios from 'axios'

export const userSignupRequest = (userData)=>{
    return dispatch=>{
        return axios.post('/api/users',userData)
    }
}

export const isUserExists = (identifier)=>{
    return dispatch=>{
        return axios.get(`/api/users/${identifier}`,identifier)
    }
}