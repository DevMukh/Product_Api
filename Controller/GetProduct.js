import model from "../Schema/ProductSchema.js";
const getproduct = async (req, res) => {
  try {
    const product = await model
      .find({})
      .select("-Photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      message: "Product successfully updated ",
      success: true,
      total:product.length,
      product,
    });
  } catch (err) {
    res.status(400).send({
      message: "get product failed",
      success: false,
    });
  }
};
export default getproduct;
