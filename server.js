const express = require('express');
const routes = require('./controlers');
const sequelize = require("./config/connection")

// creates connection to the server
const app = express();
const PORT = process.env.PORT || 3001;

// setup express data handling
app.use(express.json());
// true assigned because we will get data from a form
app.use(express.urlencoded({ extended: true }));

// turns on routes from routes folder
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force : false}).then( () => {
    app.listen(PORT, () => console.log (`App listening on port http://localhost:${PORT}`));
})

