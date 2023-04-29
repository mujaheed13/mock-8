const { UserModel } = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
    const {name, email, password, address} = req.body;
    try {
        if(!name || !email || !password || !address){
            res.status(400).send({msg: "Please enter all the fields" });
            return;
        }
        bcrypt.hash(password, 3, async (err, hashed_pass)=>{
            if(err){
                res.status(500).send(err);
                return;
            }

            const user = new UserModel({name, password: hashed_pass, address, email});
            await user.save();
            res.status(201).send({msg: "User registered"});
    
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
 };



const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email || !password){
            res.status(400).send({msg: "Please enter all the fields" });
            return;
        }
        const user = await UserModel.findOne({email});
        
        if(!user){
            res.status(404).send({msg: "User not found"});
            return;
        }

        bcrypt.compare(password, user.password, (err, result)=>{
            if(err){
                res.status(500).send(err);
                return;
            }

            if(!result){
                res.status(400).send({msg: "Wrong credentials"})
                return;
            }
            const token = jwt.sign({user_id : user._id, email}, process.env.JWT_SECRET_KEY);
            res.status(201).send({msg: "Login Successful", token});
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
};

const resetPassword = async (req, res) =>{
    const { id } = req.params;
    const { current_password, new_password } = req.body;
    try {
        const user = await UserModel.findById(id);
        if(!user){
            res.status(404).send({msg: "User not found"});
            return;
        }
        bcrypt.compare(current_password, user.password, async (err, result) => {
            if(err){
                res.status(500).send(err);
                return;
            }

            if(!result){
                res.status(400).send({msg: "Wrong credentials"})
                return;
            }

            bcrypt.hash(new_password, 3, async (err, hashed_pass)=>{
                if(err){
                    res.status(500).send(err);
                    return;
                }
                
                await UserModel.findByIdAndUpdate(id, {password: hashed_pass});
                res.status(204).send({msg: "Password changed"});
            })
            
          
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}


module.exports = { register, login, resetPassword };
