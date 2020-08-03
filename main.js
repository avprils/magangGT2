const express = require('express') //import
const superheroes = require('superheroes')
const app = express() //inisiasliassi
const port = 3000 //inisialisasi port dapat diubah2


//endpoint root
app.get('/', (req, res) => { // request & respond. / mengeluarkan hello world
  res.send('Hello World!')
})


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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})