import mongoose from "mongoose";

const { Schema } = mongoose;
const reserveSchema = new Schema({
  name: String,
  email: String,
  number_of_guests: Number,
  phone: Number,
  date: String,
  time: String,
});
const Reserve =
  mongoose.models.Reserve || mongoose.model("Reserve", reserveSchema);
export default Reserve;
