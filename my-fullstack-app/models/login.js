const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkDuplicate = function(key) {
  const checkSchema = {
    isAsync: true,
    validator: function(value, isValid) {
    const self = this;
    return self.constructor.findOne({ [key]: value })
    .exec(function(err, user){
        if(err){
            throw err;
        }
        else if(user) {
            if(self._id === user._id) {  // if finding and saving then it's valid even for existing value
                return isValid(true);
            }
            return isValid(false);  
        }
        else{
            return isValid(true);
        }
      })
    },
    message: props => `[${key}] : The ${props.value} is already taken!`
  }
  return checkSchema;
}

//main schema
const loginSchema = new Schema({
  index: {
    type: Number,
    required: [true, 'Index required'],
    validate: checkDuplicate('index')
  },
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password required'],
    maxlength: [255, 'Max length of lastname is 255']
  },
  registered: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('Login', loginSchema);