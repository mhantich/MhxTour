import jwt  from 'jsonwebtoken'



export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  
  if (!token) {
    res.status(401).json({ success: false, messages: 'You are not authentcated user' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(401).json({ success: false, messages: 'You are not authentcated user' });
      }
      req.user = user;
      console.log(token);
      next(); // Call next() inside the callback function
  });
};



  export const verifyuser = (req, res, next) => {
    verifyToken(req, res, () => {
      // Check if the user ID matches the requested ID or if the user has an 'admin' role
      if (req.user.id === req.params.id || req.user.role === 'admin') {
            

        next(); // User is authorized, continue to the next middleware
      } else {
        res.status(401).json({ success: false, messages: 'You are not authentcated user' });
      }
    });
  };

  
export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.role==='admin'){
           
            res.status(200).json({ success: true, messages: `You are  authorized ${req.user.role}`  });
            next()
        }else{
            res.status(401).json({success:false,messges:`You are ${req.user.role}` })

        }
    })
}