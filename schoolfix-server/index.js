const express = require("express");
const config = require("./config");
const cors = require("cors");

const app = express();

const Routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", Routes);

const PORT = process.env.PORT || 9005;

app.listen(PORT, () => 
  console.log(`schoolfix-server running on port:${PORT}`)
);