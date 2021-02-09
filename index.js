const express = require('express');
const app = express();

const booksRoutes = require('./routes/routerBooks');

app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(booksRoutes);

app.listen(3000, ()=>{
    console.log('server berjalan')
});