// Router file for users which handles all the operations
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get Request - Show all users
router.get('/',async (req,res)=>{

    try {
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.send('Error:- '+err);
    }
})

// Get Request - Show only one user with specified id
router.get('/:id',async (req,res)=>{

    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    }
    catch(err){
        res.send('Error:- '+err);
    }
})

// Post Request - Insert user in database
router.post('/',async (req,res)=>{

    const user = new User({
        Name : req.body.Name,
        userName : req.body.userName,
        Age : req.body.Age,
        DOB : req.body.DOB
    });

    try {
        const user1 = await user.save();
        res.json(user1);
    }
    catch (err) {
        res.send('Error:- '+err);
    }
})

// Patch Request - Updates the user data in database with specified id
router.patch('/:id',async (req,res)=>{
    try {

        const user = await User.findById(req.params.id);

        if(req.body.Name != undefined){
            user.Name = req.body.Name;
        }
        if(req.body.userName != undefined){
            user.userName = req.body.userName;
        }
        if(req.body.Age != undefined){
            user.Age = req.body.Age;
        }
        if(req.body.DOB != undefined){
            user.DOB = req.body.DOB;
        }

        const user1 = await user.save();
        res.json(user1);
        
    } 
    catch (err) {
        res.send('Error:- '+err);
    }
})

// Delete Request - Delete user from database by specified id
router.delete('/:id',async (req,res)=>{
    try {
        
        const user = await User.findById(req.params.id);
        const user1 = await user.remove();
        res.send(`Deleted from database:- \n ${user1}`);

    }
    catch (err) {
        res.send('Error:- '+err);
    }
})


module.exports = router;