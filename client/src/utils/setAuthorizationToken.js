/**
 * User: 709962401@qq.com（cyh）
 * Date: 2018/7/5
 * Time: 下午3:30
 *
 */
import axios from 'axios'

const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthorizationToken;