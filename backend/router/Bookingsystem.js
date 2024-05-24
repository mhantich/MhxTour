import express from 'express'
import { createBook, findAllToursForUser, getALLbooks } from '../controllers/bookingControllers.js'
import { verifyAdmin, verifyuser } from '../utils/verifyToken.js'





const router= express.Router()

// all routes

router.post('/',verifyuser,createBook)
router.get('/',verifyuser,getALLbooks)
router.get('/:UserId',verifyAdmin,findAllToursForUser)


export default router





