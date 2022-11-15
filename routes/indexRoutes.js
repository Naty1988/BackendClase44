const Router = require("express");
const router = Router();

// const userRoutes =  require("./userRoutes")
const productRoutes =  require("./productRoutes")
const cartRoutes =  require("./cartRoutes")
const messagesRoutes =  require("./messagesRoutes")
const otherRoutes =  require("./otherRoutes")

// Importación graphql: 
const productController = require ("../GraphQL/product.controller");
const productSchema = require ("../GraphQL/product.schema");
const { graphqlHTTP } = require ("express-graphql");


// router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/cart', cartRoutes);
router.use('/message', messagesRoutes);
router.use('/other', otherRoutes);


// Rutas graphql:

router.use(
    "/graphql",
    graphqlHTTP({
      schema: productSchema,
      rootValue: {
        getProduct: productController.getProduct,
        getProducts: productController.getProducts,
        createProduct: productController.createProduct,
        updateProduct: productController.updateProduct,
        deleteProduct: productController.deleteProduct,
      },
      graphiql: true,
    })
  );

module.exports = router;