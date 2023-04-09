import dbConnect from "../../../../db/connect.js";
import Restaurant from "../../../../db/models/Restaurant";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(restaurant);
  }
}
