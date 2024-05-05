const router = require("express").Router();

const reservationController = require("../controllers/reservation");

router.post("/", reservationController.addReservation);

module.exports = router;
