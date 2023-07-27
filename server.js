// requiring resources
const express = require('express');
const path = require('path');
const routes = require('./routes');
// importing sequelize connection
const sequelize = require('./config/connection')

// starting the express and setting port
const app = express();
const PORT = process.env.PORT || 3001;

// applying middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(()=>{
  app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}!`);
  });
})


 