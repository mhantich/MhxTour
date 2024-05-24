import express from 'express'


import {allTour, creatTour, deleteTour, getFeaturedTours, getToursBySearching, singleTour, tourCout, updateTour} from '../controllers/toueController.js'
import { verifyAdmin } from '../utils/verifyToken.js'


const router= express.Router()

// all routes
router.post('/',verifyAdmin,creatTour)
router.put('/:id',verifyAdmin,updateTour)
router.delete('/:id',verifyAdmin,deleteTour)
router.get('/',allTour)
router.get('/:id',singleTour)
router.get('/search/getToursBySearching',getToursBySearching)
router.get('/search/Featured',getFeaturedTours)
router.get('/search/CountTours',tourCout)



export default router