import dbConnect from "../../../db/connect.js";
import Restaurant from "../../../db/models/Restaurant.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const restaurants = await Restaurant.find();
    response.status(200).json(restaurants);
  }
}
