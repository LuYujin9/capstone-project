import mongoose from "mongoose";

const { Schema } = mongoose;
const restaurantSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  telephoneNumber: String,
  stadt: { type: String, required: true },
  address: { type: String, required: true },
  maxSeats: { type: Number, required: true },
  reserveInfos: [{ date: String, time: String, remainingSeats: Number }],
  foods: [{ id: String, name: String, price: String, description: String }],
  potos: [String],
  cuisine: { type: String, required: true },
  description: String,
  comments: [{ id: String, context: String, time: String }],
});

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
