import express from 'express'

import { allUser, deleteUser, singleUser, updateUser } from '../controllers/userController.js'
import { verifyAdmin, verifyuser } from '../utils/verifyToken.js'





const router= express.Router()

// all routes

router.put('/:id',verifyuser,updateUser)
router.delete('/:id',verifyuser,deleteUser)
router.get('/',verifyAdmin,allUser)
router.get('/:id',verifyuser,singleUser)



export default router