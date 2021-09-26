const { model, Schema } = require("mongoose");

module.exports = model(
  "slicy-giveaways",
  new Schema({
    MessageID: String,
    EndsAt: Number,

    Guild: String,
    Channel: String,
    winners: Number,
    prize: String,
    description: String,
    hostedBy: String,
    Activated: Boolean
  })
);
