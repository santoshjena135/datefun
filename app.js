const express = require('express');
const port = 5500;

const app = express();

app.get("/hello", (req, res) => {
  res.send("HELLO FROM SEVER!");
});

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
//console.log("Server Started!")