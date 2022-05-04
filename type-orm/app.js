const express = require("express");

const PORT = 3020;


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => console.log("Server has been started on PORT " + PORT));