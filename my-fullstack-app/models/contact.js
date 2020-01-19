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

//schema for detail of some keys
// const detailName = new Schema({
//   first: {
//     type: String,
//     required: [true, 'First name required'],
//     validate: {
//       validator: function(v) {
//         return /^[A-Z][a-z]+$/.test(v);
//       },
//       message: 'First name begin with a capital letter followed by one or more lower case letters.'
//     }
//   },
//   last: {
//     type: String,
//     required: [true, 'Last name required'],
//     validate: {
//       validator: function(v) {
//         return /^[A-Z][a-z]+$/.test(v);
//       },
//       message: 'Last name begin with a capital letter followed by one or more lower case letters.'
//     }
//   }
// }, { _id: false, id: false });

// const detailAddress = new Schema({
//   building: String,
//   street: String,
//   city: String,
//   state: String,
//   country: String,
//   zip: String
// });

const detailMeetingHistory = new Schema({
  index: Number,
  date: String,
  place: {
    building: String,
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  },
  purpose: String,
  checked: Boolean,
  readonly: Boolean
}, { _id: false, id: false });

//main schema
const contactSchema = new Schema({
  picture: String,
  name: {
    first: {
      type: String,
      required: [true, 'First name required'],
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
      validate: {
        validator: function(v) {
          return /^[A-Z][a-z]+$/.test(v);
        },
        message: 'Last name begin with a capital letter followed by one or more lower case letters.'
      }
    }
  },
  relationship: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    // validate: checkDuplicate('email')
  },
  phone: {
    type: String,
    // validate: {
    //   validator: function(v) {
    //     return /\d{3}-\d{3}-\d{4}/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid phone number!`
    // }
  },
  address: {
    building: String,
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  },
  meetingHistory: {
    type: [detailMeetingHistory]
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

contactSchema.plugin(AutoIncrement, {id: 'contact_index', inc_field: 'index', start_seq: 21});

module.exports = mongoose.model('Contact', contactSchema);