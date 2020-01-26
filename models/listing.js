const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  address: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  notes: {type: String},
  contract: {type: Boolean, default: false},
  mls: {type: Boolean, default: false},
  showingTime: {type: Boolean, default: false},
  compliance: {type: Boolean, default: false},
  disclosures: {type: Boolean, default: false},
  faceBook: {type: Boolean, default: false},
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true}
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
