// Dependancies 
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers');
const sequelize = require('./config/connection');

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set handlebars.js as the default template emgine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Sync sequelize and start the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
