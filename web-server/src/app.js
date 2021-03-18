const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../../web-server/views')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath) 

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather OK",
        name: 'Khanh Pi'
    })
})

app.get('/help', (req, res) => {
    res.send({
        name: 'KhanhPi',
        age: 25
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        res.send( {
            error: "You must provide a search term"
        })
    }

    console.log(req.query.search)
    
    res.send({
        products: []
    })
})


app.get('/about', (req, res) => {
    let a = 'String con'
    a = a + 4
    res.send(a)
})

app.get('*', (req, res) => {
    res.send('404', {
        title: '404',
        name: "Khanh Pi",
        errorMessage: 'Page not found'
    })
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})