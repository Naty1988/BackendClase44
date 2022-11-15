const Router = require("express");
const router = Router();
const config = require("../config");
const productController = require("../controllers/productController")
const DaoFactory = require("../daos/daoFactory")

// const db = process.argv[2] || "MONGO";
const daoFactory = new DaoFactory();
const productDao = daoFactory.createDao(config.db);

router.get("/", productController.getAll);
router.post("/", productController.create);
router.get("/cotizador", productController.getAllWithCurrencies);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;