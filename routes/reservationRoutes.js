const router = require("express").Router();

const reservationController = require("../controllers/reservationControllers");

router.post("/", reservationController.addReservation);

module.exports = router;
