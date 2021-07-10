const express = require("express");
const { body } = require("express-validator");

//importing auth' controller
const { login } = require("../controllers/auth/login");
const { register } = require("../controllers/auth/register");
const { updatePassword } = require("../controllers/auth/updatePassword");
const { uploadImage } = require("../controllers/auth/updatePhoto");
const { loadCategory, addCategory } = require("../controllers/category");
const { isAuth } = require("../middleware/is-auth");

const router = express.Router();

router.post(
  "/register",
  [body("email").isEmail(), body("password").isLength({ min: 8 })],
  register
);

router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 8 })],
  login
);

router.post("/upload-image", isAuth, uploadImage);
router.post("/update-password", isAuth, updatePassword);

router.get("/category", loadCategory);

router.post("/add-category", addCategory);
module.exports = router;
