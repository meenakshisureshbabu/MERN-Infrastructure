const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');



module.exports = {
    create,
    login,
    checktoken
  };
  
 async function create(req, res) {
    // Baby step...
    try {
        // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
    
      } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(err);
      }
  }

  async function login(req, res) {
    // Baby step...
    try {
        // Add the user to the database
    //const user = await User.create(req.body);
    const foundUser = await User.findOne({email:req.body.email});
    if(!foundUser) throw new Error()
    const match = await bcrypt.compare(req.body.password, foundUser.password);
    if(!match) throw new Error()
    res.json(createJWT(foundUser))

    
      } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(err);
      }
  }


  function checktoken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }



  function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }