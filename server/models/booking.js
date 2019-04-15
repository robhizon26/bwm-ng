const moongose = require("mongoose");

const Schema = moongose.Schema;

const bookingSchema = new Schema({
  startAt: { type: Date, required: "Starting date is required" },
  endAt: { type: Date, required: "Ending date is required" },
  totalPrice: Number,
  days: Number,
  guests: Number,
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  rental: { type: Schema.Types.ObjectId, ref: "Rental" }
});

module.exports = moongose.model("Booking", bookingSchema);
