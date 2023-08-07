import mongoose from "mongoose";
import { buffer } from "stream/consumers";
const productdchema = new mongoose.Schema(
  {
    Name: {
      type: "String",
      required: true,
    },
    Slug: {
      type: "String",
      // required: true,
    },
    Title: {
      type: "String",
      required: true,
    },
    Description: {
      type: "String",
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Photo: {
      data: Buffer,
      contentTpye: "String",
    },
    Shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
const model = mongoose.model("Product", productdchema);
export default model
