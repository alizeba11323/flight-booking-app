const express = require("express");
const { port } = require("./config/serverconfig");
const setUpServer = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(port, function () {
    console.log(`app running on port ${port}`);
  });
};

setUpServer();
