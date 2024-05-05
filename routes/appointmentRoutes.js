const router = require("express").Router();

const appointmentController = require("../controllers/appointmentControllers");

router.post("/", appointmentController.addAppointment);

module.exports = router;
