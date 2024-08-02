const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {

    //const token = req.header('Authorization').replace('Bearer',' ');
   
    const token = req.header("Authorization").split(" ")[1]; // ["a"," ","d"]
    if(!token) return res.status(401).json({error:"Token required"});
    try{
        const decoded = jwt.verify(token, "secret_key");
        // console.log(decoded)
        req.user = {id:decoded.userId};
        next();
    }
    catch(err){
        res.status(401).json({error:"Invalid Token"}); //while token gets expired 
    }
};

module.exports = auth;
