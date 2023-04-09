import dbConnect from "../../../db/connect.js";
import UserInfo from "../../../db/models/UserInfo.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const userInfos = await UserInfo.find();
    response.status(200).json(userInfos);
  }
}
