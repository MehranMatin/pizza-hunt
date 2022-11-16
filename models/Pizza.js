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
        default: Date.now
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
      virtuals: true
    },
    // this is a virtual that Mongoose returns, and we don’t need it
    id: false
  }
);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

// create the Pizza model using PizzaScheme
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
module.exports = Pizza;