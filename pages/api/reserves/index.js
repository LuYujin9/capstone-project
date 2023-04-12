import dbConnect from "../../../db/connect.js";
import Reserve from "../../../db/models/Reserve.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const reserves = await Reserve.find();
    response.status(200).json(reserves);
  }

  if (request.method === "POST") {
    try {
      const reserveData = request.body;
      const reserves = new Reserve(reserveData);
      await reserves.save();
      response.status(201).json({ status: " new reserve created." });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
