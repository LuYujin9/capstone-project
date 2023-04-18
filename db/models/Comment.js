import mongoose from "mongoose";

const { Schema } = mongoose;
const commentSchema = new Schema({
  username: { type: String, required: true },
  restaurant_Id: { type: String, required: true },
  restaurantName: { type: String, required: true },
  context: { type: String, required: true },
  time: String,
});
const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
export default Comment;
