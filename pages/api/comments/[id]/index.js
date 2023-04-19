import dbConnect from "../../../../db/connect.js";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const comment = await Comment.findById(id);
    if (!comment) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(comment);
  }
  if (request.method === "PUT") {
    const commentUpdate = await Comment.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(commentUpdate);
  }

  if (request.method === "DELETE") {
    const commentDelete = await Comment.findByIdAndDelete(id);
    response.status(200).json({ status: "Comment successfully deleted." });
  }
}
