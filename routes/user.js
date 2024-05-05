const router = require("express").Router();
const userController = require("../controllers/user");

router.post("/", userController.addUser);

module.exports = router;