const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');

const PORT = 3000;

const app =  express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);


app.listen(3000, () => {
    console.log(`Server started on port ${PORT}!`)
})