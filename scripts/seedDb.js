const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the collection and inserts the courses below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/grasshopper",
  {
    useMongoClient: true
  }
);

const coursesSeed = [
  {
    units: [
      {
        name: "Reading out loud",
        lessons: [
          {title: "foo"},
          {title: "bar"},
          {title: "foo_bar"}
        ]
      },
      {
        name: "Reading out silent",
        lessons: [
          {title: "blarg"},
          {title: "blargy"},
          {title: "blargument"}
        ]
      },
      {
        name: "Reading illeteracy",
        lessons: [
          {title: "lol"},
          {title: "haha"}
        ]
      },
      {
        name: "Loud reading",
        lessons: [

        ]
      }
    ]
  }
];

// we'll need to actually make the calls to the db models to create the courses, units, and lessons
// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });