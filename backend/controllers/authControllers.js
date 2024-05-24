import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'


// ============regster user============
export const regester = async (req,res)=>{

    try {

        const slat = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,slat)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo
        })

        await newUser.save()
        res.status(200).json({success:true,messges:'regester sucssesful'})

    } catch (error) {
        
        res.status(500).json({success:false,messges:'sorry try again later'})
    }
}



// ============login user============

export const login = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ success: false, messges: 'No such email, please register.' });
      }
  
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ success: false, messges: 'Password is wrong.' });
      }
  
      const { password, role, ...rest } = user._doc;
  
  
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
  
      res.cookie('accessToken', token, { httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60 * 1000) }).status(200).json({
        success: true,
        token,
        messges: 'Successfully logged in.',
        data: { ...rest },
        role
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ success: false, messges: 'Sorry, please try again later.' });
    }
  };

  export const  logOut = (req,res)=>{
    res.cookie('accessToken','',{maxAge:1})
    res.status(200).json({success:true,messges:'logout sucssesful'})

  }