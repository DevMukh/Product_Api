import express from 'express';
import formidable from "express-formidable";
import ProductController from '../Controller/ProductController.js';
import getproduct from '../Controller/GetProduct.js';
const router=express.Router();
 router.post('/post-product' ,  formidable(),ProductController);
 router.get('/get-products',getproduct)
export default router
