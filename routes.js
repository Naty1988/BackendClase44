const config = require("./config");

// Logs

const log4js = require("log4js");

log4js.configure({
  appenders: {
    miLoggerConsola: { type: "console" },
    miLoggerFile: { type: "file", filename: "info.log" },

  },
  categories: {
    default: { appenders: ["miLoggerConsola"], level: "trace" },
    consola: { appenders: ["miLoggerConsola"], level: "debug" },
    archivo: { appenders: ["miLoggerFile"], level: "warn" },
    todos: { appenders: ["miLoggerConsola", "miLoggerFile"], level: "error" },

  }
});
// Definir niveles

const logger = log4js.getLogger();
const loggerConsola = log4js.getLogger('consola');
const loggerArchivo = log4js.getLogger('archivo');
const loggerTodos = log4js.getLogger('todos');

// --


// // Mails
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//     user: config.MAIL_USUARIO,
//     pass: config.MAIL_PASS,
//   }
// });


// // ------
// function getRoot(req, res) { }

// function getLogin(req, res) {
//   if (req.isAuthenticated()) {
//     var user = req.user;
//     logger.info("user logueado");
//     res.render("main", {
//       usuario: user.username,
//       nombre: user.firstName,
//       apellido: user.lastName,
//       email: user.email,
//     });
//   } else {
//     logger.info("user NO logueado");
//     res.sendFile(__dirname + "/views/login.html");
//   }
// }

// function getSignup(req, res) {

//   res.sendFile(__dirname + "/views/registro.html");
// }

// function postLogin(req, res) {
//   var user = req.user.username;
//   console.log("usuario logueado")
//   res.render('main.ejs', { user })
// }
// const sendMailAdminNewRegistration = require("./libs/mensajesResponse")

// function postSignup(req, res) {
//   var user = req.user;

//   // Mails
//   // const mailOptions = {
//   //   from: "Servidor Node",
//   //   to: "dale.kuphal47@ethereal.email",
//   //   subject: "Nuevo registro",
//   //   html: ` Nuevo usuario registrado:
//   //   Username: ${user.username},     
//   //   Nombre: ${user.nombre},
//   //   Dirección: ${user.direccion},
//   //   Edad: ${user.edad}, `,
//   // };
//   // const mandarMail = async () => {

//   //   try {
//   //     const info = await transporter.sendMail(mailOptions);

//   //     console.log(info);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }
//   // mandarMail()
//   sendMailAdminNewRegistration()
//   res.sendFile(__dirname + "/views/login.html");
// }

// function getFaillogin(req, res) {
//   logger.error("error en login");
//   res.render("login-error.ejs", {});
// }

// function getFailsignup(req, res) {
//   logger.error("error en signup");
//   res.render('failRegister.ejs')
// }

// function getLogout(req, res) {
//   req.logout(function (err) {
//     if (err) { return next(err); }
//     res.render('logout.ejs')
//   });
// }

// function failRoute(req, res) {
//   res.status(404).render("failRegister", {});
// }

// module.exports = {
//   getRoot,
//   getLogin,
//   postLogin,
//   getFaillogin,
//   getLogout,
//   failRoute,
//   getSignup,
//   postSignup,
//   getFailsignup,
// };
