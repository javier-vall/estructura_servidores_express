const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {});



const PORT = 8080;

app.listen(PORT, console.log(`Server on port = ${PORT}`));
