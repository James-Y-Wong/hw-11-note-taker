const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes.js")

// initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api", apiRoutes);

app.use('/', htmlRoutes);

// start the server on the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);