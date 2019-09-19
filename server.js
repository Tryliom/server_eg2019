const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3666;

app.post('/granolax', (req, res) => {
  const ip = req.body.ip;

  if (ip == "10.229.37.109")
      res.send("success");
  else
	  res.send("error");
});

app.post('/canardpc', (req, res) => {
  const pwd = req.body.password;

  if (pwd == "I LOVE POUTINE")
      res.send(JSON.parse({
		  "pcx":"",
		  "ip-pcy":""
		}));
  else
	  res.send("error");
});

app.listen(port, function () {
  console.log('Server on!')
});