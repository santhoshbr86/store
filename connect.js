const mongoose = require('mongoose');


const connectDB = async() => {
        try{
            await mongoose.connect("mongodb+srv://admin:Pass123@royallabel.frewz.mongodb.net/test");
            console.log('connected');
        } 
        catch(error){
            console.error(error.message);
        }
     
}    

module.exports = connectDB;

