const dateFormat = require('../utils/dateFormat');
const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema(
  {
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // every time we retrieve a pizza, the value in the createdAt field will be formatted by the dateFormat() function and used instead of the default timestamp value
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: [],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    // tell the schema that it can use virtuals
    toJSON: {
      virtuals: true,
      // tell the Mongoose model that it should use any getter function we've specified
      getters: true
    },
    // this is a virtual that Mongoose returns, and we don’t need it
    id: false
  }
);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

// create the Pizza model using PizzaScheme
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
module.exports = Pizza;