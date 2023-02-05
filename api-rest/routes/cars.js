// Importação dos módulos
const express = require("express");

const ctrl = require("../controllers/cars");


// Instanciações
const router = express.Router();
 

// Mapeando as rotas, HTTP
router.get("/", ctrl.getCars);
router.post("/", ctrl.newCar);
router.get("/:id", ctrl.getaCarId);
router.patch("/:id", ctrl.upCar);
router.delete("/:id", ctrl.delCar);

module.exports = router;