/**
 * User: 709962401@qq.com（cyh）
 * Date: 2018/6/27
 * Time: 下午7:39
 *
 */
import {combineReducers} from 'redux'

import auth from './auth'
import flashMessages from './flashMessage'

export default combineReducers({
    auth,
    flashMessages
})