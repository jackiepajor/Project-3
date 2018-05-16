var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  username: {
        type: String,
        unique: true,
        required: true
    },
  password: {
        type: String,
        required: true
    }

    // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html

    // email: {
    //     type: String,
    //     unique: true,
    //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    //     validate: {
    //       validator: function(v, cb) {
    //         User.find({email: v}, function(err,docs){
    //            cb(docs.length == 0);
    //         });
    //       },
    //       message: 'Email already exists!'
    //     }
    //   },

    // `password` must be of type String
  // `password` will trim leading and trailing whitespace before it's saved
  // `password` is a required field and throws a custom error message if not supplied
  // `password` uses a custom validation function to only accept values 6 characters or more

    //   password: {
    //     type: String,
    //     trim: true,
    //     required: "Password is Required",
    //     validate: [
    //       function(input) {
    //         return input.length >= 6;
    //       },
    //       "Password should be longer."
    //     ]
    //   }

    //   // `date` must be of type Date. The default value is the current date
//   userCreated: {
//     type: Date,
//     default: Date.now
//   }
// });

});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
