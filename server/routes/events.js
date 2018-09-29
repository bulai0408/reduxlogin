/**
 * User: 709962401@qq.com（cyh）
 * Date: 2018/7/7
 * Time: 下午3:14
 *
 */

import express from 'express';
import authenticate from '../middlewares/authenticate'

let router = express.Router();

router.post('/', authenticate, (req, res) => {
    res.status(201).json({user:req.currentUser})
})

export default router;