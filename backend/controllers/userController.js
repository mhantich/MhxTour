import User from '../models/User.js'




//========================== updata========================
export const updateUser= async (req,res)=>{
        const {id} = req.params
    try {
        const updateOne = await User.findByIdAndUpdate(id,{$set:req.body})
        res.status(200).json({success:true,messges:'updated sucssesful',data:updateOne})
    } catch (error) {
        res.status(404).json({success:false,messges:'erro while updating ',error})

        
    }
}

//=============================== delete===========================
export const deleteUser= async (req,res)=>{
    const {id} = req.params
    try {
        const dateleOne = await User.findByIdAndDelete(id)
        res.status(200).json({success:true,messges:'deleted sucssesful',data:dateleOne})
    } catch (error) {
        res.status(500).json({success:false,messges:'erro while deleting ',error})

        
    }
}


// ========================get all Users=============================
export const allUser= async (req,res)=>{

    // pagination 
    const page = parseInt(req.query.page)
    try {
        const users = await User.find({}).skip(page*8).limit(8)
        res.status(200).json({success:true,messges:' sucssesful',data:users,count:users.length})
    } catch (error) {
        res.status(500).json({success:false,messges:'error ',error})

        
    }
    
}


// =============================get single Users=================
export const singleUser= async (req,res)=>{
    const {id} = req.params
    try {
        const user = await User.findById(id)
        res.status(200).json({success:true,messges:' sucssesful',data:User})
    } catch (error) {
        res.status(404).json({success:false,messges:'not found ',error})

        
    }
}
 
