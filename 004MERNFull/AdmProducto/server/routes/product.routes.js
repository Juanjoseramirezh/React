const { Router } = require('express')

const ProductController = require("../controllers/product.controller")

const router = Router()



router.get("/products", ProductController.getAllProducts)
router.post("/products/create", ProductController.createProduct)
router.get("/products/:id", ProductController.findSingleProduct)
router.put("/products/:id", ProductController.updateProduct)
router.delete("/products/:id", ProductController.deleteProduct)


module.export = router