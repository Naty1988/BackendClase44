const Cart = require ("../models/cartModel");
const Product = require ("../models/mongoose/productModel");
const config = require("../config");

const getAllCarts = async () => {
  const carts = await Cart.find();

  return carts;
};

// Mensaje carrito

const twilio = require("twilio")

const accountSid = "AC96b91b5781959629eb3ea1e1c90946ee";
const authToken = "0a231f8850ebea8faae0f090fe23cdd1";

const client = twilio(accountSid, authToken);

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: config.MAIL_USUARIO,
    pass: config.MAIL_PASS,
  }
});

  const sendWPClient = async (nombre, telefono) => {
    console.log("Enviando WP a cliente")
    const option = {
      body: `Hola ${nombre}. Su pedido fue recibido. Se encuentra en proceso. `,
      from: "whatsapp:+14155238886",
      to: `whatsapp:+549${telefono}`,
    };
    try {
      const message = await client.messages.create(option);
      console.log(message);

    } catch (error) {
      console.log(error);
    }
  }



const createCart = async ( user, product ) => {
  console.log("userId: ", user)
  console.log("productId: ", product)
 
  const existingCart = await Cart.findOne({ user: user });
  const productToAdd = await Product.findOne({ _id: product });

  
  if (existingCart) {
    existingCart.products.push(productToAdd);

    await existingCart.save();
  
    // const { user } = req;
    // const userId = req.params.userId
    // const productId = req.params.productId
    // console.log("userId: ", userId)
    // console.log("productId: ", productId)
    // const existingCart = await Carrito.findOne({ user: userId });
    // const product = await Product.findOne({ _id: productId });
    
    //   const usuario = await User.findOne({ _id: user });
    //   console.log("existingCart: ", existingCart)
    //   console.log("product: ", product)
    //   console.log("usuario: ", usuario)
    //   sendWPClient(usuario.nombre, usuario.telefono)

    // res.json(existingCart);
    return existingCart;
  } else {
    const newCart = new Cart({ user: user, products: [productToAdd] });

    await newCart.save();
    return newCart;
    // res.json(newCart);
  }
}


// const createCart = async (cartToCreate) => {
//   const createdCart = await Cart.create(cartToCreate);

//   return createdCart;
// };

const getCartById = async (cartId) => {
  const cart = await Cart.findById(cartId);

  return cart;
};

const updateCart = async (updateData, cartId) => {
  const updatedCart = await Cart.updateOne(
    { _id: cartId },
    updateData
  );

  return updatedCart;
};

const delteCart = async (cartId) => {
  await Cart.deleteOne({ _id: cartId });
};

const cartDao = {
    getAllCarts,
    createCart,
    getCartById,
    updateCart,
    delteCart,
};

module.exports = cartDao;