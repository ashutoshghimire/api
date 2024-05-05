const Appointment = require("../models/appointmentModels");

async function addAppointment(req, res) {
  const { date, time } = req.body;
  if (!date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const dateInFuture = new Date(date) > new Date();
  if (!dateInFuture) {
    return res.status(400).json({ message: "Event date should be in future" });
  }

  if (time === "15:00") {
    return res.status(400).json({ message: "Slot is unavailable" });
  }

  try {
    const appointment = new Appointment({ date, time });
    await appointment.save();
    return res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, sucess: false });
  }
}

module.exports = { addAppointment };
