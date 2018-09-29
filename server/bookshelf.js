/**
 * User: 709962401@qq.com（cyh）
 * Date: 2018/7/4
 * Time: 下午4:01
 *
 */
import knex from 'knex'
import bookshelf from 'bookshelf'
import knexConfig from '../knexfile'

export default bookshelf(knex(knexConfig.development))