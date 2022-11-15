const WSresponse = require("../classes/WSresponseClass");
const productService = require("../services/productService.js");
const ProductMongoDAO = require("../daos/productMongoDao.js");
const ProductFirebaseDAO = require("../daos/ProductFirebaseDAO.js");
const Cotizador = require("../classes/CotizadorClass");
const ProductDTO = require("../classes/productoDTOClass");
const config = require("../config");

let Product

if (config.db === "FIREBASE") {
  Product = new ProductFirebaseDAO()}
  
  if (config.db  === "MONGO") {
    Product = new ProductMongoDAO()
  }
  
  
  const getAll = async (req, res) => {
  console.log("config.db en controller" , config.db)
  try {
    const response = await Product.getAll();

    res.json(new WSresponse(response, "Mostrando todos los productos"));
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json(new WSresponse(null, "Internal server error", true, 500));
  }
};

const create = async (req, res) => {
  try {
    const response = await Product.create(req.body );

    res.status(200).json(new WSresponse(response, "Product created", false, 200));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 400));
  }
};

const getProductById = async (req, res) => {
  try {

    const response = await Product.getProductById(req.params.id);
    console.log(req.params.id)
    res.json(new WSresponse(response, "Producto encontrado por id"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 460));
  }
};

const updateProduct = async (req, res) => {
  try {
    const response = await Product.updateProduct(
      req.body,
      req.params.id
    );
console.log("response", response)
    res.json(new WSresponse(response, "Product updated", false, 200));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 489));
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.deleteProduct(req.params.id);

    res.json(new WSresponse(null, "Product deleted"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 320));
  }
};

const getAllWithCurrencies = async (req, res) => {
  const cotizador = new Cotizador();
  try {
    const products = await Product.getAll();
        const response = products.map((product) => {
      const currencies = {
        arsPrice: cotizador.getCurrencyPrice(product.price, "ARS"),
        uyuPrice: cotizador.getCurrencyPrice(product.price, "UYU"),
      };
      return new ProductDTO(product, currencies);
    });
    res.json(new WSresponse(response, "productsDTO"));

  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 320));
  }
};

module.exports = {
  getAll,
  create,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllWithCurrencies,
};