import mongoose from "mongoose";

const { Schema } = mongoose;
const restaurantSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  cuisine: { type: String, required: true },
  stadt: { type: String, required: true },
  address: { type: String, required: true },
  position: [Number],
  telephoneNumber: String,
  maxSeats: { type: Number, required: true },
  potos: [String],
  description: String,
  foods: [{ id: String, name: String, price: String, description: String }],
  comments: [{ id: String, context: String, time: String }],
  reserveInfos: [{ date: String, time: String, remainingSeats: Number }],
});

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
