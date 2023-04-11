import dbConnect from "../../../../db/connect.js";
import User from "../../../../db/models/User.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const userInfo = await User.findById(id);
    if (!userInfo) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(User);
  }

  if (request.method === "PUT") {
    const userUpdate = await User.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(userUpdate);
  }
}
