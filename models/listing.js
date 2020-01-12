const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  address: { type: String, required: true },
  dateListed: { type: Date, default: Date.now },
  // status: Active, deposit, closed, cancelled
  
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true}
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
