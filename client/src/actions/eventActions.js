/**
 * User: 709962401@qq.com（cyh）
 * Date: 2018/7/7
 * Time: 下午3:09
 *
 */

import axios from 'axios';

export const createEvent = (event)=>{
    return dispatch=>{
        return axios.post('/api/events',event)
    }
}