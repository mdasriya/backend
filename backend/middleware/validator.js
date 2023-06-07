
 const validator = (req,res,next) => {
    const {pass} = req.body
    if (!pass.match(/[A-Z]/) || !pass.match(/[0-9]/) || !pass.match(/[^A-Za-z0-9]/) || pass.length < 8) {
        return res.status(400).json({ error: 'Password does not meet the requirements' });
      }else{
        next()
      }
 }

 module.exports = {
    validator
 }