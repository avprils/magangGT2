const express = require('express');
const app = express();
const port = 1122;
const things = require('./routes/things');

app.use(express.json());
app.use('/things', things);
    //use the things.js file to handle
    //endpoints that start with /things

app.get('/', (req, res)=> {
    //handle root
    res.send('Ini Root')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })