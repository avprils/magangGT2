const express = require('express') //import
//const superheroes = require('superheroes')
//const dateArithmetic = require("date-arithmetic")
//const decade = dateArithmetic.decade(new Date)
//const emoji = require('node-emoji')

const app = express() //inisiasliassi
const port = 3000 //inisialisasi port dapat diubah2


//endpoint root
app.get('/', (req, res) => { // request & respond. / mengeluarkan hello world
  res.send('Hello World!')
})

//routes
app.use('/', require('./routes/index'))

/*
//endpoint test
app.get('/test', (req, res) => { // request & respond. /test mengeluarkan pesan berikut
   //console.log (req.query)
    const nama = req.query.nama
    const alamat = req.query.alamat
    if (nama == undefined || alamat == undefined) {
        res.send('data yang anda kirimkan kurang lengkap')
    }
    res.send('namamu adalah' + nama +', dari '+alamat)
})

//endpoint superheroes
app.get ('/random-superheroes', (req, res) => {
    const randSuperheroes = superheroes.random()
    res.send('Superhero anda adalah ' + randSuperheroes)
})
// jadi, di express.js masih dapat ditambah npm yang lain.
// dengan cara menambahkan konstanta atau deklarasi variabel dulu diawal.

app.get('/date-now', (req, res) => {
  console.log(decade)
  res.send('Tahun ini adalah tahun '+ decade)
})

app.get('/emoji', (req, res) => {
  //console.log()
  res.send(emoji.get('coffee'))
})

*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

