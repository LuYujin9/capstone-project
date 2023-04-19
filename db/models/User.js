import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
  username: { type: String, required: true },
  restaurantId: { type: String, required: true },
  restaurantName: { type: String, required: true },
  isFavorite: { type: Boolean, required: true },
  isReserved: { type: Boolean, required: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
