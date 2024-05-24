
import Booking from '../models/Booking.js'


export const createBook =async (req,res)=>{
   const newbooking = new Booking(req.body)
   try {
    const savedBook=await newbooking.save()
    res.status(200).json({success:true,messges:'booking sucssesful'})
   } catch (error) {
    res.status(200).json({success:false,messges:'please try later'})

   }
}
export const findAllToursForUser = async (req, res) => {
    const { userIdToSearch } = req.params;
    try {
      // Step 1: Retrieve all bookings for the user
      const userBookings = await Booking.find({ UserID: userIdToSearch }).populate('tourId');
      res.status(200).json({ success: true, messages: 'Tours retrieved successfully', data: userBookings });
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).json({ success: false, messages: 'Please try later' });
    }
  };
  export const getALLbooks =async(req,res)=>{
    try {
        const allBooks= await Booking.find({})
        res.status(200).json({ success: true, messages: 'Tours retrieved successfully all', data: allBooks });
    } catch (error) {
        res.status(500).json({ success: false, messages: 'Please try later' });

    }
  }