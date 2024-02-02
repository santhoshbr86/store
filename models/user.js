const {
    Schema,
    model
  } = require("mongoose");
  const bcrypt = require('bcrypt');

  const userSchema = new Schema({
    name: {
        type:String,
    },
    phone: {
        type:String
    },
    userName: {
        type: String,
        unique:true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
   },
   { timestamps: true }
   );

   // Hash the password before saving it to the database
        // userSchema.pre('save', async function (next) {
        //     const user = this;
        //     if (!user.isModified('password')) return next();
        
        //     try {
        //       const salt = await bcrypt.genSalt();
        //       user.password = await bcrypt.hash(user.password, salt);
        //       next();
        //     } catch (error) {
        //       return next(error);
        //     }
        //   });
  
  // Compare the given password with the hashed password in the database
  userSchema.methods.comparePassword = async function (password) {
        return bcrypt.compare(password, this.password);
  };
  
  module.exports = model('User', userSchema);