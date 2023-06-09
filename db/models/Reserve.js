import mongoose from "mongoose";

const { Schema } = mongoose;
const reserveSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: String,
  number_of_guests: { type: Number, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  restaurantName: { type: String, required: true },
  restaurantId: { type: String, required: true },
});
const Reserve =
  mongoose.models.Reserve || mongoose.model("Reserve", reserveSchema);
export default Reserve;
