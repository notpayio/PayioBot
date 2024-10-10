const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('HEHEHEHEHEHE  <strong> @not.payio</strong> is <strong> Watching You </strong> <br>  <h3> Ray Ki mkc </h3> ');
});

app.listen(port, () => {
  console.log(`Bot running on http://localhost:${port}`);
});
