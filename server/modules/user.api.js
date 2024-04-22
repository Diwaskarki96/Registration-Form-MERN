const router = require("express").Router();
const {
  registerValidationSchema,
  loginValidationSchema,
} = require("./user.validation");
const userController = require("./user.controller");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.json({ msg: "Api is working" });
});

router.post("/register", async (req, res, next) => {
  try {
    const userData = req.body;
    const validateDate = await registerValidationSchema.validate(userData);
    const existedUser = await userController.findByEmail({
      email: req.body.email,
    });
    if (existedUser) throw new Error("User existed");
    const result = await userController.register(validateDate);
    res.json({ msg: "success", data: result });
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const userData = req.body;
    const validateData = await loginValidationSchema.validate(userData);
    const result = await userController.login(validateData);
    const token = await jwt.sign({ email: req.body.email }, "shhhhh");
    res.json({ msg: "success", data: result, token });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
