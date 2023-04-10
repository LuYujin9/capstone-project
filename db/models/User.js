import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
  restaurantId: { type: String, required: true },
  name_of_restaurant: { type: String, required: true },
  isFavorite: { type: Boolean, required: true },
  isReserved: { type: Boolean, required: true },
  reserves: [
    {
      reserveId: String,
      name: String,
      email: String,
      number_of_guests: Number,
      phone: Number,
      date: String,
      time: String,
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
/* 
const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: String,
  mapURL: String,
  description: String,
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place; */
