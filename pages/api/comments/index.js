import dbConnect from "../../../db/connect.js";
import Comment from "../../../db/models/Comment.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const comments = await Comment.find();
    response.status(200).json(comments);
  }

  if (request.method === "POST") {
    try {
      const commentData = request.body;
      const comments = new Comment(commentData);
      await comments.save();
      response.status(201).json({ status: " new comment created." });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
