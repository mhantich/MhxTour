import express from 'express'
import { logOut, login, regester } from '../controllers/authControllers.js'
const router= express.Router()

// all routes

router.post('/regester',regester)
router.post('/login',login)
router.get('/logout',logOut)





export default router