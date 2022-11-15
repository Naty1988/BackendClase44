const otherDao = require("../daos/otherDaos.js");

const getAllProductsTest = async () => {

    const dataTest = await otherDao.getAllProductsTest();
    return dataTest;
};


const getInfo = async () => {

    const dataInfo = await otherDao.getInfo();
    return dataInfo;
};


const getRandom = async (cant) => {

    const dataRandom = await otherDao.getRandom(cant);
    return dataRandom;
};

module.exports = { getAllProductsTest, getInfo, getRandom }