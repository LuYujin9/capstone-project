import dbConnect from "../../../../db/connect.js";
import Reserve from "../../../../db/models/Reserve";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const reserve = await Reserve.findById(id);
    if (!reserve) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(reserve);
  }

  if (request.method === "PUT") {
    const reserveUpdate = await Reserve.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(reserveUpdate);
  }
}
