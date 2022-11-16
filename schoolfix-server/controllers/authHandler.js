const bcrypt = require("bcryptjs");
const { v1: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const db = require('../config');
const { signInValidation, addAUserValidation } = require("../validation")
const { encryptPassword } = require('../helpers');
const { isEmpty } = require("lodash");


module.exports = {
    signInHandler: async (req, res) => {
        console.log(req.body)
    },
    signUpHandler: async (req, res) => {
        console.log(req.body)
        res.status(200).json("User created")

    }
};