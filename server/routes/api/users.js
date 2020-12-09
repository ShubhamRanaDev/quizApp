const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
//create user
router.post('/',[
    check('name','Name is required')
        .not()
        .isEmail(),
    check('email','Email is required')
        .isEmail(),
    check('password','Enter password with length 6 or more')
        .isLength({min:6})
],((req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    res.send("user created")
}))

module.exports = router