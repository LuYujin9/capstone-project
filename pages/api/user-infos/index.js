import dbConnect from "../../../db/connect.js";
import UserInfo from "../../../db/models/User.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const userInfos = await UserInfo.find();
    response.status(200).json(userInfos);
  }

  if (request.method === "POST") {
    try {
      const userData = request.body;
      const userInfos = new UserInfo(userData);
      await userInfos.save();
      response.status(201).json({ status: "user's new infos created." });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
