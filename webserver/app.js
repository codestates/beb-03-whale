const express = require("express");
const cors = require("cors");
const app = express();

const port = 4000;

const nftRouter = require('./router/nftRouter');
const testRouter = require('./router/testRouter');

const printLog = function (req, res, next) {
  console.log(`http request method is ${req.method}, url is ${req.url}`);
  next();
};

app.use(cors());
app.use(printLog);
app.use(express.json());

app.use('/nft', nftRouter);
app.use('/test', testRouter);

app.get("/", (req, res) => {
  res.status(200).send("This is whale server Homepage");
});

app.use((req, res, next) => {
  res.status(404).send("Not Found!");
});

app.listen(port, () => {
  console.log(`[Running] Whale Server is listening on port ${port}`);
});

module.exports = app;
