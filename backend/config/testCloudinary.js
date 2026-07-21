import dotenv from "dotenv";
dotenv.config();

import { v2 as cloudinary } from "cloudinary";



cloudinary.config({
  cloud_name: "dmk1rp22e",
  api_key: "264216872784896",
  api_secret:"SK_7L3vLG8sbrGe3FW_iuroP2dA",
});

try {
  const result = await cloudinary.api.ping();
  console.log(result);
} catch (err) {
  console.error(err);
}