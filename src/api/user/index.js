const router = require("express").Router();
const userController = require("./user.controller");

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.get("/", userController.listUsers);
router.get("/:userId", userController.showUser);
router.put("/:userId", userController.updateUser);
router.post("/", userController.createUser);

module.exports = router;