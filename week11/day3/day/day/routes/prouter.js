const express=require('express')

const {
    getAllProducts,
    search4Product,
    createNewProduct,
} = require('../controllers/pcontroller.js')

const router = express.Router()

router.get("/all", getAllProducts);
router.get("/search", search4Product);
router.post("/add",createNewProduct);
module.exports=router;
