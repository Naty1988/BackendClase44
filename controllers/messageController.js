const WSresponse = require("../classes/WSresponseClass");
const menssageFirebaseDaos = require("../daos/menssageFirebaseDaos.js");

let Message = menssageFirebaseDaos.getInstance();
  
  const getAll = async (req, res) => {
  
  try {
    const response = await Message.getAll();

    res.json(new WSresponse(response, "Showing messages"));
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json(new WSresponse(null, "Internal server error", true, 500));
  }
};

const create = async (req, res) => {
  console.log("req.body: ", req.body)
  try {    
    const response = await Message.create(req.body.alias, req.body.apellido , req.body.edad , req.body.id, req.body.nombre, req.body.text);
    res.json(new WSresponse(response, "Message created"));
  } catch (err) {
    console.log(err);
    res.status(400).json(new WSresponse(null, err, true, 400));
  }
};

module.exports = {
  getAll,
  create,
};