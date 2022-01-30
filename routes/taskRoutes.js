const express = require('express');
const res = require('express/lib/response');
const router = express.Router();



router.get('/',(req,res)=>{
    res.render('home')

})
router.get('/login',(req,res)=>{
    res.render('Login')
    
})
router.get('/Signup',(req,res)=>{
    res.render('Signup')
    
})
module.exports = router;