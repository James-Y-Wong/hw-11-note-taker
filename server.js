const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes.js")
// const path = require("path");
// const api = require("./public/assets/js/index.js");

// initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use("/api", apiRoutes);

app.use('/', htmlRoutes);

// //GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// );

// // GET Route for notes page
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/notes.html"))
// );

// // Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );

// start the server on the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);