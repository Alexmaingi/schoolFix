const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const db = require("../config");
const { signInValidation, signUpValidation } = require("../validation");
const { encryptPassword } = require("../helpers");
const { isEmpty } = require("lodash");
const pick = require("lodash/pick");

module.exports = {
  signInHandler: async (req, res) => {
    const { error } = signInValidation(req.body);
    if (error)
      return res
        .status(400)
        .send({ errored: true, error: error.details[0].message });

    const { email, password } = req.body;

    const results = await db.search("schoolfix.users", { email });
    // console.log(results)
    if (isEmpty(results))
      return res
        .status(401)
        .json({ errored: true, error: "Account does not exist" });
    const validPassword = await bcrypt.compareSync(password, results.password);

    if (!validPassword)
      return res
        .status(400)
        .json({ errored: true, error: "Password or Email is incorrect" });

    const response = pick(results, ["email"]);

    jwt.sign({ response }, process.env.SECRET_KEY, (err, token) => {
      if (err)
        return res.status(500).json({ err, message: "Internal Server Error" });
      return res.status(200).json({ ...response, authorization_token: token });
    });
  },

  signUpHandler: async (req, res) => {
    const { error } = signUpValidation(req.body);
    if (error)
      return res
        .status(400)
        .send({ errored: true, error: error.details[0].message });

    const { username, phoneNumber, email, password } = req.body;

    const results = await db.search("schoolfix.users", {
      username,
      phoneNumber,
      email,
      password,
    });
    console.log(results);
    if (!isEmpty(results))
      return res
        .status(401)
        .json({ errored: true, error: "Account already exist" });

    const id = uuidv4();
    req.body["userID"] = id;
    // if( password !== confirmPassword ) return res.status(401).json({ errored: true, error: "Password does not match." });
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const result = await db.create("schoolfix.users", {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: hashedPassword,
    });
    res.status(201).json(result);
    console.log(result);

    if (data.length) return res.status(409).json("User already exists");
    const add =
      "INSERT INTO schoolfix.users(`username`, `phoneNumber `email`, `password`)  VALUES (?)";
    const values = [
      user.username,
      user.phoneNumber,
      user.email,
      hashedPassword,
    ];

    db.query(add, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created");
    });

    const response = pick(results, ["username", "phoneNumber", "email"]);

    jwt.sign({ response }, process.env.SECRET_KEY, (err, token) => {
      if (err)
        return res.status(500).json({ err, message: "Internal Server Error" });
      return res.status(200).json({ ...response, authorization_token: token });
    });

  },
};
