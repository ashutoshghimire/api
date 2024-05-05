const router = require("express").Router();

const appointmentController = require("../controllers/appointment");

router.post("/", appointmentController.addAppointment);

module.exports = router;
