import model from "../Schema/ProductSchema.js";
import slugify from "slugify";
import fs from "fs";
// import { resolve } from "path";
// import { responsiveFontSizes } from "@material-ui/core";
 const ProductController = async (req, res) => {
  try {
    //ee switcch iccch ki kita nay? validation avy agr koii field missng avy
    const { Name, Slug, Title, Description, Price, Shipping } = req.fields;
    const { Photo } = req.files; // Use req.files to access the uploaded files

    if (!Name) {
      return res.status(404).send({
        message: "Please enter a name",
        success: true,
      });
    }
    if (!Title) {
      return res.status(404).send({
        message: "Please enter a title",
        success: true,
      });
    }
    if (!Description) {
      return res.status(404).send({
        message: "Please enter a description",
        success: true,
      });
    }
    if (!Price) {
      return res.status(404).send({
        message: "Please enter a Price",
        success: true,
      });
    }
    if (!Shipping) {
      return res.status(404).send({
        message: "Please enter a bollean",
        success: true,
      });
    }
    if (Photo && Photo.size > 1000000) {
      res.status(404).send({
        message: "Your photo is too large",
        success: true,
      });
    }
    console.log(req.fields);
    const products = new model({
      ...req.fields,
      Slug: slugify(Name),
    });

    if (Photo) {
      products.Photo.data = fs.readFileSync(Photo.path);
      products.Photo.contentTpye = Photo.type;
    }

    await products.save();

    res.status(200).send({
      message: "Your data and photo have been saved successfully",
      success: true,
      products: products,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: "Internal Server Error", message: err.message });
  }
};

// get products from controllers Api's
//  const getproducts=async(req, res) => {

// }
export default ProductController
// const productmodules={
//   ProductController,
//   getproducts
// }
// export default productmodules