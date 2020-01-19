const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
const userSchema = new Schema({
  name: {
    first: {
      type: String,
      required: [true, 'First name required'],
      maxlength: [100, 'Max length of firstname is 100'],
      validate: {
        validator: function(v) {
          return /^[A-Z][a-z]+$/.test(v);
        },
        message: 'First name begin with a capital letter followed by one or more lower case letters.'
      }
    },
    last: {
      type: String,
      required: [true, 'Last name required'],
      maxlength: [100, 'Max length of lastname is 100'],
      validate: {
        validator: function(v) {
          return /^[A-Z][a-z]+$/.test(v);
        },
        message: 'Last name begin with a capital letter followed by one or more lower case letters.'
      }
    }
  },
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    validate: checkDuplicate('email')
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
  },
  index: {
    type: Number,
    // required: [true, 'Index required'],
    // validate: checkDuplicate('index')
  }
});

// userSchema.plugin(AutoIncrement, {inc_field: 'user_index'});
userSchema.plugin(AutoIncrement, {id: 'user_index', inc_field: 'index'});
module.exports = mongoose.model('Users', userSchema);