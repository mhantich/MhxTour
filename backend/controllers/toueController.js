import Tour from '../models/Tour.js'



// ============================post create============================
export const creatTour= async (req,res)=>{
    const newTour = new Tour(req.body)
    try {
        const savedTour = await newTour.save()
        res.status(200).json({success:true,messges:'succed saved',data:savedTour})
    } catch (error) {
        res.status(500).json({success:false,messges:'error ',error})

        
    }
}

//========================== updata========================
export const updateTour= async (req,res)=>{
        const {id} = req.params
    try {
        const updateOne = await Tour.findByIdAndUpdate(id,{$set:req.body})
        res.status(200).json({success:true,messges:'updated sucssesful',data:updateOne})
    } catch (error) {
        res.status(404).json({success:false,messges:'erro while updating ',error})

        
    }
}

//=============================== delete===========================
export const deleteTour= async (req,res)=>{
    const {id} = req.params
    try {
        const dateleOne = await Tour.findByIdAndDelete(id)
        res.status(200).json({success:true,messges:'deleted sucssesful',data:dateleOne})
    } catch (error) {
        res.status(500).json({success:false,messges:'erro while deleting ',error})

        
    }
}


// ========================get all tours=============================
export const allTour= async (req,res)=>{

    // pagination 
    const page = parseInt(req.query.page)
    try {
        const allTours = await Tour.find({}).skip(page*8).limit(8)
        res.status(200).json({success:true,messges:' sucssesful',data:allTours,count:allTours.length})
    } catch (error) {
        res.status(500).json({success:false,messges:'error ',error})

        
    }
    
}


// =============================get single tours=================
export const singleTour= async (req,res)=>{
    const {id} = req.params
    try {
        const singleTour = await Tour.findById(id)
        res.status(200).json({success:true,messges:' sucssesful',data:singleTour})
    } catch (error) {
        res.status(404).json({success:false,messges:'not found ',error})

        
    }
}
 

//========================= get tours by search ========================
export const getToursBySearching = async (req,res )=>{
  
    const city = new RegExp(req.query.city,"i")
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
  
    try {

        // filter tours
        const tours = await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}})
  
        res.status(200).json({success:true,messges:' sucssesful',data:tours})
    } catch (error) {
        res.status(404).json({success:false,messges:'not found ',error})
    }

}



//========================= get featured  tours ========================
export const getFeaturedTours = async (req,res )=>{
    try {

        // featured tours
        const tours = await Tour.find({featured:true}).limit(8)
  
        res.status(200).json({success:true,messges:' sucssesful',data:tours})
    } catch (error) {
        res.status(404).json({success:false,messges:'not found ',error})
    }

}
// ===================== get tours counts======================
export const tourCout= async (req,res )=>{
    try {

        // featured tours
        const tours = await Tour.find({}).countDocuments()
  
        res.status(200).json({success:true,messges:' sucssesful',data:tours})
    } catch (error) {
        res.status(500).json({success:false,messges:'error ',error})
    }

}