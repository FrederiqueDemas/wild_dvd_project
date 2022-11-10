const express = require("express");
const UserController = require("../controllers/UserControllers");

const router = express.Router();

router.get("/", UserController.browse);
router.get("/:id", UserController.read);
router.post("/", UserController.add);
router.put("/:id", UserController.modify);
router.delete("/:id", UserController.destroy);

module.exports = router;
