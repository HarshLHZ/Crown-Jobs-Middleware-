const express = require("express");
const jwt = require("jsonwebtoken");
const authorize = require("./authorization-middleware");
const config = require("./config");
const {crowJob} = require("./test");
const app = express();
const port = process.env.PORT || 5000;

// Request a token,
// DISCLAIMER: User should be authenticated!!!
app.get("/token", (req, res) => {
  const payload = {
    name: "Jimmy",
    scopes: "customer:read"
  };

  const token = jwt.sign(payload, config.JWT_SECRET);
  res.send(token);
});

app.get("/customer", (req, res) => {
  res.send("Customer Information");
});

const server = app.listen(port, () => {
  console.log(`Server is listening on ${server.address().port}`);
});

app.get("/crownJob", authorize, async (req, res) =>{
    crowJob();
})