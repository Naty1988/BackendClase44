const ProductMongoDAO = require("./productMongoDao.js");
const ProductFirebaseDAO = require("./ProductFirebaseDAO");

class DaoFactory {
  createDao(database) {
    console.log("database desde dao factory", database)
    if (database === "FIREBASE") {
      console.log("Returning ProductFirebaseDAO", ProductFirebaseDAO)
      return new ProductFirebaseDAO();
  }
    if (database === "MONGO") {
    console.log("Returning ProductMongoDAO", ProductMongoDAO)
    return new ProductMongoDAO()
  }
}
}

module.exports = DaoFactory;