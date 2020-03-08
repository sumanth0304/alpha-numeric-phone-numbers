const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const paginate = require("jw-paginate");
const generator = require("./util/generator");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/getalphaNnumericphoneNumbers", (req, res) => {
  const items = generator.alphaNnumericphoneNumbers(req.query.phoneNumber);
  const page = parseInt(req.query.page) || 1;
  const pager = paginate(items.length, page);
  const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
  return res.json({ pager, pageOfItems });
});

// start server
const port = 4000;
app.listen(port, () => console.log("Server listening on port " + port));

module.exports = app;
