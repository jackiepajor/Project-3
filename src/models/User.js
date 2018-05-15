var mongoose = require("mongoose");

// reference to the Schema constructor
var Schema = mongoose.Schema;

// new UserSchema object
var UserSchema = new Schema({

  name: {
    type: String
  },

  managedCourses: {
    type: String
  },

  enrolledCourses: {
    type: String
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    validate: {
      validator: function(v, cb) {
        User.find({email: v}, function(err,docs){
           cb(docs.length == 0);
        });
      },
      message: 'Email already exists!'
    }
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },

  
});


// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
