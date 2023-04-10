import dbConnect from "../../../../db/connect.js";
import User from "../../../../db/models/User.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    const userInfoUpdate = await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(userInfoUpdate);
  }
}
