import express from 'express';
import ProductDb_Connection from './DatabaseConfig/Connection.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import ProductController from './Controller/ProductController.js';
import routers from './Router/Router.js';
import getproduct from './Controller/GetProduct.js';
const app = express();
const port =3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
ProductDb_Connection();
app.use('/post-product',ProductController)
app.use('/get-products',getproduct)
app.use('/api/products/admin-access',routers)
app.listen(port,()=>{
    console.log("listening on port at " + port);
});